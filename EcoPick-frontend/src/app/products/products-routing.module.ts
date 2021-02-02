import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuestGuard} from '../core/guards/guest.guard';
import {AuthorizedGuard} from '../core/guards/authorized.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublishComponent } from './publish/publish.component';
import { ListComponent } from "./list/list.component";
import { PostsListComponent } from "./posts-list/posts-list.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
   //canActivate: [GuestGuard]
  },
  {
    path: 'publish',
    component: PublishComponent,
    // canActivate: [AuthorizedGuard]
  },
  {
    path: 'explore-products',
    component: ListComponent,
    //canActivate: [GuestGuard]
  },
  {
    path: 'my-posts',
    component: PostsListComponent,
    //canActivate: [GuestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
