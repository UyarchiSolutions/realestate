import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSellerOwnerComponent } from './manage-seller-owner.component';

describe('ManageSellerOwnerComponent', () => {
  let component: ManageSellerOwnerComponent;
  let fixture: ComponentFixture<ManageSellerOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSellerOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSellerOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
