import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBuyerComponent } from './change-buyer.component';

describe('ChangeBuyerComponent', () => {
  let component: ChangeBuyerComponent;
  let fixture: ComponentFixture<ChangeBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeBuyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
