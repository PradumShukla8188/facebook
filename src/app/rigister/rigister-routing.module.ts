import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RigisterComponent } from './rigister.component';

const routes: Routes = [{ path: '', component: RigisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RigisterRoutingModule { }
