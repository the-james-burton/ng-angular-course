import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { PassengerFormComponent } from '../../components/passenger-form/passenger-form.component';
import { Passenger } from '../../models/passenger.interface';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      <passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ) {}
  ngOnInit(): void {
    // different to course - need to use pipe...
    this.route.params.pipe(
      switchMap((data: Passenger) => this.passengerService.getPassenger(data.id)),
      ).subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger) {
    console.log(event);
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, event);
      });
  }
}
