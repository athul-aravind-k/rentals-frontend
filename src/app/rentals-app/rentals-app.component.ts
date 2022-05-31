import { Component } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
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
