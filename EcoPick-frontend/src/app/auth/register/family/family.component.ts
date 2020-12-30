import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, SelectItem } from 'primeng/api';
import { GENDERS } from '../../../core/constants/gender';
import { Child } from '../../../core/classes/profile/child';

/* Form */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../../core/services/auth/register.service';
import { GeneroService } from 'src/app/core/services/profile/genero.service';
import { replaceKeyWithValue } from 'src/app/core/functions/common_functions';
import { Genero } from 'src/app/core/classes/profile/genero';

import { CIVIL_STATUSES } from '../../../core/constants/civil_status';

import { RxwebValidators } from '@rxweb/reactive-form-validators'
import { EdocivilService } from '../../../core/services/profile/edocivil.service';
import { from } from 'rxjs';
import { errorMonitor } from 'events';
import { PlaceService } from 'src/app/core/services/profile/place.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss'],
  providers: [MessageService]

})
export class FamilyComponent implements OnInit {

  generos: SelectItem[];
  estados_civiles: SelectItem[];

  paises: SelectItem[];
  estados: SelectItem[];
  ciudades: SelectItem[];
  parroquias: SelectItem[];
  codigos: SelectItem[];

  estado: boolean;
  ciudad: boolean;
  parroquia: boolean;

  /* Form */
  familyForm: FormGroup;
  @ViewChild('fform') familyFormDirective;

  formErrors = {
    'correo_electronico': '',
    'clave': '',
    'confirmar_clave': '',
    'primer_nombre': '',
    'documento_de_identificacion': '',
    'telefono': '',
    'descripcion': ''
  }

  validationMessages = {
    'correo_electronico': {
      'required': 'Correo electrónico es requerido',
      'pattern': 'Correo electronico debe tener un formato válido'
    },
    'clave': {
      'required': 'Clave es requerida',
      'pattern': 'Clave debe contener al menos 8 caracteres, 1 letra, 1 numero y 1 caracter especial'
    },
    'confirmar_clave': {
      'required': 'Confirmar clave es requerida',
      'compare': 'Clave y confirmar clave deben coincidir'
    },
    'primer_nombre':{
      'required': 'Nombre de empresa es requerido',
      'minlength': 'Nombre de empresa debe tener al menos 2 caracteres',
      'maxlength': 'Nombre de empresa no puede tener más de 50 caracteres'
    },
    'documento_de_identificacion':{
      'required': 'Documento de identificación es requerido',
      'minlength': 'Documento de identificación debe tener al menos 8 caracteres',
      'maxlength': 'Documento de identificación no debe pasar de los 50 caracteres'
    },
    'telefono': {
      'pattern': 'Teléfono debe ser un campo numérico'
    },
    'descripcion': {
      'pattern': 'Debe ingresar una descripción de la empresa'
    }
  }

  /* Interactive Form */
  showKidsForm = false;

  es: any;


  constructor(private router: Router, 
    private registerService: RegisterService,
    private generoService: GeneroService, 
    private fb: FormBuilder,
    private messageService: MessageService,
    private placeService: PlaceService,
    private edocivilService: EdocivilService) {
    // this.generos = GENDERS;

    // this.generoService.getGeneros().subscribe((genres) => {
    //   this.generos = replaceKeyWithValue(genres);
    // });
    this.generos = GENDERS;
    // this.estados_civiles = CIVIL_STATUSES;
    this.edocivilService.getEdosCiviles().subscribe((edosciviles) => {
      this.estados_civiles = replaceKeyWithValue(edosciviles);
    });

    this.estado = true;
    this.ciudad = true;
    this.parroquia = true;

    this.placeService.getCountries().subscribe((countries) => {
      this.paises = replaceKeyWithValue(countries);
    });

    this.createForm();
  }

  ngOnInit(): void {
    if (this.registerService.user.fkPersona.hijos)
      // this.hijos = this.registerService.user.fkPersona.hijos;

    this.es = {
        firstDayOfWeek: 1,
        dayNames: [ "Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado" ],
        dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
        dayNamesMin: [ "D","L","M","X","J","V","S" ],
        monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
        monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
        today: 'Hoy',
        clear: 'Borrar'
    }
  }

  createForm(){
    this.familyForm = this.fb.group({
      correo_electronico: [
        this.registerService.user.email,
        [
          Validators.required,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
      ],
      clave: [this.registerService.user.password,
        [
          Validators.required,
          Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,40}$/)
        ]
      ],
      confirmar_clave: [
        this.registerService.user.confirmar_clave,
        [
          Validators.required,
          RxwebValidators.compare({fieldName: 'clave'})
        ]
      ],
      primer_nombre: [this.registerService.user.fkPersona.primerNombre,
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      primer_apellido: [
        this.registerService.user.fkPersona.primerApellido,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      documento_de_identificacion: [this.registerService.user.fkPersona.documentoIdentidad,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50)
        ]
      ],

      genero: this.registerService.user.fkPersona.fkGenero,
      estado_civil: this.registerService.user.fkPersona.fkEdoCivil,
      fecha_de_nacimiento: this.registerService.user.fkPersona.fechaNacimiento,

      pais: this.registerService.user.fkPersona.id_pais._id,
      estado: this.registerService.user.fkPersona.id_estado._id,
      ciudad: this.registerService.user.fkPersona.id_ciudad._id,
      parroquia: this.registerService.user.fkPersona.id_parroquia._id,
      // codigo_pais: this.registerService.user.fkPersona.codigo_pais,
      telefono: [
        this.registerService.user.fkPersona.telefono.numero,
        [
          Validators.pattern('^[0-9]*$')
        ]
      ],
    });

    this.familyForm.valueChanges
    .subscribe(data => {
      this.onValueChange(data);
    });

  }

  onValueChange(data?: any){
    /* If form hasn't been created */
    if (!this.familyForm){
      return;
    }

    const form = this.familyForm;
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
    this.registerService.user.email = this.familyForm.value.correo_electronico;
    this.registerService.user.password = this.familyForm.value.clave;
    this.registerService.user.confirmar_clave = this.familyForm.value.confirmar_clave;
    this.registerService.user.fkPersona.primerNombre = this.familyForm.value.primer_nombre;
    this.registerService.user.fkPersona.primerApellido = this.familyForm.value.primer_apellido;
    this.registerService.user.fkPersona.documentoIdentidad = this.familyForm.value.documento_de_identificacion;
    this.registerService.user.fkPersona.fkGenero._id = this.familyForm.value.genero;
    this.registerService.user.fkPersona.fkEdoCivil._id = this.familyForm.value.estado_civil;
    this.registerService.user.fkPersona.fechaNacimiento = this.familyForm.value.fecha_de_nacimiento;

    if (this.familyForm.valid){
      console.log('epa, achantate...');

      this.registerService.postValidRegister().subscribe((person) =>{
        this.nextPage();
      }, errorMessage => {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'El correo utilizado ya se encuentra registrado.'});
      });

      // if (this.registerService.postValidRegister()){
      //   this.nextPage();
      // }
      // else{
      // }

    }
    else{
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Hay datos inválidos o incompletos en el formulario'});
    }
  }


  // previousPage(): void {
  //   this.router.navigate(['register/contact'])
  // }

  nextPage(): void {
    this.router.navigate(['register/status']);
  }

  getStates(event){
    this.ciudades = [];
    this.parroquias = [];
    this.placeService.getStates(event.value).subscribe((states) => {
      if (states.length){
        this.estado = true;
        this.estados = replaceKeyWithValue(states);
      }
      else{
        this.estado = false;
        this.ciudad = false;
        this.parroquia = false;
      }
    })
  }

  getCities(event){
    this.parroquias = [];
    this.placeService.getCities(event.value).subscribe((cities) => {
      if (cities.length){
        this.ciudad = true;
        this.ciudades = replaceKeyWithValue(cities);
      }
      else{
        this.ciudad = false;
        this.parroquia = false;
      }
    })
  }

  getCounties(event){
    this.placeService.getCounties(event.value).subscribe((counties) => {
      if (counties.length){
        this.parroquia = true;
        this.parroquias = replaceKeyWithValue(counties);
      }
      else{
        this.parroquia = false;
      }
    })
  }

}
