import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    // this.items = [
    //   {
    //     label: 'Tipo de usuario',
    //     routerLink: 'status'
    //   },
    //   {
    //     label: 'Personal',
    //     routerLink: 'personal'
    //   },
    //   // {
    //   //   label: 'Contacto',
    //   //   routerLink: 'contact'
    //   // }
    //   // {
    //   //   label: 'Familia',
    //   //   routerLink: 'family'
    //   // }
    // ];
  }

}
