import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../foodtracker/dashboard/dashboard.component';
import { loginActivateGuard } from '../auth/guard/login-activate.guard';
import { ProfileComponent } from '../auth/profile/profile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from '../material.module';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { FlexModule } from '@angular/flex-layout';
import { UsersDashboardComponent } from '../users/components/users-dashboard/users-dashboard.component';
import { UsageComponent } from './usage/usage.component';
import { EngagementComponent } from './engagement/engagement.component';
import { SettingsPageComponent } from '../settings/components/settings-page/settings-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: HomeDashboardComponent,
        canActivate: [loginActivateGuard],
      },
      {
        path: 'user',
        component: ProfileComponent,
        canActivate: [loginActivateGuard],
      },
      {
        path: 'food',
        component: DashboardComponent,
        canActivate: [loginActivateGuard],
      },
      {
        path: 'task',
        loadChildren: () =>
          import('../tasks/task.module').then((m) => m.TaskModule),
        canActivate: [loginActivateGuard],
      },
      {
        path: 'users',
        component: UsersDashboardComponent,
        canActivate: [loginActivateGuard],
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
        canActivate: [loginActivateGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeDashboardComponent,
    UsageComponent,
    EngagementComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatSidenavModule,
    MaterialModule,
    FlexModule,
  ],
  exports: [],
})
export class HomeModule {}
