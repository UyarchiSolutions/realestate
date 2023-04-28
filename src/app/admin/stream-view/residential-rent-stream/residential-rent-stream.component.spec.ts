import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialRentStreamComponent } from './residential-rent-stream.component';

describe('ResidentialRentStreamComponent', () => {
  let component: ResidentialRentStreamComponent;
  let fixture: ComponentFixture<ResidentialRentStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialRentStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialRentStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
