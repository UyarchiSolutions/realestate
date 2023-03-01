import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrAdditionalDetailsComponent } from './rr-additional-details.component';

describe('RrAdditionalDetailsComponent', () => {
  let component: RrAdditionalDetailsComponent;
  let fixture: ComponentFixture<RrAdditionalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrAdditionalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrAdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
