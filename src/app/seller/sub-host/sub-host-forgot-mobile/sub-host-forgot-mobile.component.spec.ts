import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostForgotMobileComponent } from './sub-host-forgot-mobile.component';

describe('SubHostForgotMobileComponent', () => {
  let component: SubHostForgotMobileComponent;
  let fixture: ComponentFixture<SubHostForgotMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostForgotMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostForgotMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
