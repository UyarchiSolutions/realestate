import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamsViewersComponent } from './streams-viewers.component';

describe('StreamsViewersComponent', () => {
  let component: StreamsViewersComponent;
  let fixture: ComponentFixture<StreamsViewersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamsViewersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamsViewersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
