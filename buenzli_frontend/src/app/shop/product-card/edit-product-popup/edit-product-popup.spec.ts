import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductPopup } from './edit-product-popup';

describe('EditProductPopup', () => {
  let component: EditProductPopup;
  let fixture: ComponentFixture<EditProductPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProductPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(EditProductPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
