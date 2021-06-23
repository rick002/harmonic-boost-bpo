import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './harmonic-lib/pages/error-page/error-page.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) 
  },
  {
    path: 'admin',
    loadChildren: () => import('./app-logic/app-logic.module').then(m => m.AppLogicModule)
  },
  {
    path: '**',
    component: ErrorPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
