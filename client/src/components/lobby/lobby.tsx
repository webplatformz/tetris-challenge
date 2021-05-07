import {Component, EventEmitter, h, Host, State, Event} from '@stencil/core';
import {createNewGame, requestGames} from '../../restApi';

@Component({
  tag: 'app-lobby',
  shadow: true,
})
export class Lobby {
  @State()
  availableGames: string[] = [];

  @Event()
  gameSelected: EventEmitter<string>;

  async connectedCallback() {
    this.availableGames = await requestGames();
  }

  render() {
    return (
      <Host>
        <header class="header">
          <h1>Lobby</h1>
        </header>
        <main class="board">
          <button onClick={() => createNewGame()}>Create new</button>

          <ul>
            { this.availableGames.map(gameId => (<li onClick={() => this.gameSelected.emit(gameId)}>{gameId}</li>))}
          </ul>
        </main>
      </Host>
    );
  }
}
