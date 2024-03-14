import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [SettingsPageComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SettingsPageComponent],
})
export class SettingsModule {}
