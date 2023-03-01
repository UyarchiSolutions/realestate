import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepasswordsellerComponent } from './createpasswordseller.component';

describe('CreatepasswordsellerComponent', () => {
  let component: CreatepasswordsellerComponent;
  let fixture: ComponentFixture<CreatepasswordsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepasswordsellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepasswordsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
