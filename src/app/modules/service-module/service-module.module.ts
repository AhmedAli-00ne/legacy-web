import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceModuleRoutingModule } from './service-module-routing.module';
import { ServiceModuleComponent } from './service-module.component';


@NgModule({
  declarations: [
    ServiceModuleComponent
  ],
  imports: [
    CommonModule,
    ServiceModuleRoutingModule
  ]
})
export class ServiceModuleModule { }
