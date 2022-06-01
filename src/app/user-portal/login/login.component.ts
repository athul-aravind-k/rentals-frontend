import { NgToastService } from 'ng-angular-popup';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthenticationService } from 'src/app/core/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hidePassword = true;
  private returnUrl: string = '';
  loginForm = new FormGroup({
    userId: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: NgToastService
  ) {
    //redirects to home if already logged in
    if (this.authService.getCurrentUserToken()) {
      this.router.navigate(['/rentals']);
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/rentals/dashboard';
  }

  public submit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .login(
        this.loginForm.get('userId')?.value,
        this.loginForm.get('password')?.value
      )
      .pipe(first())
      .subscribe(
        (data) => {
          if (data) {
            console.log(data);
            this.toast.success({
              detail: 'Success',
              summary: 'Login Success',
              duration: 5000,
            });
            this.router.navigate([this.returnUrl]);
          }
        },
        (error) => {
          this.toast.error({
            detail: 'Error',
            summary: error,
            duration: 10000,
          });
        }
      );
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      userId: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
}
