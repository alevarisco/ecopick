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
      'pattern': 'Clave debe contener al menos 6 caracteres, 1 letra mayuscula'
    },
    'confirmar_clave': {
      'required': 'Confirmar clave es requerida',
      'compare': 'Clave y confirmar clave deben coincidir'
    },
    'primer_nombre':{
      'required': 'Nombre es requerido',
      'minlength': 'Nombre debe tener al menos 2 caracteres',
      'maxlength': 'Nombre no puede tener más de 50 caracteres',
      'pattern': 'Nombre no permite caracteres especiales'
    },
    'documento_de_identificacion':{
      'required': 'Documento de identificación es requerido',
      'minlength': 'Documento de identificación debe tener al menos 8 caracteres',
      'maxlength': 'Documento de identificación no debe pasar de los 50 caracteres',
      'pattern': 'Documento de identificación debe ser un campo numérico'
    },
    'telefono': {
      'required': 'Teléfono es requerido',
      'pattern': 'Teléfono debe ser un campo numérico'
    },
    'descripcion': {
      // 'required': 'Descripción es requerida',
      'minlength': 'Descripción debe tener al menos 2 caracteres',
      'maxlength': 'Descripción no debe pasar de los 50 caracteres',
      'pattern': 'Debe ingresar una descripción de la empresa'
    }
  }

  /* Interactive Form */
  showKidsForm = false;

  es: any;


  constructor(private router: Router,
    private fb: FormBuilder,
    private registerService: RegisterService,
    private messageService: MessageService,
    private placeService: PlaceService) {

    this.generos = GENDERS;

    this.estado = true;
    this.ciudad = true;
    this.parroquia = true;

    this.placeService.getCountries().subscribe((countries) => {
      this.paises = replaceKeyWithValue(countries);
    });

    this.createForm();
  }

  ngOnInit(): void {
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
        this.registerService.usuario.email,
        [
          Validators.required,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
      ],
      clave: [this.registerService.usuario.contraseña,
        [
          Validators.required,
          // Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,40}$/)
          Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z]).{6,40}$/)
        ]
      ],
      confirmar_clave: [
        this.registerService.usuario.confirmar_contraseña,
        [
          Validators.required,
          RxwebValidators.compare({fieldName: 'clave'})
        ]
      ],
      primer_nombre: [this.registerService.usuario.nombre,
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        // Validators.pattern('^[a-zA-Z]*$')
        Validators.pattern('[ 0-9A-Za-zÑñäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ\s]+')
      ]],
      descripcion: [
        this.registerService.usuario.apellido,
        [
          // Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      documento_de_identificacion: [this.registerService.usuario.numeroIdentificacion,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$')
        ]
      ],
      // estado_civil: this.registerService.user.fkPersona.fkEdoCivil,
      
      pais: this.registerService.user.fkPersona.id_pais._id,
      estado: this.registerService.user.fkPersona.id_estado._id,
      ciudad: this.registerService.user.fkPersona.id_ciudad._id,
      parroquia: this.registerService.user.fkPersona.id_parroquia._id,
      // codigo_pais: this.registerService.user.fkPersona.codigo_pais,
      telefono: [
        this.registerService.usuario.telefono,
        [
          Validators.required,
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

  checkAll(){
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
    

    var name = this.familyForm.value.primer_nombre;

    if (name.replace(/\s/g, '').length ) {
      this.registerService.usuario.email = this.familyForm.value.correo_electronico;
      this.registerService.usuario.contraseña = this.familyForm.value.clave;
      this.registerService.usuario.confirmar_contraseña = this.familyForm.value.confirmar_clave;
      this.registerService.usuario.nombre = this.familyForm.value.primer_nombre;
      this.registerService.usuario.apellido = this.familyForm.value.descripcion;
      this.registerService.usuario.telefono = this.familyForm.value.telefono;
      this.registerService.usuario.tipo = 1;
      this.registerService.usuario.numeroIdentificacion = this.familyForm.value.documento_de_identificacion;
      
      this.registerService.user.fkPersona.id_pais._id = this.familyForm.value.pais;
      this.registerService.user.fkPersona.id_estado._id = this.familyForm.value.estado;
      this.registerService.user.fkPersona.id_ciudad._id = this.familyForm.value.ciudad;
      this.registerService.user.fkPersona.id_parroquia._id = this.familyForm.value.parroquia;

      if (this.parroquia && this.registerService.user.fkPersona.id_parroquia._id != 0){
        this.registerService.usuario.fkLugar._id = this.familyForm.value.parroquia;
      }
      else if (this.ciudad && this.registerService.user.fkPersona.id_ciudad._id != 0){
        this.registerService.usuario.fkLugar._id = this.familyForm.value.ciudad;
      }
      else if (this.estado && this.registerService.user.fkPersona.id_estado._id != 0){
        this.registerService.usuario.fkLugar._id = this.familyForm.value.estado;
      }
      else {
        this.registerService.usuario.fkLugar._id = this.familyForm.value.pais;
      }

      if (this.familyForm.valid){

          this.registerService.postValidRegistro(this.registerService.usuario).subscribe((person) =>{
          this.nextPage();
          }, errorMessage => {
            this.messageService.add({severity:'error', summary: 'Error', detail: 'El correo utilizado ya se encuentra registrado.'});
            this.checkAll();
          });
    
      }
      else{
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Hay datos inválidos o incompletos en el formulario'});
        this.checkAll();
      }
    }
    else{
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Hay datos inválidos o incompletos en el formulario'});
      this.checkAll();
    }
  }


  nextPage(): void {
    this.router.navigate(['register/contact']);
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
