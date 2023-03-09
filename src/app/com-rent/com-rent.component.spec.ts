import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComRentComponent } from './com-rent.component';

describe('ComRentComponent', () => {
  let component: ComRentComponent;
  let fixture: ComponentFixture<ComRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComRentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
