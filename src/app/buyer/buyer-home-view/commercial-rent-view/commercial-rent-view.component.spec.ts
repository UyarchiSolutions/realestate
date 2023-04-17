import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialRentViewComponent } from './commercial-rent-view.component';

describe('CommercialRentViewComponent', () => {
  let component: CommercialRentViewComponent;
  let fixture: ComponentFixture<CommercialRentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialRentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialRentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
