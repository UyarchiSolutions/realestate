import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialBuyDetailviewComponent } from './commercial-buy-detailview.component';

describe('CommercialBuyDetailviewComponent', () => {
  let component: CommercialBuyDetailviewComponent;
  let fixture: ComponentFixture<CommercialBuyDetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialBuyDetailviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialBuyDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
