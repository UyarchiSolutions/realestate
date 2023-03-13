import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsLocationDetailsComponent } from './rs-location-details.component';

describe('RsLocationDetailsComponent', () => {
  let component: RsLocationDetailsComponent;
  let fixture: ComponentFixture<RsLocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsLocationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
