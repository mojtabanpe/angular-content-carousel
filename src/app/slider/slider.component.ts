import { styles } from './../../../node_modules/ansi-colors/types/index.d';
import { Slide } from './../app.component';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, AfterViewInit, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements AfterViewInit {
@Input() cellsToShow: number = 1;
@Input() loop: boolean = true;
@Input() autoplay: boolean = true;
@Input() overflowCellsLimit: number = 1;
@Input() dots: boolean = true;;
@Input() slides: Array<Slide> = [];
lengthOfCarousell = 0;
counter = 0;
sizeOfCarousel = 0;
autoInterval = 5000;
autoIntervalObject: any;
initialized = false;

isBrowser = false;

constructor( @Inject(PLATFORM_ID) public platformId: any, private cdrf: ChangeDetectorRef) {
  
}
ngAfterViewInit(): void {
  this.isBrowser = isPlatformBrowser(this.platformId);
  this.sizeOfCarousel = +(document.getElementById('main-container')?.clientWidth || 0);  
  if (this.slides.length === 0) {
    this.lengthOfCarousell = document.getElementsByClassName('carousel-cell').length;
  } else {
    this.lengthOfCarousell = this.slides.length;
  }
  setTimeout(() => {
    document.getElementsByClassName('carousel-cell')[0].classList.add('active-slide'); 
    document.getElementsByClassName('carousel-cell')[this.lengthOfCarousell - 1].classList.add('deactive-slide'); 
    document.getElementsByClassName('angular-content-carousel-dot')[0].classList.add('active-dot');
  }, 50);
  this.intervalNext();
  this.cdrf.detectChanges();
}

intervalNext(): void {
  clearInterval(this.autoIntervalObject);
  this.autoIntervalObject = setInterval(() => {
    this.counter ++;
    if (this.counter === this.lengthOfCarousell) {
      this.resetSlider();
      return;
    }
    this.changeActivityElements();
  }, this.autoInterval);
}

goNext(): void {
  this.counter ++;
  if (this.counter === this.lengthOfCarousell) {
    this.resetSlider();
    return;
  }
  this.changeActivityElements();
  this.intervalNext();
}

goPrev(): void {  
  if (this.counter === 0) {
    this.goToLastSlide();
    return;
  }
  this.counter --;
  this.changeActivityElements();
  this.intervalNext();
}

resetSlider(): void {
  this.counter = 0;
  this.changeActivityElements();
  this.intervalNext();
}

goToLastSlide(): void {
  this.counter = this.lengthOfCarousell - 1;
  this.changeActivityElements();
  this.intervalNext();
}

stopAutoSlide(): void {
  clearInterval(this.autoIntervalObject);
}

changeActivityElements(): void {
  document.getElementsByClassName('deactive-slide')[0]?.classList.remove('deactive-slide');
  document.getElementsByClassName('active-slide')[0]?.classList.add('deactive-slide');
  document.getElementsByClassName('active-slide')[0]?.classList.remove('active-slide'); 
  document.getElementsByClassName('carousel-cell')[this.counter].classList.add('active-slide');

  document.getElementsByClassName('active-dot')[0]?.classList.remove('active-dot');
  document.getElementsByClassName('angular-content-carousel-dot')[this.counter].classList.add('active-dot');
  
}

}
