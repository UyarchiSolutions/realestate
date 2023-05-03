import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostNewPasswordComponent } from './sub-host-new-password.component';

describe('SubHostNewPasswordComponent', () => {
  let component: SubHostNewPasswordComponent;
  let fixture: ComponentFixture<SubHostNewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostNewPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
