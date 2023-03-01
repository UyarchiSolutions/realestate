import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrRentalDetailsComponent } from './cr-rental-details.component';

describe('CrRentalDetailsComponent', () => {
  let component: CrRentalDetailsComponent;
  let fixture: ComponentFixture<CrRentalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrRentalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrRentalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
