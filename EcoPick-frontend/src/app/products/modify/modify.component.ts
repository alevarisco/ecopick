import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { PRODUCTS} from '../../../APP/core/constants/PRODUCTS';
import {ProductsService} from '../../core/services/products/products.service'
import {SessionService} from '../../core/services/auth/session.service'
import { Router,  ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/classes/product/product';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  productos: SelectItem[];
  product: Product;
  id: number;

  constructor(private fb: FormBuilder,
    private productService: ProductsService,
    private sessionService: SessionService,
   // private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute) {

    if (!this.route.snapshot.queryParamMap.get('type')) {
      this.router.navigate(['404']);
    }
    else{
      this.id = parseInt(this.route.snapshot.queryParamMap.get('type'), 10);

    
      this.productService.getProducto(this.id).subscribe((res) => {
        // this.userService.getPerson(this.current_user).subscribe((persona) => {
            this.product = res.objeto as Product;
            console.log(this.product)

            this.productos = PRODUCTS;
            this.createForm();
      })

    }

  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.product = params['product'];
    // });
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
      'pattern': 'Debe ser mayor a 0, y sólo números.'
    },
    'productos': {
      'required': 'Indique el tipo de producto'
    }
  };

  sent_form = false;

  createForm() {
    this.publishForm = this.fb.group({
      descripcion: [
        this.product.descripcion,
        [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9 ]+')
        ]
      ],
      cantidad: [
        this.product.cantidad,
        [
          Validators.required,
          Validators.pattern('^[0-9]*$')
        ]
      ],
      productos: [
      this.product.producto,
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
