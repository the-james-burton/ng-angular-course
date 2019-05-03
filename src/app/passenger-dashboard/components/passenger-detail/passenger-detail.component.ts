import {
  Component,
  OnChanges,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { reference } from '@angular/core/src/render3';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
        />
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date:
        <!-- different to course: yMMMMd replaced with longDate -->
        {{
          detail.checkInDate
            ? (detail.checkInDate | date: 'longDate' | uppercase)
            : 'Not checked in'
        }}
      </div>
      <div class="children">
        <!-- this is the safe navigation -->
        Children: {{ detail.children?.length || 0 }}
      </div>
      <button (click)="toggleEdit()">
        {{ editing ? 'done' : 'edit' }}
      </button>
      <button (click)="onRemove()">
        remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    // this will create a clone of the data and reassign it to this class
    // which prevents the data from being changed via the reference...
    // it is only called during initialzation
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
}
