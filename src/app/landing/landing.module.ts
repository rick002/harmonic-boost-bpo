import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HarmonicLibModule } from '../harmonic-lib/harmonic-lib.module';
import { LandingComponent } from './landing.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FeaturesComponent } from './components/features/features.component';


@NgModule({
  declarations: [LandingComponent, HeroComponent, AboutUsComponent, ServicesComponent, ContactMeComponent, FeaturesComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    HarmonicLibModule,
  ]
})
export class LandingModule { }
