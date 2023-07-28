import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpRoutingModule } from './sing-up-routing.module';
import { SingUpComponent } from './sing-up.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SingUpComponent
  ],
  imports: [
    CommonModule,
    SingUpRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SingUpModule { }
