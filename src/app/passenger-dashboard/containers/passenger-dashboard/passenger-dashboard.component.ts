import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index">
          <span class="status" [class.checked-in]="passenger.checkedIn"></span>
          {{ i }}: {{ passenger.fullname }}
          <div class="date">
            Check in date:
            <!-- different to course: yMMMMd replaced with longDate -->
            {{
              passenger.checkInDate
                ? (passenger.checkInDate | date: 'longDate' | uppercase)
                : 'Not checked in'
            }}
          </div>
          <div class="children">
            <!-- this is the safe navigation -->
            Children: {{ passenger.children?.length || 0 }}
          </div>
        </li>
      </ul>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() {}
  ngOnInit(): void {
      this.passengers = [
        {
            id: 1,
            fullname: 'John',
            checkedIn: true,
            checkInDate: 1490742000000,
            children: null
          },
          {
            id: 2,
            fullname: 'Julie',
            checkedIn: false,
            checkInDate: null,
            children: [{ name: 'Alan', age: 12 }, { name: 'Alex', age: 7 }]
          },
          {
            id: 3,
            fullname: 'James',
            checkedIn: true,
            checkInDate: 1491606000000,
            children: null
          },
          {
            id: 4,
            fullname: 'Joseph',
            checkedIn: true,
            checkInDate: 1488412800000,
            children: [{ name: 'Amy', age: 1 }]
          },
          {
            id: 5,
            fullname: 'Josie',
            checkedIn: false,
            checkInDate: null,
            children: null
          }
        ];
      }
}
