import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// import {Timer} from '../models/timer.model';

export interface ITimer {
    spendTime: string;
    timerDate: Date;
    description?: string;
    id?: number;
    time: { hours: number, minutes: number, seconds: number };
}

@Injectable()
export class TimerService {
    constructor(private http: HttpClient) {
    }
    getTimers() {
        return this.http.get('http://localhost:3000/timers');
    }
    addTimer(data: ITimer) {
        return this.http.post('http://localhost:3000/timers', data);
    }
    deleteTimer(id) {
        return this.http.delete(`http://localhost:3000/timers/${id}`);
    }
    updateTimer(id, data) {
        return this.http.put(`http://localhost:3000/timers/${id}`, data);
    }
}