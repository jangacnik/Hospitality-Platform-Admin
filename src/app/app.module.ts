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
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {heroBuildingStorefront, heroUser, heroUserGroup, heroUsers} from '@ng-icons/heroicons/outline';
import {NgIconsModule} from "@ng-icons/core";

const routes: Routes = [
  {   path: 'user',   component: ProfileComponent, canActivate: [loginActivateGuard]   },
  {   path: '',   component: ProfileComponent, canActivate: [loginActivateGuard] },
  {   path: '',   component: LoginComponent, canDeactivate: [loginActivateGuard] },
  {   path: 'login',   component: LoginComponent, canDeactivate: [loginActivateGuard] },
  {   path: 'food',   component: DashboardComponent, canActivate: [loginActivateGuard]    },
  {   path: 'home',   component: HomeComponent, canActivate: [loginActivateGuard]    }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgIconsModule.withIcons({heroBuildingStorefront, heroUserGroup}),
    // material
    MaterialModule,
    //http
    HttpClientModule,
    // modules
    FoodTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
