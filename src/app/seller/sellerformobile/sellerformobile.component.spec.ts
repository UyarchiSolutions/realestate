import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerformobileComponent } from './sellerformobile.component';

describe('SellerformobileComponent', () => {
  let component: SellerformobileComponent;
  let fixture: ComponentFixture<SellerformobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerformobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerformobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
