import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLogicComponent } from './app-logic.component';

const routes: Routes = [
  {
    path: '', component: AppLogicComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLogicRoutingModule { }
