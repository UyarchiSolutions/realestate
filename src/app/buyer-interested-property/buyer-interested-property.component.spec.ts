import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerInterestedPropertyComponent } from './buyer-interested-property.component';

describe('BuyerInterestedPropertyComponent', () => {
  let component: BuyerInterestedPropertyComponent;
  let fixture: ComponentFixture<BuyerInterestedPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerInterestedPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerInterestedPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
