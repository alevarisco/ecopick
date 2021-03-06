import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './register/account/account.component';
import { ContactComponent } from './register/contact/contact.component';
import { StatusComponent } from './register/status/status.component';
import { FamilyComponent } from './register/family/family.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ChangeComponent } from './recovery/change/change.component';
import { ToastModule } from 'primeng/toast';
import { SecurityquestionComponent } from './recovery/securityquestion/securityquestion.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    ContactComponent,
    StatusComponent,
    FamilyComponent,
    RecoveryComponent,
    ChangeComponent,
    SecurityquestionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ToastModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
