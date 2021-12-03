import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson13ngelseComponent } from './lesson13ngelse.component';

describe('Lesson13ngelseComponent', () => {
  let component: Lesson13ngelseComponent;
  let fixture: ComponentFixture<Lesson13ngelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson13ngelseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson13ngelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
