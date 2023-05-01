import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostOtpComponent } from './sub-host-otp.component';

describe('SubHostOtpComponent', () => {
  let component: SubHostOtpComponent;
  let fixture: ComponentFixture<SubHostOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
