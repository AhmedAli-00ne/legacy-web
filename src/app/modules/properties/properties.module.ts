import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertiesComponent } from './properties.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PropertiesComponent],
  imports: [CommonModule, PropertiesRoutingModule, SharedModule, FormsModule],
})
export class PropertiesModule {}
