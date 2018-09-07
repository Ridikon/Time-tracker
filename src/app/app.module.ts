import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimersComponent } from './timers/timers.component';
import { TimerComponent } from './timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    TimersComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
