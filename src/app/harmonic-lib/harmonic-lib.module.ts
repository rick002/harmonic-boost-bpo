import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { SimpleBannerComponent } from './components/simple-banner/simple-banner.component';
import { FullAddressPipe } from './pipes/full-address.pipe';
import { TabSetComponent } from './components/tab-set/tab-set.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    ErrorPageComponent,
    PreloaderComponent,
    AlertComponent,
    SimpleBannerComponent,
    FullAddressPipe,
    TabSetComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    ErrorPageComponent,
    PreloaderComponent,
    AlertComponent,
    SimpleBannerComponent,
    FullAddressPipe,
    TabSetComponent,
  ]
})
export class HarmonicLibModule { }
