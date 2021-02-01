import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem} from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {

  isNatural: boolean;
  isEmpresarial: boolean;

  constructor(private router: Router,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.isNatural = false;
  }

  // showError() {
  //   this.messageService.add({severity:'error', summary: 'Error', detail: 'Faltan campos requeridos'});
  // }

  sendPublicaciones(): void{
    // this.router.navigate(['']);
  }

  sendMisPublicacioness(): void{
    // this.router.navigate(['']);
  }

  sendExplorarProd(): void{
    // this.router.navigate(['']);
  }

  sendMisPedidos(): void{
    // this.router.navigate(['']);
  }
}
