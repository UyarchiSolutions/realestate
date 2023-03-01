import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { VerifyotpforsellerComponent } from './verifyotpforseller/verifyotpforseller.component';
import { CreatepasswordsellerComponent } from './createpasswordseller/createpasswordseller.component';
import { SellerformobileComponent } from './sellerformobile/sellerformobile.component';
import { SellerforotpComponent } from './sellerforotp/sellerforotp.component';
import { UpdatepasswordsellerComponent } from './updatepasswordseller/updatepasswordseller.component';
import { ChangeSellerComponent } from './change-seller/change-seller.component';



@NgModule({
  declarations: [
    SellerLoginComponent,
    SellerRegisterComponent,
    VerifyotpforsellerComponent,
    CreatepasswordsellerComponent,
    SellerformobileComponent,
    SellerforotpComponent,
    UpdatepasswordsellerComponent,
    ChangeSellerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SellerModule { }
