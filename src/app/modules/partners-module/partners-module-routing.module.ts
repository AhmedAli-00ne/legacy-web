import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnersComponent } from 'src/app/shared/components/partners/partners.component';
import { PartnersModuleComponent } from './partners-module.component';

const routes: Routes = [
  {path:'',component:PartnersModuleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersModuleRoutingModule { }
