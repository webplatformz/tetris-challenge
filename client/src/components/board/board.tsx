import {Component, h, Host, Prop} from '@stencil/core';
import {BoardState} from '../game/game';

@Component({
  tag: 'app-board',
  styleUrl: 'board.scss',
  shadow: true,
})
export class Board {
  @Prop() state: BoardState;

  render() {
    if (this.state) {
      return (
        <Host>
          <div class='board'>
            {this.state.flatMap(row => row.map(element => (<div class='block' data-type={element}/>)))}
          </div>
        </Host>
      );
    }
  }
}
