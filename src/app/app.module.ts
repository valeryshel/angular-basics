import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Lesson8BindingComponent } from './lesson8-binding/lesson8-binding.component';
import { Lesson9eventBindingComponent } from './lesson9event-binding/lesson9event-binding.component';
import { Lesson10TwoWayBindingComponent } from './lesson10-two-way-binding/lesson10-two-way-binding.component';
import { Lesson11ngstyleComponent } from './lesson11ngstyle/lesson11ngstyle.component';
import { Lesson12ngclassComponent } from './lesson12ngclass/lesson12ngclass.component';
import { Lesson7InterpolationComponent } from './lesson7-interpolation/lesson7-interpolation.component';
import { Lesson13ngelseComponent } from './lesson13ngelse/lesson13ngelse.component';
import { Lesson14ngswitchComponent } from './lesson14ngswitch/lesson14ngswitch.component';
import { Lesson15ngforComponent } from './lesson15ngfor/lesson15ngfor.component';
import { Lesson16pipesComponent } from './lesson16pipes/lesson16pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson7InterpolationComponent,
    Lesson8BindingComponent,
    Lesson9eventBindingComponent,
    Lesson10TwoWayBindingComponent,
    Lesson11ngstyleComponent,
    Lesson12ngclassComponent,
    Lesson13ngelseComponent,
    Lesson14ngswitchComponent,
    Lesson15ngforComponent,
    Lesson16pipesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule //для удобного байндинга [()]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
