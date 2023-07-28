import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostprofileRoutingModule } from './postprofile-routing.module';
import { PostprofileComponent } from './postprofile.component';


@NgModule({
  declarations: [
    PostprofileComponent
  ],
  imports: [
    CommonModule,
    PostprofileRoutingModule
  ]
})
export class PostprofileModule { }
