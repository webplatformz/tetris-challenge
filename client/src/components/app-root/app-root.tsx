import {Component, h, Host} from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {

  render() {
    return (
      <Host>
        <h1>Hello</h1>
      </Host>
    );
  }
}
