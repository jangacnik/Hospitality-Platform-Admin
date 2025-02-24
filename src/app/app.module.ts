import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoodTrackerModule } from './foodtracker/food-tracker.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './foodtracker/dashboard/dashboard.component';
import { loginActivateGuard } from './auth/guard/login-activate.guard';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {
  heroBuildingStorefront,
  heroPencilSquare,
  heroUserGroup,
} from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';
import { JwtInterceptor } from './auth/interceptor/jwt.interceptor';
import { FlexModule } from '@angular/flex-layout';
import {
  CommonModule,
  DatePipe,
  NgOptimizedImage,
  registerLocaleData,
} from '@angular/common';
import { FoodTrackerRestService } from './foodtracker/service/food-tracker-rest.service';
import 'hammerjs';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { SettingsModule } from './settings/settings.module';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [loginActivateGuard] },
  { path: '', component: LoginComponent, canDeactivate: [loginActivateGuard] },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [loginActivateGuard],
  },
  { path: 'home', component: HomeComponent, canActivate: [loginActivateGuard] },
];

@NgModule({
  declarations: [AppComponent, LoginComponent, ProfileComponent],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgIconsModule.withIcons({
      heroBuildingStorefront,
      heroUserGroup,
      heroPencilSquare,
    }),
    // material
    MaterialModule,
    FlexModule,
    //http
    HttpClientModule,
    // modules
    UsersModule,
    HomeModule,
    SettingsModule,
    CommonModule,
    NgOptimizedImage,
    NgxMatTimepickerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'en-GB' },
    DatePipe,
    FoodTrackerRestService,
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
