import {Component, h, Host, State} from '@stencil/core';
import {initializeWebSocket, onMessage, startGame} from '../../webSocketApi';

export type BoardState = number[][];

@Component({
  tag: 'app-game',
  styleUrl: 'game.scss',
  shadow: true,
})
export class Game {
  @State() currentBoard: BoardState = [[]];
  baseBoard: BoardState = [[]];

  render() {
    return (
      <Host>
        <header class="header">
          <h1>Tetris</h1>
        </header>
        <main class="board">
          <app-board state={this.currentBoard}/>
        </main>
      </Host>
    );
  }

  connectedCallback(): void {
    initializeWebSocket('myfancyusername').then(() => startGame());
    onMessage((response) => {
      console.log('Received message', response);
      switch (response.type) {
        case 'BOARD':
          this.baseBoard = response.board;
          this.currentBoard = response.board;
          break;
        case 'PIECE':
          this.currentBoard = updateBoardWithPiece(this.baseBoard, response);
          break;
      }
    });
  }
}

function updateBoardWithPiece(baseBoard: BoardState, response: TetrisPieceResponse): BoardState  {
  const xs = response.movingPiece.map(piece => piece.x);
  const ys = response.movingPiece.map(piece => piece.y);

  return baseBoard.map((row, index) => {
    if (!ys.includes(index)) {
      return row;
    }

    return row.map((currentPieceType, index) => xs.includes(index) ? response.pieceType : currentPieceType);
  });
}
