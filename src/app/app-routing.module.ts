import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NonAuthGuard } from './guards/non-auth.guard';
import { ErrorPageComponent } from './harmonic-lib/pages/error-page/error-page.component';

const routes: Routes = [
  { 
    path: '',
    canActivate: [NonAuthGuard],
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) 
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./app-logic/app-logic.module').then(m => m.AppLogicModule),
  },
  {
    path: 'applications',
    loadChildren: () => import('./applications/applications.module').then(m => m.ApplicationsModule),
  },
  {
    path: 'careers',
    loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule),
  },
  {
    path: '**',
    component: ErrorPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
