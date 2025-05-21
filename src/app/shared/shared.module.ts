import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { JazalCtaComponent } from './components/jazal-cta/jazal-cta.component';

@NgModule({
  declarations: [
    FullLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    JazalCtaComponent,
  ],
  imports: [CommonModule],
  exports: [
    FullLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    JazalCtaComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
