import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostChangePasswordComponent } from './sub-host-change-password.component';

describe('SubHostChangePasswordComponent', () => {
  let component: SubHostChangePasswordComponent;
  let fixture: ComponentFixture<SubHostChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
