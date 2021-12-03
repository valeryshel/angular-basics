import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson14ngswitchComponent } from './lesson14ngswitch.component';

describe('Lesson14ngswitchComponent', () => {
  let component: Lesson14ngswitchComponent;
  let fixture: ComponentFixture<Lesson14ngswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lesson14ngswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson14ngswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
