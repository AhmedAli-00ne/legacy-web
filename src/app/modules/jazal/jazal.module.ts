import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JazalRoutingModule } from './jazal-routing.module';
import { JazalComponent } from './jazal.component';


@NgModule({
  declarations: [
    JazalComponent
  ],
  imports: [
    CommonModule,
    JazalRoutingModule
  ]
})
export class JazalModule { }
