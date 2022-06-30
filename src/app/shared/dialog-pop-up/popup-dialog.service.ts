import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopUpComponent } from './dialog-pop-up.component';

@Injectable({
  providedIn: 'root',
})
export class PopupDialogService {
  constructor(private dialog: MatDialog) {}

  public openDialog(
    title?: string,
    message?: string,
    accept?: string,
    reject?: string
  ) {
    return this.dialog.open(DialogPopUpComponent, {
      data: {
        title: title,
        message: message,
        accept: accept,
        reject: reject,
      },
      height: '30%',
      width: '25%',
    });
  }
}
