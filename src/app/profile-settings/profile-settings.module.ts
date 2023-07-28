import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSettingsRoutingModule } from './profile-settings-routing.module';
import { ProfileSettingsComponent } from './profile-settings.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    ProfileSettingsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProfileSettingsModule { }
