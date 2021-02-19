import {Component, h, Host, Prop} from '@stencil/core';
import {Block} from '../root/root';

@Component({
  tag: 'app-board',
  styleUrl: 'app.scss',
  shadow: true,
})
export class Board {
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
