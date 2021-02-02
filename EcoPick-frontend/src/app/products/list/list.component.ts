import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products: object[];

  constructor() { 
    this.products = [
      {
        name: "Madera",
        quantity: 20,
      },
      {
        name: "Aluminio",
        quantity: 50
      },
      {
        name: "Madera",
        quantity: 20,
      },
      {
        name: "Aluminio",
        quantity: 50
      },
      {
        name: "Madera",
        quantity: 20,
      },
      {
        name: "Aluminio",
        quantity: 50
      }
    ]
  }

  ngOnInit(): void {
  }

}
