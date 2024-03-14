import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './components/users-dashboard/users-dashboard.component';
import { UsersAllComponent } from './components/users-all/users-all.component';
import { UsersPermissionsComponent } from './components/users-permissions/users-permissions.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    UsersDashboardComponent,
    UsersAllComponent,
    UsersPermissionsComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    UsersDashboardComponent,
    UsersAllComponent,
    UsersPermissionsComponent,
  ],
})
export class UsersModule {}
