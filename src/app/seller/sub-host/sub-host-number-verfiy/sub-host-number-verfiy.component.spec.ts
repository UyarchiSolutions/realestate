import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostNumberVerfiyComponent } from './sub-host-number-verfiy.component';

describe('SubHostNumberVerfiyComponent', () => {
  let component: SubHostNumberVerfiyComponent;
  let fixture: ComponentFixture<SubHostNumberVerfiyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostNumberVerfiyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostNumberVerfiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
