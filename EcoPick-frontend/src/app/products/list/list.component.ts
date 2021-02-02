import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product/product.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: object[];

  constructor(public productSevice: ProductService) {

    // Eliminar estos datos de prueba y descomentar el método ngOnInit() de abajo
    this.products = [
      {
        name: "Madera",
        quantity: 20
      },
      {
        name: "Metal",
        quantity: 10
      },
      {
        name: "Plástico",
        quantity: 15
      }
    ]
  }

  ngOnInit(): void {
    // this.productSevice.getProducts().subscribe(data => {
    //   this.products = data;
    // })
  }


}
