import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialRentDetailviewComponent } from './commercial-rent-detailview.component';

describe('CommercialRentDetailviewComponent', () => {
  let component: CommercialRentDetailviewComponent;
  let fixture: ComponentFixture<CommercialRentDetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialRentDetailviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialRentDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
