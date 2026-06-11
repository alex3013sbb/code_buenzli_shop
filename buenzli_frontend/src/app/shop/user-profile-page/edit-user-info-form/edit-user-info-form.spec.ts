import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserInfoForm } from './edit-user-info-form';

describe('EditUserInfoForm', () => {
  let component: EditUserInfoForm;
  let fixture: ComponentFixture<EditUserInfoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserInfoForm],
    }).compileComponents();

    fixture = TestBed.createComponent(EditUserInfoForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
