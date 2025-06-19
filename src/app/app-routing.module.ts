import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path:'properties',
    loadChildren:()=>import('./modules/properties/properties.module').then(m=> m.PropertiesModule) ,
  },
  {
    path:'news',
    loadChildren:()=>import('./modules/news/news.module').then(m=> m.NewsModule) ,
  },
  {
    path:'contact',
    loadChildren:()=>import('./modules/contact-us/contact-us.module').then(m=>m.ContactUsModule),
  },
  {
    path:'partners',
    loadChildren:()=>import('./modules/partners-module/partners-module.module').then(m=>m.PartnersModuleModule),
  },
  {
    path:'service',
    loadChildren:()=>import('./modules/service-module/service-module.module').then(m=>m.ServiceModuleModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
