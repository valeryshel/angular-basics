import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson8BindingComponent } from './lesson8-binding.component';

describe('Lesson8BindingComponent', () => {
  let component: Lesson8BindingComponent;
  let fixture: ComponentFixture<Lesson8BindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson8BindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson8BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
