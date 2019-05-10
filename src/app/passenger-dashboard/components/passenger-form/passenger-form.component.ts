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

      {{ form.value | json }}
    </form>
  `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
}
