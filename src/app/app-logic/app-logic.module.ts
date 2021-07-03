import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLogicRoutingModule } from './app-logic-routing.module';
import { AppLogicComponent } from './app-logic.component';
import { HarmonicLibModule } from '../harmonic-lib/harmonic-lib.module';
import { FormsModule } from '@angular/forms';
import { PositionsFormComponent } from './components/positions-form/positions-form.component';
import { DetailsComponent } from './pages/details/details.component';
import { CreateComponent } from './pages/create/create.component';


@NgModule({
  declarations: [
    AppLogicComponent,
    PositionsFormComponent,
    DetailsComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    AppLogicRoutingModule,
    HarmonicLibModule,
    FormsModule,
  ]
})
export class AppLogicModule { }
