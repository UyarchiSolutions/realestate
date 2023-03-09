import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrPropertyDetailsComponent } from './rr-property-details.component';

describe('RrPropertyDetailsComponent', () => {
  let component: RrPropertyDetailsComponent;
  let fixture: ComponentFixture<RrPropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrPropertyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
