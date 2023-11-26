import {Component} from '@angular/core';
import {AuthenticationService} from "./auth/service/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resortPlatformAdmin';

  constructor(private authService: AuthenticationService) {
  }

  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
