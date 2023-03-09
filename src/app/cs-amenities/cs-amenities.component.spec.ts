import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsAmenitiesComponent } from './cs-amenities.component';

describe('CsAmenitiesComponent', () => {
  let component: CsAmenitiesComponent;
  let fixture: ComponentFixture<CsAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsAmenitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
