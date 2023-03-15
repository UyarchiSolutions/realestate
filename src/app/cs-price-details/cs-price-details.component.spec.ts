import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPriceDetailsComponent } from './cs-price-details.component';

describe('CsPriceDetailsComponent', () => {
  let component: CsPriceDetailsComponent;
  let fixture: ComponentFixture<CsPriceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsPriceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsPriceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
