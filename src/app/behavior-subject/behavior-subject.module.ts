import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehaviorSubjectRoutingModule } from './behavior-subject-routing.module';
import { BehaviorSubjectComponent } from './behavior-subject.component';
import { Com1Component } from './component/com1/com1.component';
import { Com2Component } from './component/com2/com2.component';
import { Com3Component } from './component/com3/com3.component';


@NgModule({
  declarations: [
    BehaviorSubjectComponent,
    Com1Component,
    Com2Component,
    Com3Component
  ],
  imports: [
    CommonModule,
    BehaviorSubjectRoutingModule
  ]
})
export class BehaviorSubjectModule { }
