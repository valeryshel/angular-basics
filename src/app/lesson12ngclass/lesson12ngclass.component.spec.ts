import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson12ngclassComponent } from './lesson12ngclass.component';

describe('Lesson12ngclassComponent', () => {
  let component: Lesson12ngclassComponent;
  let fixture: ComponentFixture<Lesson12ngclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson12ngclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson12ngclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
