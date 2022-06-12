import { RentalsAppComponent } from './rentals-app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalsAppRoutingModule } from './rentals-app-routing.module';
import { SidenavComponent } from '../rentals-app/sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AppBodyComponent } from './app-body/app-body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FormModule } from '../shared/form/form.module';

@NgModule({
  declarations: [
    RentalsAppComponent,
    SidenavComponent,
    AppBodyComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RentalsAppRoutingModule,
    FormModule,
  ],
})
export class RentalsAppModule {}
