import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
