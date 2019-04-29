import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <!-- event binding -->
    <div class='app'>
      <button (click)='handleClick(username.value)'>
        get value
      </button>
      <input type='text' #username>
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'abc';

  handleClick(value: string) {
    console.log(value);
  }

}
