import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostSetpasswordComponent } from './sub-host-setpassword.component';

describe('SubHostSetpasswordComponent', () => {
  let component: SubHostSetpasswordComponent;
  let fixture: ComponentFixture<SubHostSetpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostSetpasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostSetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
