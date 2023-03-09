import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrLocationDetailsComponent } from './rr-location-details.component';

describe('RrLocationDetailsComponent', () => {
  let component: RrLocationDetailsComponent;
  let fixture: ComponentFixture<RrLocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrLocationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
