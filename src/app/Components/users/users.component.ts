import { Component, OnInit } from '@angular/core';
import { ResponseUsers, User } from 'src/app/Models/userModel';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  Usuarios?: ResponseUsers

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.GetLista()
  }

  GetLista() {
    this.userService.getUsers().subscribe(users => this.Usuarios = users)
  }

}
