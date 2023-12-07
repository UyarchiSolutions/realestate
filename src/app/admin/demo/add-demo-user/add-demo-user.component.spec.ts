import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemoUserComponent } from './add-demo-user.component';

describe('AddDemoUserComponent', () => {
  let component: AddDemoUserComponent;
  let fixture: ComponentFixture<AddDemoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDemoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
