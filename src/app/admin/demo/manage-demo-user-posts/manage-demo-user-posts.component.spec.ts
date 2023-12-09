import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDemoUserPostsComponent } from './manage-demo-user-posts.component';

describe('ManageDemoUserPostsComponent', () => {
  let component: ManageDemoUserPostsComponent;
  let fixture: ComponentFixture<ManageDemoUserPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDemoUserPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDemoUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
