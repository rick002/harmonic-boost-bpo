import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLogicComponent } from './app-logic.component';
import { AdminManagerComponent } from './pages/admin-manager/admin-manager.component';
import { CreateComponent } from './pages/create/create.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: AppLogicComponent,
    children: [
      { path: '', component: CreateComponent },
      { path: 'details/:positionId', component: DetailsComponent },
      { path: 'manager', component: AdminManagerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppLogicRoutingModule {}
