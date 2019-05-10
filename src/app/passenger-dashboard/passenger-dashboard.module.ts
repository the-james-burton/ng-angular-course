import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// different from course - HttpClient instead of Http...
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// smart components...
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// presentation (dumb) components...
import { PassengerCountComponent } from './components/passenger-count/passenger.count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// services...
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [PassengerDashboardComponent, PassengerViewerComponent],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
