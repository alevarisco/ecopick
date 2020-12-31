import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { Person } from '../core/classes/profile/person';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { GENDERS } from '../core/constants/gender';
import { CIVIL_STATUSES } from '../core/constants/civil_status';
import { Device, DEVICES } from '../core/constants/device';
import { Rol } from '../core/classes/profile/rol';
import { STUDY_STATES } from '../core/constants/study_states'; // Se usara NO borrar
import { SOCIAL_STATUSES } from '../core/constants/social_status';
import { SCHEDULES } from '../core/constants/schedule';
import { ACADEMICS } from '../core/constants/academics';
import { ACCOUNT_XTATUS } from 'src/app/core/constants/account_status';
import { RolService } from 'src/app/core/services/profile/rol.service';
import { GeneroService } from 'src/app/core/services/profile/genero.service';
import { EdocivilService } from 'src/app/core/services/profile/edocivil.service';
import { DeviceService } from 'src/app/core/services/profile/device.service';
import { DisponibilidadService } from 'src/app/core/services/profile/disponibilidad.service';
import { NivelAcademicoService } from 'src/app/core/services/profile/nivel-academico.service';
import { persondata } from 'src/app/core/classes/profile/persondata';
import { OcupacionService } from 'src/app/core/services/profile/ocupacion.service';
import { Place } from 'src/app/core/classes/profile/place';
import { Genero } from 'src/app/core/classes/profile/genero';
import { EdoCivil } from 'src/app/core/classes/profile/edocivil';
import { Disponibilidad } from 'src/app/core/classes/profile/disponibilidad';
import { telefono } from 'src/app/core/classes/profile/telefono';
import { NgxSpinnerService } from "ngx-spinner";

/* Form */
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../core/services/auth/session.service';
import { UserService } from '../core/services/admin/user.service';
import { Child } from '../core/classes/profile/child';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from '../core/services/profile/place.service';
import { PhoneService } from '../core/services/profile/phone.service';
import { replaceDateWithValue, replaceKeyWithValue } from '../core/functions/common_functions';
import { User } from '../core/classes/profile/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {
  generos: SelectItem[];
  fecha_nacimiento: Date;
  persona: User;
  dataPersona: boolean = false;
  loading: boolean = false;
  personErrorMessage: string;
  selectedGenreValue: number;
  
  es: any;
  
  paises: SelectItem[];
  estados: SelectItem[];
  ciudades: SelectItem[];
  parroquias: SelectItem[];
  codigos: SelectItem[];
  showClaveForm = false;
  sent_form: boolean = false;
  current_user: number;
  estado: boolean;
  ciudad: boolean;
  parroquia: boolean;

  dir_bella: String;

  /* Form */
  profileForm: FormGroup;
  @ViewChild('pform') profileFormDirective;
  formErrors = {
    'correo_electronico': '',
    'clave': '',
    'confirmar_clave': '',
    'primer_nombre': '',
    'primer_apellido': '',
    'documento_de_identificacion': '',
    'genero': '',
    'fecha_nacimiento': '',
    'pais': '',
    'ciudad': '',
    'estado': '',
    'parroquia': '',
    'telefono': '',
    'descripcion': ''
  };


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
      'required': 'Primer nombre es requerido',
      'minlength': 'Primer nombre debe tener al menos 2 caracteres',
      'maxlength': 'Primer nombre no puede tener más de 50 caracteres'
    },
    'primer_apellido':{
      'required': 'Primer apellido es requerido',
      'minlength': 'Primer apellido debe tener al menos 2 caracteres',
      'maxlength': 'Primer apellido no puede tener más de 50 caracteres'
    },
    'documento_de_identificacion':{
      'required': 'Documento de identificación es requerido',
      'minlength': 'Documento de identificación debe tener al menos 8 caracteres',
      'maxlength': 'Documento de identificación no debe pasar de los 50 caracteres'
    },
    'genero': {
      'required': 'Genero es requerido',
    },
    'fecha_nacimiento': {
      'required': 'Fecha de nacimiento es requerido',
    },
    'pais': {
      'required': 'Pais es requerido',
    },
    'ciudad': {
      'required': 'Ciudad es requerido',
    },
    'estado': {
      'required': 'Estado es requerido',
    },
    'parroquia': {
      'required': 'Parroquia es requerido',
    },
    'telefono': {
      'required': 'Teléfono es requerido',
      'pattern': 'Teléfono debe ser un campo numérico',
    },
    'descripcion': {
      'required': 'Ocupación es requerido',
    }
  };


 

  constructor(private Activatedroute:ActivatedRoute,
    private router:Router,
    private messageService: MessageService,
    private userService: UserService,
    // private rolService: RolService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private placeService: PlaceService,
    private phoneService: PhoneService,
    private generoService: GeneroService,
    private deviceService: DeviceService,
    private sessionService: SessionService
    ) {

      this.dir_bella = "";

      this.generos = GENDERS;
     
      this.placeService.getCountries().subscribe((countries) => {
        this.paises = replaceKeyWithValue(countries);
      });

        this.spinner.show();
        this.loading = true;
        console.log(this.sessionService.getCurrentSession());
        // this.current_user = parseInt(this.Activatedroute.snapshot.queryParamMap.get('pid'));
        this.userService.getPersona(this.sessionService.getCurrentSession()._id).subscribe((persona) => {
        // this.userService.getPerson(this.current_user).subscribe((persona) => {
            this.persona = persona;

            console.log(this.persona);
            if (this.persona){
              this.loading = false;
                this.dataPersona = true;
                this.persona.id_pais = new Place();
                this.persona.id_estado = new Place();
                this.persona.id_ciudad = new Place();
                this.persona.id_parroquia = new Place();
                this.manageLugar(persona.fkLugar);
              // this.selectedGenreValue = persona.fkPersona.fkGenero.value;

                this.parseDireccion(this.persona.fkLugar);
                this.fecha_nacimiento = new Date(persona.fechaNacimiento);  

              
              this.createForm();
              this.spinner.hide();
            }
            else {
              this.loading = false;
              this.spinner.hide();
              this.router.navigate(['404']);
            }
        });
      
  }

  ngOnInit(): void {
    this.spinner.show();
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }

  }

  createForm() {
    this.profileForm = this.fb.group({
      correo_electronico: [
        this.persona.email,
        [
          Validators.required,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
      ],
      clave: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{8,40}$/)
        ]
      ],
      confirmar_clave: [
        '',
        [
          Validators.required,
          RxwebValidators.compare({fieldName: 'clave'})
        ]
      ],
      primer_nombre: [
        this.persona.nombre,
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      primer_apellido: [
        this.persona.apellido,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      documento_de_identificacion: [
        this.persona.numeroIdentificacion,
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50)
        ]
      ],
      genero: this.persona.genero,
      fecha_de_nacimiento: this.persona.fechaNacimiento,
      pais: this.persona.id_pais._id,
      estado: this.persona.id_estado._id,
      ciudad: this.persona.id_ciudad._id,
      parroquia: this.persona.id_parroquia._id,
      // codigo_pais: this.persona.fkPersona.codigo_pais,
      // rol: this.persona.fkRol._id,
      telefono: [
        this.persona.telefono,
        [
          Validators.pattern('^[0-9]*$')
        ]
      ],
    });


    this.profileForm.valueChanges
    .subscribe(data => {
      this.onValueChange(data);
    });
  }

  
  onValueChange(data?: any){
    /* If form hasn't been created */
    if (!this.profileForm){
      return;
    }

    const form = this.profileForm;
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

  

  showChangeClaveForm(){
    this.showClaveForm = true;
  }

  hideChangeClaveForm(){
    this.showClaveForm = false;
  }


  generochild = new Genero();

  
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

  showError() {
    this.messageService.add({severity:'error', summary: 'Error', detail: 'Faltan campos requeridos'});
  }

  manageLugar(lugar: Place): void{
    // SI ES PAIS NOS DETENEMOS
    if (lugar.tipo == 0){

      this.persona.id_pais = lugar;
      this.placeService.getStates(this.persona.id_pais._id).subscribe((states) => {
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
    else{

      switch(lugar.tipo){

        case 1:
          this.persona.id_estado = lugar;
          this.estado = true;
          this.placeService.getCities(this.persona.id_estado._id).subscribe((cities) => {
            if (cities.length){
              this.ciudad = true;
              this.ciudades = replaceKeyWithValue(cities);
            }
            else{
              this.ciudad = false;
              this.parroquia = false;
            }
          })
          break;
        case 2:
          this.persona.id_ciudad = lugar;
          this.ciudad = true;
          this.placeService.getCounties(this.persona.id_ciudad._id).subscribe((counties) => {
            if (counties.length){
              this.parroquia = true;
              this.parroquias = replaceKeyWithValue(counties);
            }
            else{
              this.parroquia = false;
            }
          })
          break;
        case 3:

          this.persona.id_parroquia = lugar;
          this.parroquia = true;
          break;

      }

      this.manageLugar(lugar.fkLugar);

    }

  }


  parseDireccion(lugar: Place): void{
    // SI ES PAIS NOS DETENEMOS
    if (lugar.tipo == 0){

        this.dir_bella += lugar.nombre +", ";
    }
    else{

      if (lugar.fkLugar != null){
        this.parseDireccion(lugar.fkLugar);
      
        switch(lugar.tipo){

          case 1:
            this.dir_bella += lugar.nombre +", ";
            break;
          case 2:
            this.dir_bella += lugar.nombre +" ";
            break;
          case 3:

            this.dir_bella += lugar.nombre +" ";
            break;
        }
      }
    }
  }

  putUser(){
    this.userService.putUsuario(this.userService.usuario).subscribe((p)=>{
      this.persona = p;
      this.messageService.add({severity:'success', summary: 'Éxito', detail: 'Usuario actualizado con éxito'});
      this.sent_form = false;
      // this.router.navigate(['/profile']);
      // this.editUser();
      // this.closeModal();
    }, errorMessage => {
      this.messageService.add({severity:'error', summary: 'Error', detail: errorMessage});
      this.sent_form = false;
    })

    this.hideChangeClaveForm();
  }
  
  onSubmit(){
    this.sent_form = true;
    // Informacion basica
    this.userService.usuario._id = this.persona._id;
    this.userService.usuario.email = this.persona.email;

    if (this.showClaveForm){
      this.userService.usuario.contraseña = this.profileForm.value.clave;
      this.userService.usuario.confirmar_contraseña = this.profileForm.value.confirmar_clave;
    }
    else{
      this.userService.usuario.contraseña = "";
      this.userService.usuario.confirmar_contraseña = "";
    }
    
      
    this.userService.usuario._id = this.persona._id;
    this.userService.usuario.nombre = this.persona.nombre;
    this.userService.usuario.apellido = this.persona.apellido;
    this.userService.usuario.numeroIdentificacion = this.persona.numeroIdentificacion;
    this.userService.usuario.genero = this.persona.genero;
    this.userService.usuario.fechaNacimiento = this.persona.fechaNacimiento;
  // Informacion de contacto
      this.userService.usuario.telefono = this.profileForm.value.telefono;
    
      if (this.parroquia && this.profileForm.value.parroquia != 0){
        this.userService.usuario.fkLugar._id = this.profileForm.value.parroquia;
      }
      else if (this.ciudad && this.profileForm.value.ciudad != 0){
        this.userService.usuario.fkLugar._id = this.profileForm.value.ciudad;
      }
      else if (this.estado && this.profileForm.value.estado != 0){
        this.userService.usuario.fkLugar._id = this.profileForm.value.estado;
      }
      else {
        this.userService.usuario.fkLugar._id = this.profileForm.value.pais;
      }

      // if (this.userService.usuario.numeroIdentificacion
      //   && this.userService.usuario.fechaNacimiento && this.userService.usuario.genero
      //   && this.userService.usuario.id_pais  && this.userService.usuario.telefono){

        /* SUBMIT FORM */
        this.sent_form = true;
   
        this.putUser();
        // }
      // }
    }

}
