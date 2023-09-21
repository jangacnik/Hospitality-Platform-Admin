import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private router: Router) {
    if(authService.isLoggedIn()) {
      router.navigate(['home']);
    }
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit() {
    const email = this.loginForm.get('email')?.value;
    const pwd = this.loginForm.get('password')?.value;
    if (email && pwd) {
      this.authService.login(email, pwd).subscribe({
        next: (res) => {
          console.log(res);
          this.authService.saveToken(res);
          this.router.navigate(['home']);
        }
      });
    }
  }
}
