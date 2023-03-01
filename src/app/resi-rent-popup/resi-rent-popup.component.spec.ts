import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiRentPopupComponent } from './resi-rent-popup.component';

describe('ResiRentPopupComponent', () => {
  let component: ResiRentPopupComponent;
  let fixture: ComponentFixture<ResiRentPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResiRentPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResiRentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
