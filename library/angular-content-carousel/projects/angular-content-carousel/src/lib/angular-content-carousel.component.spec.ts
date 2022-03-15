import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularContentCarouselComponent } from './angular-content-carousel.component';

describe('AngularContentCarouselComponent', () => {
  let component: AngularContentCarouselComponent;
  let fixture: ComponentFixture<AngularContentCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularContentCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularContentCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
