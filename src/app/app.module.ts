import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HarmonicLibModule } from './harmonic-lib/harmonic-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HarmonicLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
