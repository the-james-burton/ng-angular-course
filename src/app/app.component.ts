import { Component } from '@angular/core';

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <h3>Airline Passengers</h3>
    <ul>
      <!-- different from course: ng-template instead of template -->
      <ng-template ngFor let-passenger let-i='index' [ngForOf]='passengers'>
        <li>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ng-template>
    </ul>
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor='let passenger of passengers; let i = index;'>
        {{ i }}: {{ passenger.fullname }}
      </li>
    </ul>
</div>
  `
})

export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'John',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Julie',
    checkedIn: false
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Joseph',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Josie',
    checkedIn: false
}];
}
