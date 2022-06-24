import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDimensionalCssComponent } from './three-dimensional-css.component';

describe('ThreeDimensionalCssComponent', () => {
  let component: ThreeDimensionalCssComponent;
  let fixture: ComponentFixture<ThreeDimensionalCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDimensionalCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDimensionalCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
