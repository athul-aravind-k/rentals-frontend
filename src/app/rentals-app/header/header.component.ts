import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../core/auth/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  public logOut(): void {
    // add a dialog box here
    this.authService.logout();
  }
}
