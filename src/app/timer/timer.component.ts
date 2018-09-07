import {Component, OnInit} from '@angular/core';
import {Timer} from '../models/timer.model';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
    description: string;
    startCount: any;
    count: string;
    time: any = {
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    constructor() {
    }

    ngOnInit() {
    }

    playPause(action) {
        if (action === 'play') {
            this.startCount = setInterval(() => {
                this.time.seconds++;
                if (this.time.seconds >= 60) {
                    this.time.seconds = 0;
                    this.time.minutes++;
                }
                if (this.time.minutes >= 60) {
                    this.time.minutes = 0;
                    this.time.hours++;
                }
                this.count = `${this.time.hours}:${this.time.minutes < 10 ? '0' + this.time.minutes : this.time.minutes}:${this.time.seconds < 10 ? '0' + this.time.seconds : this.time.seconds}`;
            }, 1000);
        } else if (action === 'pause') {
            clearInterval(this.startCount);
        } else {

        }
    }
}
