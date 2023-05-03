import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostHeaderComponent } from './sub-host-header.component';

describe('SubHostHeaderComponent', () => {
  let component: SubHostHeaderComponent;
  let fixture: ComponentFixture<SubHostHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
