import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialBuyViewComponent } from './residential-buy-view.component';

describe('ResidentialBuyViewComponent', () => {
  let component: ResidentialBuyViewComponent;
  let fixture: ComponentFixture<ResidentialBuyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialBuyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialBuyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
