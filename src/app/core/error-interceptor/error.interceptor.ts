import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../auth/authentication.service';
import { NgToastService } from 'ng-angular-popup';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private toast: NgToastService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((evt) => {
        const timeStamp = JSON.parse(localStorage.getItem('timeStamp') || '{}');
        const currentDate = new Date();
        if (timeStamp) {
          const currentTimeStamp = currentDate.getTime();
          if (currentTimeStamp - timeStamp > 30 * 60000) {
            this.showErrorMessage('Session Expired Please Login Again');
            this.authenticationService.logout();
          } else {
            this.setTimeStamp();
            if (evt instanceof HttpResponse) {
              if (evt.body && evt.body.errorMessage) {
                this.showErrorMessage(evt.body.errorMessage);
              }
            }
          }
        }
      }),
      catchError((err) => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          this.authenticationService.logout();
          location.reload();
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }

  private showErrorMessage(error: any): void {
    this.toast.error({ detail: 'Error', summary: error, duration: 10000 });
  }

  private setTimeStamp(): void {
    const date = new Date();
    const timeStamp = date.getTime();
    localStorage.setItem('timeStamp', JSON.stringify(timeStamp));
  }
}
