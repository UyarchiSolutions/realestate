import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialSaleComponent } from './commercial-sale.component';

describe('CommercialSaleComponent', () => {
  let component: CommercialSaleComponent;
  let fixture: ComponentFixture<CommercialSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
