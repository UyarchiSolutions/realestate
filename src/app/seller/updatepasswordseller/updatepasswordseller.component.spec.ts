import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepasswordsellerComponent } from './updatepasswordseller.component';

describe('UpdatepasswordsellerComponent', () => {
  let component: UpdatepasswordsellerComponent;
  let fixture: ComponentFixture<UpdatepasswordsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatepasswordsellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepasswordsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
