import { Component } from '@angular/core';
import { CounterStateManagementService } from '../services/counter-state-management.service';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

@Component({
  selector: 'app-reset-counter',
  templateUrl: './reset-counter.component.html',
  styleUrls: ['./reset-counter.component.scss'],
})
export class ResetCounterComponent {
  date: NgbDateStruct = this.calendar.getToday();
  isOlder = true;

  constructor(
    private counterManagementService: CounterStateManagementService,
    private calendar: NgbCalendar
  ) {}

  resetCounter() {
    this.counterManagementService.resetCounter();
  }

  onDateSelect(event: NgbDateStruct) {
    this.date = event;
    this.isOlder = this.checkUserAge(this.date);
  }

  checkUserAge(date: NgbDateStruct): boolean {
    return moment(
      `${this.date.year}-${this.date.month}-${this.date.day}`
    ).isAfter(moment().subtract(18, 'years'));
  }
}
