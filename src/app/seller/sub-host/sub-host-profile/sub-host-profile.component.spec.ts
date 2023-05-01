import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostProfileComponent } from './sub-host-profile.component';

describe('SubHostProfileComponent', () => {
  let component: SubHostProfileComponent;
  let fixture: ComponentFixture<SubHostProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
