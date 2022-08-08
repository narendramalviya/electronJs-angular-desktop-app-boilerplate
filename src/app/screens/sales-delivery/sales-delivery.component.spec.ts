import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDeliveryComponent } from './sales-delivery.component';

describe('SalesDeliveryComponent', () => {
  let component: SalesDeliveryComponent;
  let fixture: ComponentFixture<SalesDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
