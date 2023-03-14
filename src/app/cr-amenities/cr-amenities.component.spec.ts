import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrAmenitiesComponent } from './cr-amenities.component';

describe('CrAmenitiesComponent', () => {
  let component: CrAmenitiesComponent;
  let fixture: ComponentFixture<CrAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrAmenitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
