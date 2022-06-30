import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogPopUpModal } from './dialog.model';

@Component({
  selector: 'app-dialog-pop-up',
  templateUrl: './dialog-pop-up.component.html',
  styleUrls: ['./dialog-pop-up.component.scss'],
})
export class DialogPopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogPopUpComponent>,
    @Inject(MAT_DIALOG_DATA)
    public inputData: DialogPopUpModal
  ) {}

  public onReject(): void {
    this.dialogRef.close(false);
  }
  public onAccept(): void {
    this.dialogRef.close(true);
  }
}
