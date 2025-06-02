import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { JazalCtaComponent } from './components/jazal-cta/jazal-cta.component';
import { AboutCtaComponent } from './components/about-cta/about-cta.component';
import { LegacyAboutComponent } from './components/about/about.component';
import { AboutUsCtaComponent } from './components/about-us-cta/about-us-cta.component';

@NgModule({
  declarations: [
    FooterComponent,
    LoaderComponent,
    HeaderComponent,
    HeroComponent,
    JazalCtaComponent,
    AboutCtaComponent,
    LegacyAboutComponent,
    AboutUsCtaComponent,
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
    LegacyAboutComponent,
    AboutUsCtaComponent,
  ],
})
export class SharedModule {}
