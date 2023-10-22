# PapernestAngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## How to use

1 - The application has a counter that the user can increase, decrease or reset it.

1.1 How to Increase the Counter

- Go to the "Increase Counter Page" by clicking on the navigation link and press the button to increase the counter

  1.2 How to decrease the Counter

- Go to the "Decrease Counter Page" by clicking on the navigation link and press the button to increase the counter

  1.3 How to Reset the Counter

- Go to the "Reset Counter Page" by clicking in the navigation link, select your birthdate and if you are over 18 years old, press the reset button in order to reset the counter.

## How the application Works

2: Development Structure
2.1 - There is a main counter that is an Observable who comes from a behavior subject. This observable will emit new values every time that the increase, decrease and reset counter buttons are pressed.
2.2 - There is a service to do the state management of the counter, where we can increase, decrease and reset the counter.
2.3 - The counter value is saved in the local Storage every time it changes. So we can refresh the page and get the last value again.
2.4 - The background color of the application will change if the value of the counter equals 10 or -10

3 - Routing

3.1 There are 3 main routes:

3.2 - "/up" - Who calls the increase-counter.component
3.3 - "/down" - Who calls the decrease-counter.component
3.4 - "/reset" - Who calls the reset-counter.component
