import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrCommercialRentPreviewComponent } from './cr-commercial-rent-preview.component';

describe('CrCommercialRentPreviewComponent', () => {
  let component: CrCommercialRentPreviewComponent;
  let fixture: ComponentFixture<CrCommercialRentPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrCommercialRentPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrCommercialRentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
