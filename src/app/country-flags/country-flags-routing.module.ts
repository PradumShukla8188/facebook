import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryFlagsComponent } from './country-flags.component';

const routes: Routes = [{ path: '', component: CountryFlagsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryFlagsRoutingModule { }
