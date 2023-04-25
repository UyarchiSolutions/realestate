import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubHostComponent } from './add-sub-host.component';

describe('AddSubHostComponent', () => {
  let component: AddSubHostComponent;
  let fixture: ComponentFixture<AddSubHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSubHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
