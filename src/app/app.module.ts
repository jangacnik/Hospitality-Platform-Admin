import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FoodTrackerModule} from "./foodtracker/food-tracker.module";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./foodtracker/dashboard/dashboard.component";
import {loginActivateGuard} from "./user/guard/login-activate.guard";
import {MaterialModule} from "./material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {   path: 'user',   component: ProfileComponent, canActivate: [loginActivateGuard]   },
  {   path: 'login',   component: LoginComponent },
  {   path: 'food',   component: DashboardComponent, canActivate: [loginActivateGuard]    }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    // material
    MaterialModule,
    // modules
    FoodTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
