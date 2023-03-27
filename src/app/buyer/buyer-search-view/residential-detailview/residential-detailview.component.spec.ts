import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialDetailviewComponent } from './residential-detailview.component';

describe('ResidentialDetailviewComponent', () => {
  let component: ResidentialDetailviewComponent;
  let fixture: ComponentFixture<ResidentialDetailviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialDetailviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialDetailviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
