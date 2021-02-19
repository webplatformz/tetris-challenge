import {Component, h, Host, State} from '@stencil/core';

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
    const webSocket = new WebSocket('ws://localhost:8080/tetris/myfancyusername');
    webSocket.onopen = () => console.log('websocket connected');
    webSocket.onmessage = ({data}) => {
      const parsedMessage = JSON.parse(data) as MessageResponseUnion;
      switch (parsedMessage.type) {
        case "BOARD":
          console.log('Received new board:', parsedMessage.board);
          break;
        case "PIECE":
          console.log('Received new piece:', parsedMessage.movingPiece);
          break;
      }
    };
    webSocket.onclose = () => console.log('websocket closed');
    webSocket.onerror = console.error;
  }
}
