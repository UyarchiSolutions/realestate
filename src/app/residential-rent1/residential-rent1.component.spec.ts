import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialRent1Component } from './residential-rent1.component';

describe('ResidentialRent1Component', () => {
  let component: ResidentialRent1Component;
  let fixture: ComponentFixture<ResidentialRent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialRent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialRent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
