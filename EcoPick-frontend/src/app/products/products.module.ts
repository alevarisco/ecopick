import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from '../core/services/product/product.service'

  @NgModule({
    declarations: [
      DashboardComponent,
      ListComponent,
      ProductCardComponent
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
