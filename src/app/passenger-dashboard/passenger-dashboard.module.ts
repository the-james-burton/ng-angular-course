import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  // different from course - HttpClient instead of Http...
import { HttpClientModule } from '@angular/common/http';

// smart components...
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// presentation (dumb) components...
import { PassengerCountComponent } from './components/passenger-count/passenger.count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

// services...
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [CommonModule, HttpClientModule ],
  exports: [PassengerDashboardComponent, PassengerViewerComponent],
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {}
