import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSubHostComponent } from './manage-sub-host.component';

describe('ManageSubHostComponent', () => {
  let component: ManageSubHostComponent;
  let fixture: ComponentFixture<ManageSubHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSubHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSubHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
