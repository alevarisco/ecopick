import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Recovery } from '../../../core/classes/auth/recovery';

/* Form */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecoveryService } from '../../../core/services/auth/recovery.service';
import { ReorderableColumn } from 'primeng/table';


@Component({
  selector: 'app-securityquestion',
  templateUrl: './securityquestion.component.html',
  styleUrls: ['./securityquestion.component.scss'],
  providers: [MessageService]
})
export class SecurityquestionComponent implements OnInit {

   /* Form */
   recoveryForm: FormGroup;
   @ViewChild('aform') recoveryFormDirective;

   recovery: Recovery;
   pregunta: String;
   correo: String;

   formErrors = {
     'respuesta': ''
   };

   validationMessages = {
     'respuesta': {
       'required': 'Correo electrónico es requerido',
       'pattern': 'Correo electronico debe tener un formato válido'
     }
    };

    es: any;

    constructor(private Activatedroute: ActivatedRoute,
      private router: Router,
      private fb: FormBuilder,
      private recoveryService: RecoveryService,
      private messageService: MessageService) {
      if ((this.Activatedroute.snapshot.queryParamMap.get('pregunta') || 0) === 0) {
        this.router.navigate(['404']);
      }
      else{
        this.pregunta = this.Activatedroute.snapshot.queryParamMap.get('pregunta');
        this.correo = this.Activatedroute.snapshot.queryParamMap.get('correo');
        this.createForm();
      }
    }


  ngOnInit(): void {
  }

  createForm(){
    this.recoveryForm = this.fb.group({
      respuesta: this.recoveryService.respuesta
    });

    this.recoveryForm.valueChanges
    .subscribe(data => {
      this.onValueChange(data);
    });
  }

  onValueChange(data?: any){
    /* If form hasn't been created */
    if (!this.recoveryForm){
      return;
    }

    const form = this.recoveryForm;
    for (const field in this.formErrors){
      if (this.formErrors.hasOwnProperty(field)){
        // clear previous error message if any
        this.formErrors[field] = '';
        const control = form.get(field);

        // if field is modified by user
        if (control && control.dirty && !control.valid){
          const messages = this.validationMessages[field];

          // check if i'm adding the error message to the field
          for (const key in control.errors){
            if (control.errors.hasOwnProperty(key)){
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit(){
    this.recovery = new Recovery();
    this.recovery.correo = this.correo;
    this.recovery.respuesta = this.recoveryForm.value.respuesta;
    this.recoveryService.validateAnswer(this.recovery)
      .subscribe(question => {
        if (question._id == 0){
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Respuesta incorrecta.'});
      }
      else{
        this.messageService.add({severity: 'success', summary: 'Exito', detail: 'Respuesta correcta.'});
        this.nextPage(this.correo);
      }

      })

  }

  nextPage(correo): void {
    this.router.navigate(['/change'], { queryParams: { correo: correo} })
  }

}
