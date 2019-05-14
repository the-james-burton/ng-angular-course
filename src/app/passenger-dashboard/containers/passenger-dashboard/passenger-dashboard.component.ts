import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
        (view)="handleView($event)"
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
  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService
  ) {}

  ngOnInit(): void {
    // synchronous call...
    this.passengerService.getPassengers().subscribe(
      (data: Passenger[]) => {
        console.log('data:', data);
        this.passengers = data;
      },
      (error: any) => console.log('error: ', error)
    );
  }

  handleRemove(event: Passenger) {
    this.passengerService
      .removePassenger(event)
      .subscribe(
        (data: Passenger) =>
          (this.passengers = this.passengers.filter(
            passenger => passenger.id !== event.id
          ))
      );
    console.log('remove: ', event);
  }

  handleEdit(event: Passenger) {
    console.log('edit: ', event);
    this.passengerService
      .updatePassenger(event)
      // different to course - doing (data: Passenger) causes error
      .subscribe(data => {
        this.passengers = this.passengers.map(passenger => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
    console.log('passengers: ', this.passengers);
  }

  handleView(event: Passenger) {
    this.router.navigate(['/passengers', event.id]);
  }
}
