import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <!-- event binding -->
    <div class='app'>
      <input
        type='text'
        [value]='name'
        (input)='handleChange($event.target.value)'>

      <!-- different from course: ng-template not template -->
      <ng-template [ngIf]='name.length > 2'>
        <div>
          Searching for... {{ name }}
        </div>
      </ng-template>

      <div *ngIf='name.length > 2'>
        searching for... {{ name }}
      </div>
    </div>
  `
})
export class AppComponent {
  name: string = 'abc';

  handleChange(value: string) {
    this.name = value;
  }

}
