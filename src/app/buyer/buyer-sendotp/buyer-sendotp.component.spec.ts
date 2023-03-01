import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerSendotpComponent } from './buyer-sendotp.component';

describe('BuyerSendotpComponent', () => {
  let component: BuyerSendotpComponent;
  let fixture: ComponentFixture<BuyerSendotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerSendotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerSendotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
