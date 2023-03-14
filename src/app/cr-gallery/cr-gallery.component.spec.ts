import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrGalleryComponent } from './cr-gallery.component';

describe('CrGalleryComponent', () => {
  let component: CrGalleryComponent;
  let fixture: ComponentFixture<CrGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
