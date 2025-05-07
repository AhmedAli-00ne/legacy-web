import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './shared/layouts/full-layout/full-layout.component';
import { Full_Content_Routes } from './shared/routes/full-content.routes';

const routes: Routes = [
  { path: '', component: FullLayoutComponent, children: Full_Content_Routes },
];

@NgModule({
  imports: [
    [
      RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        onSameUrlNavigation: 'reload',
      }),
    ],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
