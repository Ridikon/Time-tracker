import {Component, OnInit} from '@angular/core';
import {ITimer, TimerService} from '../services/timer.servise';

@Component({
    selector: 'app-timers',
    templateUrl: './timers.component.html',
    styleUrls: ['./timers.component.scss']
})
export class TimersComponent implements OnInit {
    timersData: {};
    continuedTimer: {};

    constructor(private timerService: TimerService) {
    }

    ngOnInit() {
        this.getTimerList();
    }

    getTimerList() {
        this.timerService.getTimers().subscribe(res => {
            this.timersData = res;
        });
    }

    updateTimersList(timer: ITimer) {
        if (!timer.id) {
            this.timerService.addTimer(timer).subscribe(res => {
                this.getTimerList();
            });
        } else {
            this.timerService.updateTimer(timer.id, timer).subscribe(res => {
                this.getTimerList();
            });
        }
    }

    deleteTimer(id) {
        this.timerService.deleteTimer(id).subscribe(res => {
            this.getTimerList();
        });
    }

    continueTimer(timer: ITimer) {
        console.log(timer);
        this.continuedTimer = timer;
    }

}
