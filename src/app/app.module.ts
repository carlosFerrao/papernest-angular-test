import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncreaseCounterComponent } from './increase-counter/increase-counter.component';
import { DecreaseCounterComponent } from './decrease-counter/decrease-counter.component';
import { ResetCounterComponent } from './reset-counter/reset-counter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IncreaseCounterComponent,
    DecreaseCounterComponent,
    ResetCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
