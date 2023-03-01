import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsPropertyDetailsComponent } from './rs-property-details.component';

describe('RsPropertyDetailsComponent', () => {
  let component: RsPropertyDetailsComponent;
  let fixture: ComponentFixture<RsPropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsPropertyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsPropertyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
