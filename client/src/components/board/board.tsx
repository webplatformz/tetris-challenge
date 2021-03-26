import {Component, h, Host, Prop} from '@stencil/core';
import {Block} from '../root/root';

@Component({
  tag: 'app-board',
  styleUrl: 'board.scss',
  shadow: true,
})
export class Board {
  @Prop() state: readonly Block[][] = [[]];

  render() {
    const { columnCount, rowCount } = getBoardDimension(this.state);

    return (
      <Host>
        <div class='board' style={{
          'grid-template-columns': `repeat(${columnCount}, 3rem`,
          'grid-template-rows': `repeat(${rowCount}, 3rem)`,
        }}>
          {this.state.flatMap(row => row.map(element => (<div class='block' data-type={element}/>)))}
        </div>
      </Host>
    );
  }
}

function getBoardDimension(board: readonly Block[][]) {
  return {
    rowCount: board.length,
    columnCount: board[0]?.length ?? 0,
  }
}
