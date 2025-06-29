import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JazalRoutingModule } from './jazal-routing.module';
import { JazalComponent } from './jazal.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [JazalComponent],
  imports: [CommonModule, JazalRoutingModule, SharedModule],
})
export class JazalModule {}
