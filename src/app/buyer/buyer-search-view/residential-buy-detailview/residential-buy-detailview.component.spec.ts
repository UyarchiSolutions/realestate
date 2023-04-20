import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialBuyDetailviewComponent } from './residential-buy-detailview.component';

describe('ResidentialBuyDetailviewComponent', () => {
  let component: ResidentialBuyDetailviewComponent;
  let fixture: ComponentFixture<ResidentialBuyDetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialBuyDetailviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialBuyDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
