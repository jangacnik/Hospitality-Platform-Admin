import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  errMsg = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    if (authService.isLoggedIn()) {
      router.navigate(['home']);
    }
  }

  onSubmit() {
    this.errMsg = '';
    const email = this.loginForm.get('email')?.value;
    const pwd = this.loginForm.get('password')?.value;
    if (email && pwd) {
      this.authService.login(email, pwd).subscribe({
        next: (res) => {
          this.authService.saveToken(res);
          this.router.navigate(['home']);
        },
        error: (err) => {
          if (err.status == 403) {
            this.errMsg = 'Wrong email or password';
          } else {
            this.errMsg = 'Something went wrong';
          }
        },
      });
    }
  }
}
