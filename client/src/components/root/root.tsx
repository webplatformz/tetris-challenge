import {Component, h, State} from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'root.scss',
  shadow: true,
})
export class Root {
  @State()
  uiState: 'IN_LOBBY' | 'IN_GAME' | 'CHOOSING_USERNAME' = 'CHOOSING_USERNAME';
  selectedGameId: string | undefined;
  selectedUsername: string | undefined;

  selectGame(gameId: string) {
    this.selectedGameId = gameId;
    this.uiState = 'IN_GAME';
  }

  selectUsername(username: string) {
    this.selectedUsername = username;
    this.uiState = 'IN_LOBBY';
  }

  render() {
    if (this.uiState === 'CHOOSING_USERNAME') {
      return <app-choose-username onUsernameSelected={({detail}) => this.selectUsername(detail)}/>;
    }

    if (this.uiState === 'IN_LOBBY') {
      return <app-lobby onGameSelected={({detail}) => this.selectGame(detail)}/>;
    }

    if(this.selectedGameId) {
      return <app-game gameId={this.selectedGameId} username={this.selectedUsername}/>
    }

    return <p>Whoops</p>
  }
}
