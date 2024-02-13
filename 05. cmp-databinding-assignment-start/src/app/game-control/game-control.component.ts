import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css',
})
export class GameControlComponent implements OnDestroy {
  count: number = 0;
  odds = [];
  evens = [];
  numbers = [];

  @Output() intervalFired = new EventEmitter<{
    count: number;
    isEven: boolean;
  }>();
  ref: any;
  gameRunning = false;

  onStart() {
    this.gameRunning = true;
    console.log('Game started');
    this.ref = setInterval(() => {
      this.count++;
      this.intervalFired.emit({
        count: this.count,
        isEven: this.count % 2 === 0,
      });
    }, 1000);
  }

  onStop() {
    this.gameRunning = false;
    console.log('Game stopped');
    clearInterval(this.ref);
  }

  ngOnDestroy() {
    clearInterval(this.ref);
  }
}
