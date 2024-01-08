import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCompletedStreamComponent } from './view-completed-stream.component';

describe('ViewCompletedStreamComponent', () => {
  let component: ViewCompletedStreamComponent;
  let fixture: ComponentFixture<ViewCompletedStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCompletedStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCompletedStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
