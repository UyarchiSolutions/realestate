import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsAmenitiesComponent } from './rs-amenities.component';

describe('RsAmenitiesComponent', () => {
  let component: RsAmenitiesComponent;
  let fixture: ComponentFixture<RsAmenitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsAmenitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
