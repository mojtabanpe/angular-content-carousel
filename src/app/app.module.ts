import { SliderComponent } from './slider/slider.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularContentCarouselModule } from 'angular-content-carousel';
import { FormsModule } from '@angular/forms';
import { AngularPersianStepperModule } from 'angular-persian-stepper';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    // AngularPersianStepperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularContentCarouselModule,
    AngularPersianStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
