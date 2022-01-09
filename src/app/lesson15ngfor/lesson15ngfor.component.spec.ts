import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson15ngforComponent } from './lesson15ngfor.component';

describe('Lesson15ngforComponent', () => {
  let component: Lesson15ngforComponent;
  let fixture: ComponentFixture<Lesson15ngforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson15ngforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson15ngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
