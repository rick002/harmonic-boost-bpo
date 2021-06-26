import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { HarmonicLibModule } from '../harmonic-lib/harmonic-lib.module';
import { BannerComponent } from './components/banner/banner.component';
import { PositionPostComponent } from './components/position-post/position-post.component';
import { PaginationAreaComponent } from './components/pagination-area/pagination-area.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    CareersComponent,
    BannerComponent,
    PositionPostComponent,
    PaginationAreaComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    CareersRoutingModule,
    HarmonicLibModule,
  ]
})
export class CareersModule { }
