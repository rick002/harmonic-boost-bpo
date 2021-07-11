import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareersRoutingModule } from './careers-routing.module';
import { CareersComponent } from './careers.component';
import { HarmonicLibModule } from '../harmonic-lib/harmonic-lib.module';
import { BannerComponent } from './components/banner/banner.component';
import { PositionPostComponent } from './components/position-post/position-post.component';
import { PaginationAreaComponent } from './components/pagination-area/pagination-area.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckFilterComponent } from './components/check-filter/check-filter.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CareersComponent,
    BannerComponent,
    PositionPostComponent,
    PaginationAreaComponent,
    DashboardComponent,
    CheckFilterComponent,
    FormFilterComponent,
  ],
  imports: [
    CommonModule,
    CareersRoutingModule,
    HarmonicLibModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CareersModule { }
