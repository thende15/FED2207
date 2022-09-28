import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkAccordionModule } from '@angular/cdk/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CareersComponent } from './components/careers/careers.component';
import { LocationsComponent } from './components/locations/locations.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './components/map/map.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { TextComponentComponent } from './components/text-component/text-component.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { AccordionComponent } from './components/about/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareersComponent,
    LocationsComponent,
    NavBarComponent,
    FooterComponent,
    MapComponent,
    ImageCardComponent,
    TextComponentComponent,
    JobsComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
