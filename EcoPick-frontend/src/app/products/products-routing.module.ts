import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuestGuard} from '../core/guards/guest.guard';
import {AuthorizedGuard} from '../core/guards/authorized.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [GuestGuard]
    canActivate: [AuthorizedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
