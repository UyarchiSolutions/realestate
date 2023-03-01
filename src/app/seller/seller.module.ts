import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { VerifyotpforsellerComponent } from './verifyotpforseller/verifyotpforseller.component';
import { CreatepasswordsellerComponent } from './createpasswordseller/createpasswordseller.component';



@NgModule({
  declarations: [
    SellerLoginComponent,
    SellerRegisterComponent,
    VerifyotpforsellerComponent,
    CreatepasswordsellerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SellerModule { }
