import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrGalleryComponent } from './rr-gallery.component';

describe('RrGalleryComponent', () => {
  let component: RrGalleryComponent;
  let fixture: ComponentFixture<RrGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RrGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RrGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
