import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostForgotOtpComponent } from './sub-host-forgot-otp.component';

describe('SubHostForgotOtpComponent', () => {
  let component: SubHostForgotOtpComponent;
  let fixture: ComponentFixture<SubHostForgotOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostForgotOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostForgotOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
