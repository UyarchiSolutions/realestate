import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWithProfileComponent } from './header-with-profile.component';

describe('HeaderWithProfileComponent', () => {
  let component: HeaderWithProfileComponent;
  let fixture: ComponentFixture<HeaderWithProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWithProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWithProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
