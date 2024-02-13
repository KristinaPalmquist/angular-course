import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  users = [];

  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
    // anropas en gång, ögonblicksbild
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    // anropas när parameter ändras, behövs bara om man kan komma hit från samma komponent
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }

  ngOnDestroy() {
    // anropas när komponenten förstörs
    // Angular hanterar i detta fall, men krävs om du skapar egna subscribables
    this.paramsSubscription.unsubscribe();
  }
}
