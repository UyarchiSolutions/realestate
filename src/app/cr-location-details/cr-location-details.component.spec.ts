import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrLocationDetailsComponent } from './cr-location-details.component';

describe('CrLocationDetailsComponent', () => {
  let component: CrLocationDetailsComponent;
  let fixture: ComponentFixture<CrLocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrLocationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
