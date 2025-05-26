import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { JazalCtaComponent } from './components/jazal-cta/jazal-cta.component';
import { AboutCtaComponent } from './components/about-cta/about-cta.component';

@NgModule({
  declarations: [
    FooterComponent,
    LoaderComponent,
    HeaderComponent,
    HeroComponent,
    JazalCtaComponent,
    AboutCtaComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    LoaderComponent,
    HeaderComponent,
    HeroComponent,
    JazalCtaComponent,
    AboutCtaComponent,
  ],
})
export class SharedModule {}
