import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson10-two-way-binding',
  templateUrl: './lesson10-two-way-binding.component.html',
  styleUrls: ['./lesson10-two-way-binding.component.scss']
})
export class Lesson10TwoWayBindingComponent implements OnInit {
  title = 'Inintial';

  onInput3(event: any) {
    this.title = event.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
