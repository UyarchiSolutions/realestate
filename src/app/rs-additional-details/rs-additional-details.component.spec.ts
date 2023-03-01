import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsAdditionalDetailsComponent } from './rs-additional-details.component';

describe('RsAdditionalDetailsComponent', () => {
  let component: RsAdditionalDetailsComponent;
  let fixture: ComponentFixture<RsAdditionalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsAdditionalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsAdditionalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
