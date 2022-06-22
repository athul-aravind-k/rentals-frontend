import { Component } from '@angular/core';
import { SideNavToggle } from './sidenav/sideNav.model';

@Component({
  selector: 'rentals-app',
  templateUrl: './rentals-app.component.html',
})
export class RentalsAppComponent {
  title = 'Rentals';

  public isSideNavCollapsed = false;
  public screenWidth = 0;

  public onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
