import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <!-- event binding -->
    <div class='app'>
      <button (click)='handleClick()'>
        change name
      </button>
      <input
        type='text'
        [value]='name'
        (input)='handleInput($event)'
        (blur)='handleBlur($event)'/>
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'abc';

  handleClick() {
    this.name = 'xyz';
  }

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }
}
