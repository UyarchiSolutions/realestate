import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsCommercialSalePreviewComponent } from './cs-commercial-sale-preview.component';

describe('CsCommercialSalePreviewComponent', () => {
  let component: CsCommercialSalePreviewComponent;
  let fixture: ComponentFixture<CsCommercialSalePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsCommercialSalePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsCommercialSalePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
