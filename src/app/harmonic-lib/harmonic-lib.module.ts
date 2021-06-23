import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PreloaderComponent } from './components/preloader/preloader.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ErrorPageComponent,
    PreloaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    ErrorPageComponent,
    PreloaderComponent
  ]
})
export class HarmonicLibModule { }
