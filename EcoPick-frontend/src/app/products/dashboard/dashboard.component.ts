import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem} from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/core/services/auth/session.service';


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
    private Activatedroute: ActivatedRoute,
    private sessionService: SessionService,
    private messageService: MessageService) {

      if (this.sessionService.getCurrentSession().tipo == 0){
        this.isNatural = true;
      }
      else{
        this.isNatural = false;
      }

     }

  ngOnInit(): void {
  }

  // showError() {
  //   this.messageService.add({severity:'error', summary: 'Error', detail: 'Faltan campos requeridos'});
  // }

  sendPublicaciones(): void{
     this.router.navigate(['/publish']);
  }

  sendMisPublicacioness(): void{
    this.router.navigate(['/my-posts']);
  }

  sendExplorarProd(): void{
    this.router.navigate(['/explore-products']);
  }

  sendMisPedidos(): void{
    // this.router.navigate(['']);
  }
}
