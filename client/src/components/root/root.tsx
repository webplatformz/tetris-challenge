import {Component, h, Host, State} from '@stencil/core';
import {initializeWebSocket, onMessage, startGame} from '../../webSocketApi';

@Component({
  tag: 'app-root',
  styleUrl: 'root.scss',
  shadow: true,
})
export class Root {
  @State() state: number[][] = [[]];

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
      console.log('Received message', response);
      switch (response.type) {
        case 'BOARD':
          this.state = response.board;
          break;
        case 'PIECE':
          break;
        default:
          break;
      }
    });
  }
}
