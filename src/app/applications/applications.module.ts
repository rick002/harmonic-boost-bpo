import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { ApplicationsListComponent } from './components/applications-list/applications-list.component';
import { HarmonicLibModule } from '../harmonic-lib/harmonic-lib.module';


@NgModule({
  declarations: [
    ApplicationsComponent,
    ApplicationsListComponent
  ],
  imports: [
    CommonModule,
    HarmonicLibModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
