import { Component } from '@angular/core';


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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slides: Array<Slide> = [
    {
      yek: '../../../../../assets/img/slides/1/1-375.jpg',
      do: '../../../../../assets/img/slides/1/1-412.jpg',
      se: '../../../../../assets/img/slides/1/1-600.jpg',
      char: '../../../../../assets/img/slides/1/1-768.jpg',
      panj: '../../../../../assets/img/slides/1/1-900.jpg',
      shish: '../../../../../assets/img/slides/1/1-1024.jpg',
      haft: '../../../../../assets/img/slides/1/1-1280.jpg',
      hasht: '../../../../../assets/img/slides/1/1-1366.jpg',
      noh: '../../../../../assets/img/slides/1/1-1440.jpg',
      dah: '../../../../../assets/img/slides/1/1-1600.jpg',
      yazdah: '../../../../../assets/img/slides/1/1-1920.jpg'
    },
    {
      yek: '../../../../../assets/img/slides/2/2-375.jpg',
      do: '../../../../../assets/img/slides/2/2-412.jpg',
      se: '../../../../../assets/img/slides/2/2-600.jpg',
      char: '../../../../../assets/img/slides/2/2-768.jpg',
      panj: '../../../../../assets/img/slides/2/2-900.jpg',
      shish: '../../../../../assets/img/slides/2/2-1024.jpg',
      haft: '../../../../../assets/img/slides/2/2-1280.jpg',
      hasht: '../../../../../assets/img/slides/2/2-1366.jpg',
      noh: '../../../../../assets/img/slides/2/2-1440.jpg',
      dah: '../../../../../assets/img/slides/2/2-1600.jpg',
      yazdah: '../../../../../assets/img/slides/2/2-1920.jpg'
    },
    {
      yek: '../../../../../assets/img/slides/3/3-375.jpg',
      do: '../../../../../assets/img/slides/3/3-412.jpg',
      se: '../../../../../assets/img/slides/3/3-600.jpg',
      char: '../../../../../assets/img/slides/3/3-768.jpg',
      panj: '../../../../../assets/img/slides/3/3-900.jpg',
      shish: '../../../../../assets/img/slides/3/3-1024.jpg',
      haft: '../../../../../assets/img/slides/3/3-1280.jpg',
      hasht: '../../../../../assets/img/slides/3/3-1366.jpg',
      noh: '../../../../../assets/img/slides/3/3-1440.jpg',
      dah: '../../../../../assets/img/slides/3/3-1600.jpg',
      yazdah: '../../../../../assets/img/slides/3/3-1920.jpg'
    },
    {
      yek: '../../../../../assets/img/slides/4/4-375.jpg',
      do: '../../../../../assets/img/slides/4/4-412.jpg',
      se: '../../../../../assets/img/slides/4/4-600.jpg',
      char: '../../../../../assets/img/slides/4/4-768.jpg',
      panj: '../../../../../assets/img/slides/4/4-900.jpg',
      shish: '../../../../../assets/img/slides/4/4-1024.jpg',
      haft: '../../../../../assets/img/slides/4/4-1280.jpg',
      hasht: '../../../../../assets/img/slides/4/4-1366.jpg',
      noh: '../../../../../assets/img/slides/4/4-1440.jpg',
      dah: '../../../../../assets/img/slides/4/4-1600.jpg',
      yazdah: '../../../../../assets/img/slides/4/4-1920.jpg'
    }
  ];
}
