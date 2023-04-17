import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialBuyViewComponent } from './commercial-buy-view.component';

describe('CommercialBuyViewComponent', () => {
  let component: CommercialBuyViewComponent;
  let fixture: ComponentFixture<CommercialBuyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialBuyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialBuyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
