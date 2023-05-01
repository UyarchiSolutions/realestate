import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostRegisterComponent } from './sub-host-register.component';

describe('SubHostRegisterComponent', () => {
  let component: SubHostRegisterComponent;
  let fixture: ComponentFixture<SubHostRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
