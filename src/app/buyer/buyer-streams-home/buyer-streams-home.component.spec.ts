import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerStreamsHomeComponent } from './buyer-streams-home.component';

describe('BuyerStreamsHomeComponent', () => {
  let component: BuyerStreamsHomeComponent;
  let fixture: ComponentFixture<BuyerStreamsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerStreamsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerStreamsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
