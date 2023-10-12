import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerFaqComponent } from './buyer-faq.component';

describe('BuyerFaqComponent', () => {
  let component: BuyerFaqComponent;
  let fixture: ComponentFixture<BuyerFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
