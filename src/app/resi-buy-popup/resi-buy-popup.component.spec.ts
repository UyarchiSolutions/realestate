import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiBuyPopupComponent } from './resi-buy-popup.component';

describe('ResiBuyPopupComponent', () => {
  let component: ResiBuyPopupComponent;
  let fixture: ComponentFixture<ResiBuyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResiBuyPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResiBuyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
