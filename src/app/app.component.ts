import { Component } from '@angular/core';
//декоратор
@Component({
  selector: 'app-root',//обязательное поле
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title: any;
}

// export class AppComponent {
//   number = 42
//   arr = [1, 2, 3]

//   obj = { a: 1, b: { c: 2 } }

//
// }

