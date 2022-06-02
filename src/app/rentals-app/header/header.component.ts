import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../core/auth/authentication.service';
import { LoaderService } from './../../core/loader/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public loading: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private loaderService: LoaderService
  ) {
    this.loaderService.isLoading.subscribe((loadingStatus) => {
      this.loading = loadingStatus;
    });
  }

  ngOnInit(): void {}

  public logOut(): void {
    // add a dialog box here
    this.authService.logout();
  }
}
