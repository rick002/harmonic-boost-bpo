import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { HarmonicLibModule } from '../harmonic-lib/harmonic-lib.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HarmonicLibModule,
  ]
})
export class ProfileModule { }
