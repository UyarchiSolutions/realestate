import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSavedComponent } from './buyer-saved.component';

describe('BuyerSavedComponent', () => {
  let component: BuyerSavedComponent;
  let fixture: ComponentFixture<BuyerSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerSavedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
