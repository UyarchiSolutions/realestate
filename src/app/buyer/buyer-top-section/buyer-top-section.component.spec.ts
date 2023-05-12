import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerTopSectionComponent } from './buyer-top-section.component';

describe('BuyerTopSectionComponent', () => {
  let component: BuyerTopSectionComponent;
  let fixture: ComponentFixture<BuyerTopSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerTopSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerTopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
