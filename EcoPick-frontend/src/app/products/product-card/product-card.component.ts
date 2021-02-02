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

  constructor() { }

  ngOnInit(): void {
  }

  confirmation(){
    alert("Esta seguro?")
  }

}
