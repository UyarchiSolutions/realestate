import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrAmentitesComponent } from './rr-amentites.component';

describe('RrAmentitesComponent', () => {
  let component: RrAmentitesComponent;
  let fixture: ComponentFixture<RrAmentitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrAmentitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrAmentitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
