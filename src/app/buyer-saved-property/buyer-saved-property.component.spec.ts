import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSavedPropertyComponent } from './buyer-saved-property.component';

describe('BuyerSavedPropertyComponent', () => {
  let component: BuyerSavedPropertyComponent;
  let fixture: ComponentFixture<BuyerSavedPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerSavedPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerSavedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
