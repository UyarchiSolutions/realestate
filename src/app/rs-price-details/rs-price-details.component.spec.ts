import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsPriceDetailsComponent } from './rs-price-details.component';

describe('RsPriceDetailsComponent', () => {
  let component: RsPriceDetailsComponent;
  let fixture: ComponentFixture<RsPriceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsPriceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsPriceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
