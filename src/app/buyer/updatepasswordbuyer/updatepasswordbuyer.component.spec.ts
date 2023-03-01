import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepasswordbuyerComponent } from './updatepasswordbuyer.component';

describe('UpdatepasswordbuyerComponent', () => {
  let component: UpdatepasswordbuyerComponent;
  let fixture: ComponentFixture<UpdatepasswordbuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepasswordbuyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepasswordbuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
