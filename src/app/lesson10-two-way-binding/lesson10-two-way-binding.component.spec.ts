import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson10TwoWayBindingComponent } from './lesson10-two-way-binding.component';

describe('Lesson10TwoWayBindingComponent', () => {
  let component: Lesson10TwoWayBindingComponent;
  let fixture: ComponentFixture<Lesson10TwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson10TwoWayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson10TwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
