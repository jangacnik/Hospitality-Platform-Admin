import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-notice-dialog',
  templateUrl: './notice-dialog.component.html',
  styleUrls: ['./notice-dialog.component.scss']
})
export class NoticeDialogComponent {
  title = "";
  msg = "";

  constructor(public dialogRef: MatDialogRef<NoticeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
    this.title = data.title;
    this.msg = data.msg;
  }
}
