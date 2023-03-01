import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSellerComponent } from './change-seller.component';

describe('ChangeSellerComponent', () => {
  let component: ChangeSellerComponent;
  let fixture: ComponentFixture<ChangeSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
