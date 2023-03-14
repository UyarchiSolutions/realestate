import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrAdditionalDetailsComponent } from './cr-additional-details.component';

describe('CrAdditionalDetailsComponent', () => {
  let component: CrAdditionalDetailsComponent;
  let fixture: ComponentFixture<CrAdditionalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrAdditionalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrAdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
