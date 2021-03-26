import {Component, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'app-board',
  styleUrl: 'board.scss',
  shadow: true,
})
export class Board {
  @Prop() state: readonly number[][];

  render() {
    return (
      <Host>
        <div class='board'>
          {this.state.flatMap(row => row.map(element => (<div class='block' data-type={element}/>)))}
        </div>
      </Host>
    );
  }
}
