import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersModuleRoutingModule } from './partners-module-routing.module';
import { PartnersModuleComponent } from './partners-module.component';


@NgModule({
  declarations: [
    PartnersModuleComponent
  ],
  imports: [
    CommonModule,
    PartnersModuleRoutingModule
  ]
})
export class PartnersModuleModule { }
