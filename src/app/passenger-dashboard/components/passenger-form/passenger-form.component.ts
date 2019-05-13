import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger name:
        <input
          type="text"
          name="fullname"
          required
          #fullname="ngModel"
          [ngModel]="detail?.fullname"
        />
        <!-- different from course - also required a ? before errors to avoid vs validation error -->
        <div *ngIf="fullname?.errors?.required && fullname.dirty" class="error">
          Passenger name is required
        </div>
      </div>
      <div>
        Passenger id:
        <input
          type="number"
          name="id"
          required
          #id="ngModel"
          [ngModel]="detail?.id"
        />
        <!-- different from course - also required a ? before errors to avoid vs validation error -->
        <div *ngIf="id?.errors?.required && id.dirty" class="error">
          Passenger id is required
        </div>
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

      <div>
        Luggage:
        <select name="baggage" [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage"
          >
            {{ item.value }}
          </option>
        </select>
      </div>

      <!-- note that this does not appear to change the style
          of the button but does add the 'disabled' attribute as expected -->
      <button type="submit" [disabled]="form.invalid">
        Update Passenger
      </button>

      <div>{{ form.invalid }}</div>
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage'
    },
    {
      key: 'hand-only',
      value: 'Hand baggage'
    },
    {
      key: 'hold-only',
      value: 'Hold baggage'
    },
    {
      key: 'hand-hold',
      value: 'Hand and hold baggage'
    }
  ];

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      // in real world, this would likely be done on the server...
      this.detail.checkInDate = Date.now();
    }
  }
}
