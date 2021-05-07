import {Component, Host, h, Event, EventEmitter} from '@stencil/core';

@Component({
  tag: 'app-choose-username',
  shadow: true,
})
export class AppChooseUsername {
  @Event()
  usernameSelected: EventEmitter<string>;
  inputElement?: HTMLInputElement;

  submitClick() {
    if (this.inputElement && this.inputElement.value !== '') {
      this.usernameSelected.emit(this.inputElement.value)
    }
  }

  render() {
    return (
      <Host>
        <input ref={input => this.inputElement = input} type="text" placeholder="Username"/>
        <button onClick={() => this.submitClick()}>To lobby</button>
      </Host>
    );
  }

}
