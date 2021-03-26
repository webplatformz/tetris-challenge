import {Component, h, Host, State} from '@stencil/core';
import {initializeWebSocket, onMessage, startGame} from '../../webSocketApi';

export type Block = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

@Component({
  tag: 'app-root',
  styleUrl: 'root.scss',
  shadow: true,
})
export class Root {
  @State() state: Block[][] = [
    [4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 2, 3, 3, 3, 3, 5, 5, 5],
  ];

  render() {
    return (
      <Host>
        <app-board state={this.state}/>
      </Host>
    );
  }

  connectedCallback(): void {
    initializeWebSocket('myfancyusername').then(() => startGame());
    onMessage((response) => {
      switch (response.type) {
        case 'BOARD':
          console.log('Received new board:', response.board);
          break;
        case 'PIECE':
          console.log('Received new piece:', response.movingPiece);
          break;
        default:
          console.log('Received unhandled message:', response);
          break;
      }
    });
  }
}
