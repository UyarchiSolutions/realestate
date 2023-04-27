import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamApprovalComponent } from './stream-approval.component';

describe('StreamApprovalComponent', () => {
  let component: StreamApprovalComponent;
  let fixture: ComponentFixture<StreamApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
