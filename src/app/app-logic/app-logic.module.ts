import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLogicRoutingModule } from './app-logic-routing.module';
import { AppLogicComponent } from './app-logic.component';


@NgModule({
  declarations: [
    AppLogicComponent
  ],
  imports: [
    CommonModule,
    AppLogicRoutingModule
  ]
})
export class AppLogicModule { }
