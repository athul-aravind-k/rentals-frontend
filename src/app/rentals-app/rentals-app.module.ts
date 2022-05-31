import { RentalsAppComponent } from './rentals-app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalsAppRoutingModule } from './rentals-app-routing.module';
import { SidenavComponent } from '../rentals-app/sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AppBodyComponent } from './app-body/app-body.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [RentalsAppComponent, SidenavComponent, AppBodyComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RentalsAppRoutingModule,
  ],
})
export class RentalsAppModule {}
