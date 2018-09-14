import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TimersComponent} from './timers/timers.component';
import {TimerComponent} from './timer/timer.component';
import {TimerService} from './services/timer.servise';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        TimersComponent,
        TimerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [TimerService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
