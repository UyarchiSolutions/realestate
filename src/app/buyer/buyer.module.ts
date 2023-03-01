import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerloginComponent } from './buyerlogin/buyerlogin.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CheckmailComponent } from './checkmail/checkmail.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';
import { BuyerForgotComponent } from './buyer-forgot/buyer-forgot.component';
import { BuyerSendotpComponent } from './buyer-sendotp/buyer-sendotp.component';
import { UpdatepasswordbuyerComponent } from './updatepasswordbuyer/updatepasswordbuyer.component';



@NgModule({
  declarations: [
    BuyerloginComponent,
    RegisterComponent,
    CheckmailComponent,
    VerifyOtpComponent,
    CreatepasswordComponent,
    BuyerForgotComponent,
    BuyerSendotpComponent,
    UpdatepasswordbuyerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BuyerModule { }
