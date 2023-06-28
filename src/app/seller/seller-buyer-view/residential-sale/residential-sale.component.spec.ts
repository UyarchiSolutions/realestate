import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialSaleComponent } from './residential-sale.component';

describe('ResidentialSaleComponent', () => {
  let component: ResidentialSaleComponent;
  let fixture: ComponentFixture<ResidentialSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
