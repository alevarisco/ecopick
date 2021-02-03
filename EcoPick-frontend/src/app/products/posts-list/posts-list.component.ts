import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product/product.service';
import { SessionService } from '../../core/services/auth/session.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  products: object[];
  userId: number;
  userType: number;
  empty: boolean;
  isNatural: boolean;

  constructor(public productService: ProductService, public sessionService: SessionService) {


    if (this.sessionService.getCurrentSession().tipo == 0){
      this.isNatural = true;
    }
    else{
      this.isNatural = false;
    }


    this.userId = sessionService.getCurrentUser();
    this.userType = sessionService.getCurrentSession().tipo;
  }

  ngOnInit(): void {
    this.productService.getProductsById(this.userId, this.userType).subscribe(data => {
      this.products = data.objeto;
      if (this.products.length == 0) {
        this.empty = true;
      }
      else {
        this.empty = false;
      }
     
   })
  }

}
