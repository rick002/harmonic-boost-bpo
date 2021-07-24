import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';

import { AppLogicRoutingModule } from './app-logic-routing.module';
import { AppLogicComponent } from './app-logic.component';
import { HarmonicLibModule } from '../harmonic-lib/harmonic-lib.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PositionsFormComponent } from './components/positions-form/positions-form.component';
import { DetailsComponent } from './pages/details/details.component';
import { CreateComponent } from './pages/create/create.component';
import { AdminManagerComponent } from './pages/admin-manager/admin-manager.component';
import { PageTitleComponent } from './components/page-title/page-title.component';


@NgModule({
  declarations: [
    AppLogicComponent,
    PositionsFormComponent,
    DetailsComponent,
    CreateComponent,
    AdminManagerComponent,
    PageTitleComponent,
  ],
  imports: [
    CommonModule,
    AppLogicRoutingModule,
    HarmonicLibModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [TitleCasePipe],
})
export class AppLogicModule { }
