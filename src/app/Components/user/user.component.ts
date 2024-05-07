import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] | any;
  viewMode: 'grid' | 'list' = 'grid';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  
    const usersData = {
      "user1": {
        "mail": "shalini@example.com",
        "name": "Shalini",
        "disabled": false,
        "roles": ["Inventory View", "Design"]
      },
      "user2": {
        "mail": "shima@example.com",
        "name": "Shima",
        "disabled": true,
        "roles": ["Discount"]
      },
      "user3": {
        "mail": "rishabh@example.com",
        "name": "Rishabh",
        "disabled": true,
        "roles": ["Admin"]
      }
    };

    this.userService.uploadUsers(usersData);

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  toggleDisabledStatus(user: User) {
    user.disabled = !user.disabled;
    this.userService.updateUser(user);
  }

  toggleView(mode: 'grid' | 'list') {
    this.viewMode = mode;
}
}
