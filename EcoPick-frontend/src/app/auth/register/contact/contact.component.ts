import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';

/* Form */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../core/services/auth/register.service';
import { PlaceService } from '../../../core/services/profile/place.service';
// import { PhoneService } from '../../../core/services/profile/phone.service';
import { replaceKeyWithValue, replacePreguntasWithValue } from 'src/app/core/functions/common_functions';
import { RecoveryService } from 'src/app/core/services/auth/recovery.service';
import { User } from 'src/app/core/classes/profile/user';
import { Person } from 'src/app/core/classes/profile/person';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  // paises: SelectItem[];
  // estados: SelectItem[];
  // ciudades: SelectItem[];
  // parroquias: SelectItem[];
  preguntas: SelectItem[];

  // estado: boolean;
  // ciudad: boolean;
  // parroquia: boolean;

  /* Form */
  contactForm: FormGroup;
  @ViewChild('cform') contactFormDirective;

  formErrors = {
    'respuesta': ''
  };

  validationMessages = {
    'respuesta': {
      'required': 'Respuesta no puede estar vacia.',
      'pattern': 'Respuesta solo permite caracteres alfabéticos'
    }
  }

  constructor(private router: Router,
    private registerService: RegisterService,
    private recoveryService: RecoveryService,
    private messageService: MessageService,
    // private phoneService: PhoneService,
    private fb: FormBuilder) {

    // this.estado = true;
    // this.ciudad = true;
    // this.parroquia = true;

    this.recoveryService.getPreguntas().subscribe((questions) => {
      this.preguntas = replacePreguntasWithValue(questions);
    });

    // this.phoneService.getCodes().subscribe((codes) => {
    //   this.codigos = codes;
    // })

    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.contactForm = this.fb.group({
      pregunta: this.registerService.usuario.fkPregunta._id,
      respuesta: [
        this.registerService.usuario.respuestaSeguridad,
        [
          Validators.required,
          Validators.pattern(/[A-Za-z][A-Za-z0-9]*$/)
        ],
      ],
    });

    this.contactForm.valueChanges
    .subscribe(data => {
      this.onValueChange(data);
    });
  }

  onValueChange(data?: any){
    /* If form hasn't been created */
    if (!this.contactForm){
      return;
    }

    const form = this.contactForm;
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
    
    this.registerService.usuario.fkPregunta._id = this.contactForm.value.pregunta;
    this.registerService.usuario.respuestaSeguridad = this.contactForm.value.respuesta;

    console.log(this.registerService.usuario)

    if (this.contactForm.valid){

      this.registerService.postRegistrarUsuario(this.registerService.usuario)
        .subscribe(person => {
          console.log(person);
          this.router.navigate(['/login']);
          this.registerService.cleanUsuario();
          // this.registerService.usuario = new User;
          // this.registerService.user.fkPersona.id_pais._id = 0;
          // this.registerService.user.fkPersona.id_estado._id = 0;
          // this.registerService.user.fkPersona.id_ciudad._id = 0;
          // this.registerService.user.fkPersona.id_parroquia._id = 0;
          this.messageService.add({severity:'success', summary: 'Éxito', detail: 'Registro completado satisfactoriamente.'});
        },
        errorMessage => {
          this.messageService.add({severity:'error', summary: 'Error', detail: errorMessage});
        })
    }
    else{
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Hubo datos inválidos o incompletos en el formulario'});
    }

  }


}
