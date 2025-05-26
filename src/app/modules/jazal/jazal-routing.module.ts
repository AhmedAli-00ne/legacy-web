import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JazalComponent } from './jazal.component';

const routes: Routes = [
  {
    path: '',
    component: JazalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JazalRoutingModule {}
