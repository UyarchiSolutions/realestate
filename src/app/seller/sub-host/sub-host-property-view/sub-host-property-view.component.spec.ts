import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostPropertyViewComponent } from './sub-host-property-view.component';

describe('SubHostPropertyViewComponent', () => {
  let component: SubHostPropertyViewComponent;
  let fixture: ComponentFixture<SubHostPropertyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostPropertyViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostPropertyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
