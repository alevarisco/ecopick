import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';

/* App modules */
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { ProfileModule } from './profile/profile.module';
import { ChangeComponent } from './auth/recovery/change/change.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    ProfileModule,
    ProductsModule,
    RouterModule.forRoot([
      { path: 'change/:hash', component: ChangeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
