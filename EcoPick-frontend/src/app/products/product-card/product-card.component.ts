import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() productName: string;
  @Input() productQuantity: number;
  @Input() productDesc: string;
  @Input() listType: number;

  /* listType:
        0 - explorar productos
        1 - mis publicaciones
        2 - mis pedidos
  */ 

  constructor() { }

  ngOnInit(): void {
  }

  confirmation(){
    alert("Esta seguro?")
  }

}
