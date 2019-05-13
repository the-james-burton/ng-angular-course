import { Component } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger name:
        <input type="text" name="fullname" [ngModel]="detail?.fullname" />
      </div>
      <div>
        Passenger id:
        <input type="number" name="id" [ngModel]="detail?.id" />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)"
          />
        </label>
      </div>

      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate"
        />
      </div>

      {{ form.value | json }}
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      // in real world, this would likely be done on the server...
      this.detail.checkInDate = Date.now();
    }
  }
}
