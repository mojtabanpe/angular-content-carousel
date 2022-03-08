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
@Input() loop: boolean = false;
@Input() autoplay: boolean = false;
@Input() overflowCellsLimit: number = 1;
@Input() dots: boolean = false;;
@Input() slides: Array<Slide> = [];
counter = 0;
sizeOfCarousel = 0;
autoInterval = 4000;
autoIntervalObject: any;
initialized = false;

isBrowser = false;

constructor( @Inject(PLATFORM_ID) public platformId: any, private cdrf: ChangeDetectorRef) {
}
ngAfterViewInit(): void {
  this.isBrowser = isPlatformBrowser(this.platformId);
  this.initialized = true;
  this.sizeOfCarousel = +(document.getElementById('main-container')?.clientWidth || 0);  
  this.cdrf.detectChanges();
}

intervalNext(): void {
  clearInterval(this.autoIntervalObject);
  this.autoIntervalObject = setInterval(() => {
    this.counter ++;
    if (this.counter === this.slides.length) {
      this.resetSlider();
      return;
    }
    const cells = document.getElementsByClassName('carousel-cell');
    const howMuchTranslate = 'translateX(-' + this.counter * this.sizeOfCarousel + 'px)';
    for (let index = 0; index < cells.length; index++) {
      const element = cells[index];
      (element as HTMLElement).style.transform = howMuchTranslate;
    }}, this.autoInterval);
}

goNext(): void {
  this.counter ++;
  if (this.counter === this.slides.length) {
    this.resetSlider();
    return;
  }
  const cells = document.getElementsByClassName('carousel-cell');
  const howMuchTranslate = 'translateX(-' + this.counter * this.sizeOfCarousel + 'px)';
  for (let index = 0; index < cells.length; index++) {
    const element = cells[index];
    (element as HTMLElement).style.transform = howMuchTranslate;
  }
  this.intervalNext();
}

goPrev(): void {
  console.log(this.counter);
  
  if (this.counter === 0) {
    this.goToLastSlide();
    return;
  }
  this.counter --;
  const cells = document.getElementsByClassName('carousel-cell');
  const howMuchTranslate = 'translateX(-' + (this.counter) * this.sizeOfCarousel + 'px)';  
  for (let index = 0; index < cells.length; index++) {
    const element = cells[index];
    (element as HTMLElement).style.transform = howMuchTranslate;
  }
  this.intervalNext();
}

resetSlider(): void {
  const cells = document.getElementsByClassName('carousel-cell');
  for (let index = 0; index < cells.length; index++) {
    const element = cells[index];
    (element as HTMLElement).style.transition = 'none';
    setTimeout(() => {
      (element as HTMLElement).style.transition = 'all .5s ease-in';
    }, 100);
    (element as HTMLElement).style.transform = 'translateX(0)';
  }
  this.counter = 0;
  this.intervalNext();
}

goToLastSlide(): void {
  this.counter = this.slides.length - 1;
  const cells = document.getElementsByClassName('carousel-cell');
  const howMuchTranslate = 'translateX(-' + (this.counter) * this.sizeOfCarousel + 'px)';
  for (let index = 0; index < cells.length; index++) {
    const element = cells[index];
    (element as HTMLElement).style.transition = 'none';
    setTimeout(() => {
      (element as HTMLElement).style.transition = 'all .5s ease-in';
    }, 100);
    (element as HTMLElement).style.transform = howMuchTranslate;
  }
  
  this.intervalNext();
}



}
