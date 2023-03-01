import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyotpforsellerComponent } from './verifyotpforseller.component';

describe('VerifyotpforsellerComponent', () => {
  let component: VerifyotpforsellerComponent;
  let fixture: ComponentFixture<VerifyotpforsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyotpforsellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyotpforsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
