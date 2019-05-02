import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count [items]="passengers"> </passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      >
      </passenger-detail>
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
  handleRemove(event: Passenger) {
    console.log('remove: ', event);
    // used a lambda instead...
    this.passengers = this.passengers.filter(
      passenger => passenger.id !== event.id
    );
  }
  handleEdit(event: Passenger) {
    console.log('edit: ', event);
    // used a lambda instead...
    this.passengers = this.passengers.map(passenger =>
      passenger.id === event.id
        ? Object.assign({}, passenger, event)
        : passenger
    );
    console.log('passengers: ', this.passengers);
  }
}
