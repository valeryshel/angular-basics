import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson11ngstyle',
  templateUrl: './lesson11ngstyle.component.html',
  styleUrls: ['./lesson11ngstyle.component.scss']
})
export class Lesson11ngstyleComponent implements OnInit {


  //ngStyle Флаг для кнопки Toggle
  backgroundToggle = false;

  constructor() { }

  ngOnInit(): void {
  }

}
