import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/userModel';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  id = ''

  user?: User;

  constructor(private userServices: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'))
    this.userServices.getUser(this.id).subscribe(res => {
      this.user = res.data
    })
  }

  delete() {
    this.userServices.deleteUser(this.id).subscribe(res => alert(`Removido com sucesso `))
  }

}

