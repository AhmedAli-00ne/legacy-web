import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PropertiesComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    SharedModule
  ]
})
export class PropertiesModule { }
