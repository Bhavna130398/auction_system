import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionerFrontComponent } from './auctioner-front.component';

describe('AuctionerFrontComponent', () => {
  let component: AuctionerFrontComponent;
  let fixture: ComponentFixture<AuctionerFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionerFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionerFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
