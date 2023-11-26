import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../auth/service/authentication.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.scss']
})
export class ChangePasswordDialogComponent {
  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    });
    passwordsNotSame = false;
    passwordChangeError = false;
  constructor(public dialogRef: MatDialogRef<ChangePasswordDialogComponent>,private authenticationService: AuthenticationService) {
  }
  changePassword() {
      if (this.changePasswordForm.get("newPassword").value !== this.changePasswordForm.get("confirmPassword").value) {
        this.passwordsNotSame = true;
        this.changePasswordForm.controls['newPassword'].setErrors({'incorrect': true});

        this.changePasswordForm.controls['confirmPassword'].setErrors({'incorrect': true});
      } else {
        this.authenticationService.changePassword(this.changePasswordForm.value).subscribe(
          () => {
            this.dialogRef.close(true);
          },
          (error) => {
            // if(error.status ===)
          }
        )
      }
  }
}
