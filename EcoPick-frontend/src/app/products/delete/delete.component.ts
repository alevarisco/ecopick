import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../core/services/products/products.service'
import { Router, ActivatedRoute } from '@angular/router';
import {Product} from '../../core/classes/product/product'


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  id: number;
  product: Product; 

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (!this.route.snapshot.queryParamMap.get('type')) {
      this.router.navigate(['404']);
    }
    else{
      this.id = parseInt(this.route.snapshot.queryParamMap.get('type'), 10);

    
      this.productService.getProducto(this.id).subscribe((res) => {
        // this.userService.getPerson(this.current_user).subscribe((persona) => {
            this.product = res.objeto as Product;
      })


   }
  }

  ngOnInit(): void {
  }

  delete(): void{ 
    this.productService.deleteProducto(this.product, this.id).subscribe((order) =>{
      this.nextPage();
    })
  }


nextPage(): void {
    this.router.navigate(['/my-posts']);
  }
}
