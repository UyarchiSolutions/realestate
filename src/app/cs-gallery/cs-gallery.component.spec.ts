import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsGalleryComponent } from './cs-gallery.component';

describe('CsGalleryComponent', () => {
  let component: CsGalleryComponent;
  let fixture: ComponentFixture<CsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
