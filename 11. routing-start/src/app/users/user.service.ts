import { Injectable, OnInit } from "@angular/core";


@Injectable()
export class UserService implements OnInit {
  users = [
    {
      id: 1,
      name: 'Max',
    },
    {
      id: 2,
      name: 'Anna',
    },
    {
      id: 3,
      name: 'Chris',
    },
  ];
  constructor() { }

 ngOnInit(): void {

 }

 getUsers() {
    return this.users;
  }
}
