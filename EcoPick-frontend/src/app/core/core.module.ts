import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './services/auth/register.service';
import { LoginService } from './services/auth/login.service';
import { RecoveryService } from './services/auth/recovery.service';
import { PlaceService } from './services/profile/place.service';
import { PhoneService } from './services/profile/phone.service';
import { SessionService } from './services/auth/session.service';
import { ProcessHttpMessageService } from './services/process-http-message.service';
import { serverURL } from './constants/serverURL';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    LoginService,
    RecoveryService,
    PlaceService,
    PhoneService,
    SessionService,
    ProcessHttpMessageService,
    {provide: 'ServerURL', useValue: serverURL}
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule){
      throw new Error(
        'CoreModule is already loaded. Import it in AppModule only'
      );
    }
  }
}
