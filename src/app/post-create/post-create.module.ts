import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostCreateRoutingModule } from './post-create-routing.module';
import { PostCreateComponent } from './post-create.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    PostCreateRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostCreateModule { }
