import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
