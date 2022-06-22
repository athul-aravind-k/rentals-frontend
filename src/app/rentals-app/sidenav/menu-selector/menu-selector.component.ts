import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MenuSelectorModel } from '../sideNav.model';

@Component({
  selector: 'menu-selector',
  templateUrl: './menu-selector.component.html',
  styleUrls: ['./menu-selector.component.scss'],
})
export class MenuSelectorComponent implements OnInit, OnChanges {
  @Input()
  public selectedItem: string;
  public menuList: MenuSelectorModel[];

  @Output()
  clickEvent = new EventEmitter<boolean>();
  public showMenuSelector: boolean = true;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    if (this.selectedItem) {
      this.menuList = [
        {
          label: 'label',
          iconClass: 'fa-solid fa-computer',
          path: 'users',
        },
      ];
    }
  }

  public menuClick(): void {
    this.clickEvent.emit(false);
  }
}
