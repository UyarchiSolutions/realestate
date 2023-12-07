import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDemoPostComponent } from './manage-demo-post.component';

describe('ManageDemoPostComponent', () => {
  let component: ManageDemoPostComponent;
  let fixture: ComponentFixture<ManageDemoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDemoPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDemoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
