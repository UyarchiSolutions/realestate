import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsPropertyDetailsComponent } from './cs-property-details.component';

describe('CsPropertyDetailsComponent', () => {
  let component: CsPropertyDetailsComponent;
  let fixture: ComponentFixture<CsPropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsPropertyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
