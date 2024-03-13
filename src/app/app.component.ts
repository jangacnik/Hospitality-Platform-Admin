import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './auth/service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'resortPlatformAdmin';

  constructor(private authService: AuthenticationService) {}

  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    if (!this.isLoggedIn()) {
      this.logout();
    }
  }
}
