import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FoodTrackerRestService} from "../foodtracker/service/food-tracker-rest.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private fd: FoodTrackerRestService) {
  }

  onFoodTrackerClicked() {
    this.router.navigate(['food'])
  }

  ngOnInit(): void {
    if (this.fd.user === undefined) {
      this.fd.getUserData().subscribe((user) => {
        this.fd.user = user;
      });
    }
  }


}
