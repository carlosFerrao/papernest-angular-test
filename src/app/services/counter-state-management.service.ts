import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterStateManagementService implements OnDestroy {
  counterSubject$ = new BehaviorSubject(
    parseInt(localStorage.getItem('counter')!)
  );
  counterSum = 1;
  counterTick = 0;
  counterValue = this.counterSubject$.asObservable();

  constructor() {}

  ngOnDestroy(): void {
    this.counterValue.subscribe((val) => {
      localStorage.setItem('counter', val.toString());
    });
  }

  increaseCounter() {
    this.counterValue.pipe(take(1)).subscribe((val) => {
      this.counterSubject$.next(val + this.counterSum);
      this.counterTick++;
      localStorage.setItem('counter', (val + this.counterSum).toString());
      this.checkNumberOfTimesClicked(this.counterTick);
    });
  }

  decreaseCounter() {
    this.counterValue.pipe(take(1)).subscribe((val) => {
      this.counterSubject$.next(val - this.counterSum);
      this.counterTick++;
      localStorage.setItem('counter', (val - this.counterSum).toString());
      this.checkNumberOfTimesClicked(this.counterTick);
    });
  }

  resetCounter() {
    this.counterValue.pipe(take(1)).subscribe(() => {
      this.counterSubject$.next(0);
      this.counterTick = 0;
      this.counterSum = 1;
      localStorage.setItem('counter', '0');
    });
  }

  checkNumberOfTimesClicked(val: number) {
    if (val % 30 == 0) {
      this.counterSum++;
    }
  }
}
