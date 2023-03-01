import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerForgotComponent } from './buyer-forgot.component';

describe('BuyerForgotComponent', () => {
  let component: BuyerForgotComponent;
  let fixture: ComponentFixture<BuyerForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerForgotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
