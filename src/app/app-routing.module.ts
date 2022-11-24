import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/create', component: CreateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
