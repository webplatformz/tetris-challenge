import {Component, h} from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'root.scss',
  shadow: true,
})
export class Root {
  render() {
    return (<app-game/>);
  }
}
