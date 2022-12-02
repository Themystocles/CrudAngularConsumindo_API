import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { UpdateComponent } from './Components/update/update.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'users/create', component: CreateUserComponent },
  { path: 'users/update/:id', component: UpdateComponent },
  { path: 'users/delete/:id', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
