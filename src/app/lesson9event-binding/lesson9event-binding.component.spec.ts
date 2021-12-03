import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson9eventBindingComponent } from './lesson9event-binding.component';

describe('Lesson9eventBindingComponent', () => {
  let component: Lesson9eventBindingComponent;
  let fixture: ComponentFixture<Lesson9eventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson9eventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson9eventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
