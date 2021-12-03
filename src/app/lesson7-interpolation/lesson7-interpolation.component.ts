import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson7-interpolation',
  templateUrl: './lesson7-interpolation.component.html',
  styleUrls: ['./lesson7-interpolation.component.scss']
})
export class Lesson7InterpolationComponent implements OnInit {
  img = 'https://cs13.pikabu.ru/avatars/3265/x3265744-2088957135.png';
  constructor() {
    setTimeout(() => {
      console.log('timeout is over');
      this.img = 'https://i.artfile.ru/s/1046569_070616_95_ArtFile_ru.jpg';
    }, 5000);
  }

  ngOnInit(): void {
  }

}
