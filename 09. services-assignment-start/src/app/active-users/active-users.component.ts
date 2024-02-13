import { Component, OnInit} from '@angular/core';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  onSetToInact(id: number) {
    this.usersService.onSetToInactive(id);
    this.usersService.userInactivated.emit(id);
  }
}
