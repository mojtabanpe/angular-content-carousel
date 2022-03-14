import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, Inject, Input, PLATFORM_ID } from '@angular/core';

export interface Slide {
  yek: string;
  do: string;
  se: string;
  char: string;
  panj: string;
  shish: string;
  haft: string;
  hasht: string;
  noh: string;
  dah: string;
  yazdah: string;
}

@Component({
  selector: 'angular-content-carousel',
  templateUrl: './angular-content-carousel.component.html',
  styleUrls: ['./angular-content-carousel.component.css']
})
export class AngularContentCarouselComponent implements AfterViewInit {
  @Input() cellsToShow: number = 1;
  @Input() loop: boolean = true;
  @Input() autoplay: boolean = true;
  @Input() overflowCellsLimit: number = 1;
  @Input() dots: boolean = false;;
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
    document.getElementsByClassName('carousel-cell')[0].classList.add('active-slide'); 
    document.getElementsByClassName('carousel-cell')[this.lengthOfCarousell - 1].classList.add('deactive-slide'); 
    
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
      document.getElementsByClassName('deactive-slide')[0]?.classList.remove('deactive-slide');
      document.getElementsByClassName('active-slide')[0]?.classList.add('deactive-slide');
      document.getElementsByClassName('active-slide')[0].classList.remove('active-slide'); 
      document.getElementsByClassName('carousel-cell')[this.counter].classList.add('active-slide');
  
  
  
      
      // const cells = document.getElementsByClassName('carousel-cell');
      // const howMuchTranslate = 'translateX(-' + this.counter * this.sizeOfCarousel + 'px)';
      // for (let index = 0; index < cells.length; index++) {
      //   const element = cells[index];
      //   (element as HTMLElement).style.transform = howMuchTranslate;
      // }
    }, this.autoInterval);
  }
  
  goNext(): void {
    this.counter ++;
    if (this.counter === this.lengthOfCarousell) {
      this.resetSlider();
      return;
    }
    // const cells = document.getElementsByClassName('carousel-cell');
    // const howMuchTranslate = 'translateX(-' + this.counter * this.sizeOfCarousel + 'px)';
    // for (let index = 0; index < cells.length; index++) {
    //   const element = cells[index];
    //   (element as HTMLElement).style.transform = howMuchTranslate;
    // }
    document.getElementsByClassName('deactive-slide')[0]?.classList.remove('deactive-slide');
    document.getElementsByClassName('active-slide')[0]?.classList.add('deactive-slide');
    document.getElementsByClassName('active-slide')[0]?.classList.remove('active-slide'); 
    document.getElementsByClassName('carousel-cell')[this.counter].classList.add('active-slide');
    this.intervalNext();
  }
  
  goPrev(): void {  
    if (this.counter === 0) {
      this.goToLastSlide();
      return;
    }
    this.counter --;
    // const cells = document.getElementsByClassName('carousel-cell');
    // const howMuchTranslate = 'translateX(-' + (this.counter) * this.sizeOfCarousel + 'px)';  
    // for (let index = 0; index < cells.length; index++) {
    //   const element = cells[index];
    //   (element as HTMLElement).style.transform = howMuchTranslate;
    // }
    
    document.getElementsByClassName('deactive-slide')[0]?.classList.remove('deactive-slide');
    document.getElementsByClassName('active-slide')[0].classList.add('deactive-slide');
    document.getElementsByClassName('active-slide')[0].classList.remove('active-slide'); 
    document.getElementsByClassName('carousel-cell')[this.counter].classList.add('active-slide');
    this.intervalNext();
  }
  
  resetSlider(): void {
    
    // const cells = document.getElementsByClassName('carousel-cell');
    // for (let index = 0; index < cells.length; index++) {
    //   const element = cells[index];
    //   (element as HTMLElement).style.transition = 'none';
    //   setTimeout(() => {
    //     (element as HTMLElement).style.transition = 'all .5s ease-in';
    //   }, 100);
    //   (element as HTMLElement).style.transform = 'translateX(0)';
    // }
    this.counter = 0;
    const activeElement = (document.getElementsByClassName('active-slide')[0] as HTMLElement);
    const deactiveElement = (document.getElementsByClassName('deactive-slide')[0] as HTMLElement);
    const firstElement = (document.getElementsByClassName('carousel-cell')[0] as HTMLElement);
    // firstElement.style.animationDirection = 'reverse';
    // activeElement.style.animationDirection = 'reverse';
    // deactiveElement.style.animationDirection = 'reverse';
    // setTimeout(() => {
    //   firstElement.style.animationDirection = 'normal';
    //   activeElement.style.animationDirection = 'normal';
    //   deactiveElement.style.animationDirection = 'normal';
    // }, 1000);
    deactiveElement.classList.remove('deactive-slide');
    activeElement.classList.add('deactive-slide');
    activeElement.classList.remove('active-slide'); 
    document.getElementsByClassName('carousel-cell')[this.counter].classList.add('active-slide');
    this.intervalNext();
  }
  
  goToLastSlide(): void {
    this.counter = this.lengthOfCarousell - 1;
    const activeElement = (document.getElementsByClassName('active-slide')[0] as HTMLElement);
    const deactiveElement = (document.getElementsByClassName('deactive-slide')[0] as HTMLElement);
    // activeElement.style.animationDirection = 'reverse !important';
    // deactiveElement.style.animationDirection = 'reverse !important';
    deactiveElement.classList.remove('deactive-slide');
    activeElement.classList.add('deactive-slide');
    activeElement.classList.remove('active-slide'); 
    document.getElementsByClassName('carousel-cell')[this.counter].classList.add('active-slide');
    // const cells = document.getElementsByClassName('carousel-cell');
    // const howMuchTranslate = 'translateX(-' + (this.counter) * this.sizeOfCarousel + 'px)';
    // for (let index = 0; index < cells.length; index++) {
    //   const element = cells[index];
    //   (element as HTMLElement).style.transition = 'none';
    //   setTimeout(() => {
    //     (element as HTMLElement).style.transition = 'all .5s ease-in';
    //   }, 100);
    //   (element as HTMLElement).style.transform = howMuchTranslate;
    // }
    
    this.intervalNext();
  }
  
  stopAutoSlide(): void {
    clearInterval(this.autoIntervalObject);
  }
  

}
