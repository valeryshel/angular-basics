import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson7InterpolationComponent } from './lesson7-interpolation.component';

describe('Lesson7InterpolationComponent', () => {
  let component: Lesson7InterpolationComponent;
  let fixture: ComponentFixture<Lesson7InterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson7InterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson7InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
