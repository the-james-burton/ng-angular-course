import { Passenger } from './models/passenger.interface';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const PASSENGER_API: string = 'http://localhost:3000/api/passengers';

@Injectable()
export class PassengerDashboardService {
  // different from course - HttpClient instead of Http...
  constructor(private http: HttpClient) {
    console.log(this);
  }

  getPassengers(): Observable<Passenger[]> {
    // different from course - don't use the .map() operator...
    return this.http
       .get<Passenger[]>(PASSENGER_API);
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    // different from course - RequestOptions no longer exists...
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // different from course - don't use the .map() operator...
    return this.http
       .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, { headers: httpHeaders });
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    // different from course - don't use the .map() operator...
    return this.http
       .delete<Passenger>(`${PASSENGER_API}/${passenger.id}`);
  }

}
