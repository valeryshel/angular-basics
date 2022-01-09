import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson16pipes',
  templateUrl: './lesson16pipes.component.html',
  styleUrls: ['./lesson16pipes.component.scss']
})
export class Lesson16pipesComponent implements OnInit {

  now : Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
