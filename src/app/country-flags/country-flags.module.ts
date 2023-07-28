import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryFlagsRoutingModule } from './country-flags-routing.module';
import { CountryFlagsComponent } from './country-flags.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CountryFlagsComponent
  ],
  imports: [
    CommonModule,
    CountryFlagsRoutingModule,
    FormsModule,
    
  ]
})
export class CountryFlagsModule { }
