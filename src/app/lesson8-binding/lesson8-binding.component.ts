import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson8-binding',
  templateUrl: './lesson8-binding.component.html',
  styleUrls: ['./lesson8-binding.component.scss']
})
export class Lesson8BindingComponent implements OnInit {
  onClick() {
    console.log('click!!!');
  }


  ngOnInit(): void {
  }

}
