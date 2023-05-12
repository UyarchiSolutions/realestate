import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAlertPopComponent } from './buyer-alert-pop.component';

describe('BuyerAlertPopComponent', () => {
  let component: BuyerAlertPopComponent;
  let fixture: ComponentFixture<BuyerAlertPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerAlertPopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerAlertPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
