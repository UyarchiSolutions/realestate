import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAlertComponent } from './property-alert.component';

describe('PropertyAlertComponent', () => {
  let component: PropertyAlertComponent;
  let fixture: ComponentFixture<PropertyAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
