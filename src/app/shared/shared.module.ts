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
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { PropertiesCtaComponent } from './components/properties-cta/properties-cta.component';
import { PartnersComponent } from './components/partners/partners.component';
import { UnitTypeModalComponent } from './components/unit-type-modal/unit-type-modal.component';
import { CloudTransitionComponent } from './components/cloud-transition/cloud-transition.component';

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

    ProjectsComponent,
    ServicesComponent,
    PropertiesCtaComponent,
    PartnersComponent,
    UnitTypeModalComponent,
    CloudTransitionComponent,
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

    ProjectsComponent,
    ServicesComponent,
    PropertiesCtaComponent,
    PartnersComponent,
    UnitTypeModalComponent,
    CloudTransitionComponent,
  ],
})
export class SharedModule {}
