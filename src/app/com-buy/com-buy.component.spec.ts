import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComBuyComponent } from './com-buy.component';

describe('ComBuyComponent', () => {
  let component: ComBuyComponent;
  let fixture: ComponentFixture<ComBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
