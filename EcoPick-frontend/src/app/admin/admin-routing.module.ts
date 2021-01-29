import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { AuthorizedGuard } from '../core/guards/authorized.guard';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [

    /* USERS */
    {
      path: 'users',
      component: UsersComponent,
      canActivate: [AuthorizedGuard, AdminGuard]
    },
    {
      path: 'users/add',
      component: AddUserComponent,
      canActivate: [AuthorizedGuard, AdminGuard]
    },
    {
      path: 'users/edit',
      component: EditUserComponent,
      canActivate: [AuthorizedGuard, AdminGuard]
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
