import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsAdditionalDetailsComponent } from './cs-additional-details.component';

describe('CsAdditionalDetailsComponent', () => {
  let component: CsAdditionalDetailsComponent;
  let fixture: ComponentFixture<CsAdditionalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsAdditionalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsAdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
