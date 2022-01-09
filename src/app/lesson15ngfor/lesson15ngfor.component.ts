import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson15ngfor',
  templateUrl: './lesson15ngfor.component.html',
  styleUrls: ['./lesson15ngfor.component.scss']
})
export class Lesson15ngforComponent implements OnInit {

  arr = [1, 1, 2, 3, 5, 8, 13];

  objs = [
    {
      title: 'Post 1', author: 'Vladilen', comments: [
        { name: 'Max', text: 'Lorem 1' },
        { name: 'Igor', text: 'Lorem 2' },
        { name: 'Irina', text: 'Lorem 3' }
      ]
    },
    {
      title: 'Post 2', author: 'Lera', comments: [
        { name: 'Marina', text: 'Lorem 4' },
        { name: 'Elya', text: 'Lorem 5' },
        { name: 'Sergei', text: 'Lorem 6' }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
