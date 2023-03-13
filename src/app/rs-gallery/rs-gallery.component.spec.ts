import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsGalleryComponent } from './rs-gallery.component';

describe('RsGalleryComponent', () => {
  let component: RsGalleryComponent;
  let fixture: ComponentFixture<RsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
