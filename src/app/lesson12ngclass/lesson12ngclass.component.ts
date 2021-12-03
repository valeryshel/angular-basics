import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson12ngclass',
  templateUrl: './lesson12ngclass.component.html',
  styleUrls: ['./lesson12ngclass.component.scss']
})
export class Lesson12ngclassComponent implements OnInit {
    //ngStyle Флаг для кнопки Toggle
    backgroundToggle = false;
  constructor() { }

  ngOnInit(): void {
  }

}
