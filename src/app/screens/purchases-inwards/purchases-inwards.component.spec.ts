import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesInwardsComponent } from './purchases-inwards.component';

describe('PurchasesInwardsComponent', () => {
  let component: PurchasesInwardsComponent;
  let fixture: ComponentFixture<PurchasesInwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesInwardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesInwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
