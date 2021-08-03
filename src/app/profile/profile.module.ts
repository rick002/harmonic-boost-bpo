import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { HarmonicLibModule } from '../harmonic-lib/harmonic-lib.module';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HarmonicLibModule,
  ]
})
export class ProfileModule { }
