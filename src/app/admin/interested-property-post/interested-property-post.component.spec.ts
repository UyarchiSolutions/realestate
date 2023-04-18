import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedPropertyPostComponent } from './interested-property-post.component';

describe('InterestedPropertyPostComponent', () => {
  let component: InterestedPropertyPostComponent;
  let fixture: ComponentFixture<InterestedPropertyPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestedPropertyPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestedPropertyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
