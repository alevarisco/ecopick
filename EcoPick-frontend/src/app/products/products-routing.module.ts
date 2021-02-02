import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuestGuard} from '../core/guards/guest.guard';
import {AuthorizedGuard} from '../core/guards/authorized.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [GuestGuard]
    // canActivate: [AuthorizedGuard]
  },
  {
    path: 'products-published',
    component: ListComponent,
    canActivate: [GuestGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
