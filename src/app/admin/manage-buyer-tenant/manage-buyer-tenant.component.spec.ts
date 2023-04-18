import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBuyerTenantComponent } from './manage-buyer-tenant.component';

describe('ManageBuyerTenantComponent', () => {
  let component: ManageBuyerTenantComponent;
  let fixture: ComponentFixture<ManageBuyerTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBuyerTenantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBuyerTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
