import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsResidentialSalePreviewComponent } from './rs-residential-sale-preview.component';

describe('RsResidentialSalePreviewComponent', () => {
  let component: RsResidentialSalePreviewComponent;
  let fixture: ComponentFixture<RsResidentialSalePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsResidentialSalePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsResidentialSalePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
