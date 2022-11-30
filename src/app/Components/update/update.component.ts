import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from 'src/app/Models/userModel';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id!: string

  request!: RequestUpdate

  constructor(private userServices: UsersService, private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.id = String(this.route.snapshot.paramMap.get('id'))
    this.userServices.getUser(this.id).subscribe(res => this.request = {
      name: `${res.data.first_name} ${res.data.last_name}`,
      job: ''
    })


  }

  atualizar() {
    this.userServices.updateUser(this.id, this.request!).subscribe(res => {
      alert(`name: ${res.name} job: ${res.job}`)
    })
  }

}
