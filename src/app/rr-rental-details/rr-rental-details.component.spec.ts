import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrRentalDetailsComponent } from './rr-rental-details.component';

describe('RrRentalDetailsComponent', () => {
  let component: RrRentalDetailsComponent;
  let fixture: ComponentFixture<RrRentalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrRentalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrRentalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
