import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHostAccountComponent } from './sub-host-account.component';

describe('SubHostAccountComponent', () => {
  let component: SubHostAccountComponent;
  let fixture: ComponentFixture<SubHostAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubHostAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHostAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
