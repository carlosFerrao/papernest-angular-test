import { Component } from '@angular/core';
import { CounterStateManagementService } from '../services/counter-state-management.service';

@Component({
  selector: 'app-increase-counter',
  templateUrl: './increase-counter.component.html',
  styleUrls: ['./increase-counter.component.scss'],
})
export class IncreaseCounterComponent {
  constructor(
    private counterManagementService: CounterStateManagementService
  ) {}

  increaseValue() {
    this.counterManagementService.increaseCounter();
  }
}
