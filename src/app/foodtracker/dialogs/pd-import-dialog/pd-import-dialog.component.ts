import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FoodTrackerRestService} from "../../service/food-tracker-rest.service";

@Component({
  selector: 'app-pd-import-dialog',
  templateUrl: './pd-import-dialog.component.html',
  styleUrls: ['./pd-import-dialog.component.scss']
})
export class PdImportDialogComponent {
  title = "";
  msg = "";
  updateInProgress = false;
  hasError = false;

  constructor(public dialogRef: MatDialogRef<PdImportDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private foodTrackerService: FoodTrackerRestService) {
  }

  onConfirm() {
    this.updateInProgress = true;
    this.foodTrackerService.updatePlandayData().subscribe(next => {
      this.updateInProgress = false;
      this.dialogRef.close(true);
    }, error => {
      this.hasError = true;
    });
  }
}
