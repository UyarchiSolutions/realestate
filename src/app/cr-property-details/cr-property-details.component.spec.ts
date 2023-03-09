import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrPropertyDetailsComponent } from './cr-property-details.component';

describe('CrPropertyDetailsComponent', () => {
  let component: CrPropertyDetailsComponent;
  let fixture: ComponentFixture<CrPropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrPropertyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
