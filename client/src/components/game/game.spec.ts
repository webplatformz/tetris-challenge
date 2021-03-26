import {newSpecPage} from '@stencil/core/testing';
import {Game} from './game';
import {Board} from '../board/board';

describe('app-game', () => {
  let websocket: WebSocket;

  beforeEach(() => {
    websocket = {send: jest.fn() as any} as WebSocket;
    global.WebSocket = function () {
      return websocket;
    } as any;
  });

  it('should initially pass an empty board as state', async () => {
    const page = await newSpecPage({
      components: [Game, Board],
      html: `<app-game></app-game>`,
    });

    expect(page.root?.shadowRoot?.querySelector('app-board')).toHaveProperty('state', [[]]);
  });

  it('should set the state from the socket response when a board message is received', async () => {
    const page = await newSpecPage({
      components: [Game, Board],
      html: `<app-game></app-game>`,
    });

    websocket.onmessage!(buildMessageEvent({type: 'BOARD', board: [[0, 1, 0]]}));
    await page.waitForChanges();

    expect(page.root?.shadowRoot?.querySelector('app-board')).toHaveProperty('state', [[0, 1, 0]]);
  });

  it('should set the state from the socket response when a board piece message is received', async () => {
    const page = await newSpecPage({
      components: [Game, Board],
      html: `<app-game></app-game>`,
    });

    websocket.onmessage!(buildMessageEvent({
      type: 'BOARD',
      board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    }));
    websocket.onmessage!(buildMessageEvent({type: 'PIECE', pieceType: 1, movingPiece: [{x: 1, y: 1}, {x: 1, y: 2}]}));
    await page.waitForChanges();

    expect(page.root?.shadowRoot?.querySelector('app-board')).toHaveProperty('state', [
      [0, 0, 0],
      [0, 1, 0],
      [0, 1, 0],
    ]);
  });

  it.each<[Direction, string]>([
    ['LEFT', 'ArrowLeft'],
    ['RIGHT', 'ArrowRight'],
  ])('should send MOVE_PIECE with direction %s when %s pressed', async (direction, arrowKey) => {
    const page = await newSpecPage({
      components: [Game, Board],
      html: `<app-game></app-game>`,
    });

    page.win.dispatchEvent(new KeyboardEvent('keydown', {key: arrowKey}));

    expect(websocket.send).toHaveBeenCalledWith(JSON.stringify({
      type: 'MOVE_PIECE',
      direction,
    } as MovePieceRequest));
  });

  it.each<[Direction, string]>([
    ['LEFT', 'ArrowDown'],
    ['RIGHT', 'ArrowUp'],
  ])('should send ROTATE_PIECE with direction %s when %s pressed', async (direction, arrowKey) => {
    const page = await newSpecPage({
      components: [Game, Board],
      html: `<app-game></app-game>`,
    });

    page.win.dispatchEvent(new KeyboardEvent('keydown', {key: arrowKey}));

    expect(websocket.send).toHaveBeenCalledWith(JSON.stringify({
      type: 'ROTATE_PIECE',
      direction,
    } as RotatePieceRequest));
  });
});

function buildMessageEvent(message: ResponseMessageUnion) {
  return {data: JSON.stringify(message)} as MessageEvent<string>;
}

