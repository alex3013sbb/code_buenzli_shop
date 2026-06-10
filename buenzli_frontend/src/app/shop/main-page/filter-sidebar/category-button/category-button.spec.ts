import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryButton } from './category-button';

describe('CategoryButton', () => {
  let component: CategoryButton;
  let fixture: ComponentFixture<CategoryButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryButton],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
