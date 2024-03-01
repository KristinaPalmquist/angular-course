import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log('counter', this.counter());
    });
  }
  increment() {
    // this.counter.set(21)
    // this.counter.set(this.counter()+1)
    this.counter.update((oldCounter: number) => oldCounter + 1);
    // this.counter.mutate((oldCounter: number) => oldCounter + 1);
    // this.actions.push('INCREMENT');
    this.actions.update((oldActions: string[]) => [...oldActions, 'INCREMENT']);

  }

  decrement() {
    // this.counter.set(0)
    // this.counter.set(this.counter()-1)
    this.counter.update((oldCounter: number) => oldCounter - 1)
    // this.counter.mutate((oldCounter: number) => oldCounter - 1);
    // this.actions.push('DECREMENT');
  this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
