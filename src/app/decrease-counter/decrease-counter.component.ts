import { Component } from '@angular/core';
import { CounterStateManagementService } from '../services/counter-state-management.service';

@Component({
  selector: 'app-decrease-counter',
  templateUrl: './decrease-counter.component.html',
  styleUrls: ['./decrease-counter.component.scss'],
})
export class DecreaseCounterComponent {
  constructor(
    private counterManagementService: CounterStateManagementService
  ) {}

  decreaseValue() {
    this.counterManagementService.decreaseCounter();
  }
}
