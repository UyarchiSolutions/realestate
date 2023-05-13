import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerNotificationComponent } from './buyer-notification.component';

describe('BuyerNotificationComponent', () => {
  let component: BuyerNotificationComponent;
  let fixture: ComponentFixture<BuyerNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
