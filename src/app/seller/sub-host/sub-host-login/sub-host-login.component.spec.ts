import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostLoginComponent } from './sub-host-login.component';

describe('SubHostLoginComponent', () => {
  let component: SubHostLoginComponent;
  let fixture: ComponentFixture<SubHostLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
