import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-body',
  templateUrl: './app-body.component.html',
  styleUrls: ['./app-body.component.scss'],
})
export class AppBodyComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor() {}

  ngOnInit(): void {}

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (
      this.collapsed &&
      this.screenWidth <= 768 &&
      this.screenWidth > 0
    ) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
