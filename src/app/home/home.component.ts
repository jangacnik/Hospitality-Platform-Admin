import { Component, OnInit } from '@angular/core';
import { FoodTrackerRestService } from '../foodtracker/service/food-tracker-rest.service';
import { AuthenticationService } from '../auth/service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private fd: FoodTrackerRestService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    if (this.fd.user === undefined) {
      this.fd.getUserData().subscribe((user) => {
        this.fd.user = user;
      });
    }
  }

  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
