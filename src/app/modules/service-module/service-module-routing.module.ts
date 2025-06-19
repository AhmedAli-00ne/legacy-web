import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceModuleComponent } from './service-module.component';

const routes: Routes = [
  {
    path:'',
    component:ServiceModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceModuleRoutingModule { }
