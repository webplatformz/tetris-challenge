import {Component, h, Host, Prop} from '@stencil/core';
import {Block} from '../app-root/app-root';

@Component({
  tag: 'app-board',
  styleUrl: 'app-board.scss',
  shadow: true,
})
export class AppBoard {
  @Prop() state: readonly Block[][] = [[]];

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
