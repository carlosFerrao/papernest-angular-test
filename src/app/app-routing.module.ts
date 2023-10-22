import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncreaseCounterComponent } from './increase-counter/increase-counter.component';
import { DecreaseCounterComponent } from './decrease-counter/decrease-counter.component';
import { ResetCounterComponent } from './reset-counter/reset-counter.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/up',
  },
  {
    path: 'up',
    component: IncreaseCounterComponent,
  },
  {
    path: 'down',
    component: DecreaseCounterComponent,
  },
  {
    path: 'reset',
    component: ResetCounterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
