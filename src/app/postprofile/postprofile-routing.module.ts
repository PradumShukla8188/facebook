import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostprofileComponent } from './postprofile.component';

const routes: Routes = [{ path: '', component: PostprofileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostprofileRoutingModule { }
