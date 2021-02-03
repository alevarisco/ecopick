import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  confirmation(){
    alert("Esta seguro?")
  }

  
  sendModificar(product): void{
    console.log("ACA: " + product);
    this.router.navigate(['/modify'], { queryParams: { type: product }});
 }

}
