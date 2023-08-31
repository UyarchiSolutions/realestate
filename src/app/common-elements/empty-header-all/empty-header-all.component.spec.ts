import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyHeaderAllComponent } from './empty-header-all.component';

describe('EmptyHeaderAllComponent', () => {
  let component: EmptyHeaderAllComponent;
  let fixture: ComponentFixture<EmptyHeaderAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyHeaderAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyHeaderAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
