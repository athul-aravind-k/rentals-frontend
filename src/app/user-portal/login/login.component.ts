import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide = true;
  loginForm = new FormGroup({
    userId: new FormControl(),
    password: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  public submit(): void {
    console.log(this.loginForm.getRawValue());
  }

  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      userId: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
}
