import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../core/auth/authentication.service';
import { LoaderService } from './../../core/loader/loader.service';
import { PopupDialogService } from './../../shared/dialog-pop-up/popup-dialog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public loading: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private loaderService: LoaderService,
    private dialog: PopupDialogService
  ) {
    this.loaderService.isLoading.subscribe((loadingStatus) => {
      this.loading = loadingStatus;
    });
  }

  ngOnInit(): void {}

  public logOut(): void {
    const warning = this.dialog.openDialog(
      'Log out',
      'Are You Sure Want to Logout ?',
      'logout',
      'cancel'
    );
    warning.afterClosed().subscribe((status) => {
      if (status) {
        this.authService.logout();
      }
    });
  }
}
