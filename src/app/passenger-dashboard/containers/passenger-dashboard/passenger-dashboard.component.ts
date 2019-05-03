import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count [items]="passengers"> </passenger-count>
      <!-- this will update because javascript passes by reference... -->
      <div *ngFor="let passenger of passengers">
        {{ passenger.fullname }}
      </div>
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
  // automated dependency injection...
  constructor(private passengerService: PassengerDashboardService) {}

  ngOnInit(): void {
    // synchronous call...
    this.passengers = this.passengerService.getPassengers();
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
