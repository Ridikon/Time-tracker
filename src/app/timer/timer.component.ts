import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ITimer} from '../services/timer.servise';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnChanges {
    @Output() onAddTimer = new EventEmitter();
    @Input() timerItem;
    state: string;
    description: string;
    startCount: any;
    count: string;
    time: { hours: number, minutes: number, seconds: number } = {
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.timerItem && !this.count) {
            this.description = this.timerItem.description;
            this.time = this.timerItem.time;
            this.playPause('play');
        } else {
            this.description = this.timerItem.description;
            this.playPause('stop');
            this.playPause('play');
        }
    }

    playPause(action) {
        this.state = action;
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
            if (this.count && !this.timerItem) {
                const data: ITimer = {
                    spendTime: this.count,
                    timerDate: new Date,
                    description: this.description,
                    time: this.time
                };
                this.onAddTimer.emit(data);
                clearInterval(this.startCount);
                this.description = '';
                this.count = '';
            } else {
                this.count = `${this.timerItem.time.hours}:${this.timerItem.time.minutes < 10 ? '0' + this.timerItem.time.minutes : this.timerItem.time.minutes}:${this.timerItem.time.seconds < 10 ? '0' + this.timerItem.time.seconds : this.timerItem.time.seconds}`;
                const data: ITimer = {
                    spendTime: this.count,
                    timerDate: new Date,
                    description: this.description,
                    id: this.timerItem.id,
                    time: this.time
                };
                this.onAddTimer.emit(data);
                clearInterval(this.startCount);
                this.description = '';
                this.count = '';
                this.timerItem = {};
            }
        }
    }
}
