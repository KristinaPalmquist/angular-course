import {EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  userActivated = new EventEmitter();
  userInactivated = new EventEmitter();

  constructor(private counterService: CounterService) { }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }
}
