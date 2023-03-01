import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerforotpComponent } from './sellerforotp.component';

describe('SellerforotpComponent', () => {
  let component: SellerforotpComponent;
  let fixture: ComponentFixture<SellerforotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerforotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerforotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
