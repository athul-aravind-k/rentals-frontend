import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) {}

  public getCurrentUserToken() {
    return localStorage.getItem('token');
  }

  public login(username: string, password: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/login`, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          if (user.token) {
            localStorage.setItem('token', JSON.stringify(user.token));
            return user;
          }
        })
      );
  }

  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('timeStamp');
    this.router.navigate(['/login']);
  }

  public isUserLoggedIn(): boolean {
    const token = this.getCurrentUserToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
