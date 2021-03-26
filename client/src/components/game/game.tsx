import {Component, h, Host, State} from '@stencil/core';
import {initializeWebSocket, onMessage, startGame} from '../../webSocketApi';

@Component({
  tag: 'app-game',
  styleUrl: 'game.scss',
  shadow: true,
})
export class Game {
  @State() currentBoard: number[][] = [[]];
  baseBoard: number[][] = [[]];

  render() {
    return (
      <Host>
        <app-board state={this.currentBoard}/>
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
          const xs = response.movingPiece.map(piece => piece.x);
          const ys = response.movingPiece.map(piece => piece.y);

          this.currentBoard = this.baseBoard.map((row, index) => {
            if (!ys.includes(index)) {
              return row;
            }

            return row.map((currentPieceType, index) => xs.includes(index) ? response.pieceType : currentPieceType);
          });
          break;
        default:
          break;
      }
    });
  }
}
