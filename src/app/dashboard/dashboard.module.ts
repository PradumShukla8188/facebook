import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PostchildComponent } from '../postchild/postchild.component';
import { CommentsComponent } from '../comments/comments.component';
import { TimeupdatePipe } from '../pipes/timeupdate.pipe'; 


@NgModule({
  declarations: [
    DashboardComponent,
    PostchildComponent,
    CommentsComponent,
    TimeupdatePipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    
  ]
})
export class DashboardModule { }
