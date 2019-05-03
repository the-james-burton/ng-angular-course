import { Passenger } from './models/passenger.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PassengerDashboardService {
  // different from course - HttpClient instead of Http...
  constructor(private http: HttpClient) {
    console.log(this);
  }

  getPassengers(): Passenger[] {
    return [
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
