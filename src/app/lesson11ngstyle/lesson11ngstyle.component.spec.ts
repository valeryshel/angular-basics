import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson11ngstyleComponent } from './lesson11ngstyle.component';

describe('Lesson11ngstyleComponent', () => {
  let component: Lesson11ngstyleComponent;
  let fixture: ComponentFixture<Lesson11ngstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson11ngstyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson11ngstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
