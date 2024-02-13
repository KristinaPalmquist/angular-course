import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService],
})
export class UsersComponent {
  users = [ {
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
  },];

  constructor() {}

  ngOnInit(): void {
    // this.users = this.userService.getUsers();
  }
}
