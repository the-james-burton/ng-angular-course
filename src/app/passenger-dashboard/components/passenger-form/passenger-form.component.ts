import { Component } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Input } from '@angular/core';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form>
      The Form
      <div>
      {{ detail | json }}
      </div>
    </form>
    `
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
}
