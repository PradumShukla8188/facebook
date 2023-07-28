import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { Com1Component } from './component/com1/com1.component';
import { Com2Component } from './component/com2/com2.component';
import { Com3Component } from './component/com3/com3.component';


@NgModule({
  declarations: [
    SubjectComponent,
    Com1Component,
    Com2Component,
    Com3Component
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule
  ]
})
export class SubjectModule { }
