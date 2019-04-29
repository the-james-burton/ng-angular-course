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
        [ngModel]='name'
        (ngModelChange)='handleChange($event)' />
        <input
        type='text'
        [(ngModel)]='name' />
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'abc';

  handleClick() {
    this.name = 'xyz';
  }

  handleChange(value: string) {
    this.name = value;
  }

}
