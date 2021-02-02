import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { PRODUCTS} from '../../../APP/core/constants/PRODUCTS';
import {ProductsService} from '../../core/services/products/products.service'
import {SessionService} from '../../core/services/auth/session.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  productos: SelectItem[];

  constructor(private fb: FormBuilder,
    private productService: ProductsService,
    private sessionService: SessionService,
   // private messageService: MessageService,
    private router: Router) {
  this.productos = PRODUCTS;
  this.createForm();
  }

  ngOnInit(): void {
  }

  publishForm: FormGroup;
  @ViewChild('pform') publishFormDirective;

  formErrors = {

    'descripcion': '',
    'cantidad': '',

  };

  validationMessages = {
    'descripción': {
      'required': 'La descripción del producto es requerida'
    },
    'cantidad': {
      'required': 'Indique la cantidad',
      'pattern': 'Clave debe contener al menos 6 caracteres, 1 letra mayuscula'
    },
    'productos': {
      'required': 'Indique el tipo de producto'
    }
  };

  sent_form = false;

  createForm() {
    this.publishForm = this.fb.group({
      descripcion: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9 ]+')
        ]
      ],
      cantidad: [
       '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$')
        ]
      ],
      productos: [
      '',
        [
          Validators.required
        ]
      ],
    });


    this.publishForm.valueChanges
      .subscribe(data => {
        this.onValueChange(data);
      });
    }

    onValueChange(data?: any) {
      /* If form hasn't been created */
      if (!this.publishForm) {
        return;
      }

      const form = this.publishForm;
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

    onSubmit() {
      if (this.publishForm.valid){
        this.productService.producto.cantidad = this.publishForm.value.cantidad;
        this.productService.producto.descripcion = this.publishForm.value.descripcion;
        this.productService.producto.producto = this.publishForm.value.productos;
        this.productService.producto.fkPublica = this.sessionService.getCurrentUser();
        console.log('entra');
        console.log(this.productService.producto);
         this.productService.postRegistrarProducto(this.productService.producto).subscribe((order) =>{
           this.nextPage();
         })
      }
      else{
          // this.messageService.add({severity:'error', summary: 'Error', detail: 'Complete todos los campos.'});
          console.log('else')
      }
      
    }

  
  nextPage(): void {
      this.router.navigate(['/my-posts']);
    }

}
