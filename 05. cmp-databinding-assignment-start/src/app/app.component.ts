import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers = [];

  onIntervalFired(number) {
    const currentNumber = number.count;
    if (currentNumber % 2 === 0) {
      number.isEven = true;
    } else {
      number.isEven = false;
    }
    this.numbers.push(number);
  }
}
