import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SedanComponent } from './sedan/sedan.component';
import { SuvComponent } from './suv/suv.component';
import { LuxuryComponent } from './luxury/luxury.component';

@NgModule({
  declarations: [
    AppComponent,
    SedanComponent,
    SuvComponent,
    LuxuryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
