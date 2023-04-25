import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStreamsComponent } from './my-streams.component';

describe('MyStreamsComponent', () => {
  let component: MyStreamsComponent;
  let fixture: ComponentFixture<MyStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyStreamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
