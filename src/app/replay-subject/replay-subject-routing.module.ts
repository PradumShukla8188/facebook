import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplaySubjectComponent } from './replay-subject.component';

const routes: Routes = [{ path: '', component: ReplaySubjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReplaySubjectRoutingModule { }
