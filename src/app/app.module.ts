import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularContentCarouselModule } from 'angular-content-carousel';
import { FormsModule } from '@angular/forms';
import { AngularPersianStepperComponent } from './angular-persian-stepper/angular-persian-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    AngularPersianStepperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularContentCarouselModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
