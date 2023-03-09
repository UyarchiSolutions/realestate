import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbHomeComponent } from './rb-home.component';

describe('RbHomeComponent', () => {
  let component: RbHomeComponent;
  let fixture: ComponentFixture<RbHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
