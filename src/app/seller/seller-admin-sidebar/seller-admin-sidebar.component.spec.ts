import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAdminSidebarComponent } from './seller-admin-sidebar.component';

describe('SellerAdminSidebarComponent', () => {
  let component: SellerAdminSidebarComponent;
  let fixture: ComponentFixture<SellerAdminSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAdminSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
