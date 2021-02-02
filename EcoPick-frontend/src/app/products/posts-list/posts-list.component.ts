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

  constructor(public productService: ProductService, public sessionService: SessionService) {

    this.userId = sessionService.getCurrentUser();
    this.userType = sessionService.getCurrentSession().tipo;

    // Eliminar estos datos de prueba y descomentar el método ngOnInit() de abajo
    // // this.products = [
    //   {
    //     name: "Madera",
    //     desc: "Roble resistente",
    //     quantity: 20
    //   },
    //   {
    //     name: "Metal",
    //     desc: "Inoxidable",
    //     quantity: 10
    //   },
    //   {
    //     name: "Plástico",
    //     desc: "Necesita reutilizarse",
    //     quantity: 15
    //   }
    // ]
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
