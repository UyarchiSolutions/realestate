import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPostingComponent } from './start-posting.component';

describe('StartPostingComponent', () => {
  let component: StartPostingComponent;
  let fixture: ComponentFixture<StartPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
