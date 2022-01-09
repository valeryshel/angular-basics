import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson16pipesComponent } from './lesson16pipes.component';

describe('Lesson16pipesComponent', () => {
  let component: Lesson16pipesComponent;
  let fixture: ComponentFixture<Lesson16pipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson16pipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson16pipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
