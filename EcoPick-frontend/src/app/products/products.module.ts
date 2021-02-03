import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './products-routing.module';
import { PublishComponent } from './publish/publish.component';

import { ListComponent } from './list/list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from '../core/services/product/product.service';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ModifyComponent } from './modify/modify.component';
import { DeleteComponent } from './delete/delete.component'

  @NgModule({
    declarations: [
      DashboardComponent,
      PublishComponent,
      ListComponent,
      ProductCardComponent,
      PostsListComponent,
      ModifyComponent,
      DeleteComponent
    ],
    imports: [
      CommonModule,
      SharedModule,
      ProductRoutingModule
    ],
    providers: [
      ProductService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
export class ProductsModule { }
