import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostStreamComponent } from './sub-host-stream.component';

describe('SubHostStreamComponent', () => {
  let component: SubHostStreamComponent;
  let fixture: ComponentFixture<SubHostStreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostStreamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
