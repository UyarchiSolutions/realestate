import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsLocationDetailsComponent } from './cs-location-details.component';

describe('CsLocationDetailsComponent', () => {
  let component: CsLocationDetailsComponent;
  let fixture: ComponentFixture<CsLocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsLocationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
