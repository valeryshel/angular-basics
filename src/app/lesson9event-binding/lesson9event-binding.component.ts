import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson9event-binding',
  templateUrl: './lesson9event-binding.component.html',
  styleUrls: ['./lesson9event-binding.component.scss']
})
export class Lesson9eventBindingComponent implements OnInit {
       //для event байндинга
       inputValue = ''
       onInput(event? : any) {
         console.log('Event', event);
         this.inputValue = event.target.value;
       }
       onInput2(event : KeyboardEvent) {
         console.log('Event', event);
         this.inputValue = (<HTMLInputElement>event.target).value; // угловые скобки для явного обозначения типа html элемента
       }
       onBlur(str : string ){
           this.inputValue = str
       }

    constructor() {

  }

  ngOnInit(): void {
  }

}
