import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerInterestedComponent } from './buyer-interested.component';

describe('BuyerInterestedComponent', () => {
  let component: BuyerInterestedComponent;
  let fixture: ComponentFixture<BuyerInterestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerInterestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerInterestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
