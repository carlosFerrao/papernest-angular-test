import { Component } from '@angular/core';
import { CounterStateManagementService } from './services/counter-state-management.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter$ = this.counterManagementService.counterValue;
  title = 'papernest-angular-test';

  constructor(private counterManagementService: CounterStateManagementService) {
    localStorage.setItem('counter', '0');
  }

  getColor(number: number) {
    if (number >= 10) {
      return '#e74c3c';
    } else if (number <= -10) {
      return '#27ae60';
    } else {
      return '';
    }
  }
}
