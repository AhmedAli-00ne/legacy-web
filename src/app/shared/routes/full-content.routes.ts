import { Routes, RouterModule } from '@angular/router';

export const Full_Content_Routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../../modules/home/home.module').then((m) => m.HomeModule),
  },
];
