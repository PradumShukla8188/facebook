import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewmoreComponent } from './viewmore.component';

const routes: Routes = [{ path: '', component: ViewmoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewmoreRoutingModule { }
