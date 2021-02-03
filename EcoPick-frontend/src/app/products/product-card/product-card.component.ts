import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/classes/product/product';
import { SessionService } from 'src/app/core/services/auth/session.service';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() _id: number;
  @Input() productName: string;
  @Input() productQuantity: number;
  @Input() productDesc: string;
  @Input() listType: number;

  /* listType:
        0 - explorar productos
        1 - mis publicaciones
        2 - mis pedidos
  */ 

  constructor(private router: Router,
    private productService: ProductsService,
    private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  confirmation(): boolean{
    return confirm("¿Esta seguro?")
  }

  
  sendModificar(product): void{
    this.router.navigate(['/modify'], { queryParams: { type: product }});
 }

 sendDelete(product): void{
  this.router.navigate(['/delete'], { queryParams: { type: product }});
}

  producto: Product = {
    fkReclama: 0,
    status: 1,
  };

  sendReclamar(product): void{
    console.log(product);
    this.producto.fkReclama = this.sessionService.getCurrentSession()._id; 
    console.log(this.producto);
    if (this.confirmation()){
      this.productService.putEditarProducto(this.producto, product).subscribe((response) =>{
        alert(response.mensaje)
        // this.nextPage();    
      });
    }
    // this.router.navigate(['/dashboard'], { queryParams: { type: product }});
  }
}
