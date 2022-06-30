import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './core/jwt-interceptor/jwt.interceptor';
import { ErrorInterceptor } from './core/error-interceptor/error.interceptor';
import { NgToastModule } from 'ng-angular-popup';
import { LoaderInterceptor } from './core/loader/loader.interceptor.service';
import { LoaderService } from './core/loader/loader.service';
import { LoaderComponent } from './core/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { DialogPopUpComponent } from './shared/dialog-pop-up/dialog-pop-up.component';

@NgModule({
  declarations: [AppComponent, LoaderComponent, DialogPopUpComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgToastModule,
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
