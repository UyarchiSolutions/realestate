import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselStreamsComponent } from './carousel-streams.component';

describe('CarouselStreamsComponent', () => {
  let component: CarouselStreamsComponent;
  let fixture: ComponentFixture<CarouselStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselStreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
