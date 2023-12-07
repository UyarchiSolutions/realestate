import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostPropComponent } from './add-post-prop.component';

describe('AddPostPropComponent', () => {
  let component: AddPostPropComponent;
  let fixture: ComponentFixture<AddPostPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostPropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPostPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
