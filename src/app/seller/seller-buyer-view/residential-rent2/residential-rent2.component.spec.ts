import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialRent2Component } from './residential-rent2.component';

describe('ResidentialRent2Component', () => {
  let component: ResidentialRent2Component;
  let fixture: ComponentFixture<ResidentialRent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialRent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialRent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
