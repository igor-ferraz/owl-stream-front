import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgottenPasswordComponent } from './pages/forgotten-password/forgotten-password.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgottenPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }