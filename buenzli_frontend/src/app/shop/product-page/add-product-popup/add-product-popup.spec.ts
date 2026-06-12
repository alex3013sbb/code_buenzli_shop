import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductPopup } from './add-product-popup';

describe('AddProductPopup', () => {
  let component: AddProductPopup;
  let fixture: ComponentFixture<AddProductPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProductPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
