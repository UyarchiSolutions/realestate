import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerForgotComponent } from './buyer/buyer-forgot/buyer-forgot.component';
import { BuyerSendotpComponent } from './buyer/buyer-sendotp/buyer-sendotp.component';
import { BuyerloginComponent } from './buyer/buyerlogin/buyerlogin.component';
import { ChangeBuyerComponent } from './buyer/change-buyer/change-buyer.component';
import { CheckmailComponent } from './buyer/checkmail/checkmail.component';
import { CreatepasswordComponent } from './buyer/createpassword/createpassword.component';
import { RegisterComponent } from './buyer/register/register.component';
import { UpdatepasswordbuyerComponent } from './buyer/updatepasswordbuyer/updatepasswordbuyer.component';
import { VerifyOtpComponent } from './buyer/verify-otp/verify-otp.component';
import { HomeComponent } from './home/home.component';
import { ResiRentPopupComponent } from './resi-rent-popup/resi-rent-popup.component';
import { ResidentialSaleComponent } from './residential-sale/residential-sale.component';
import { RrAdditionalDetailsComponent } from './rr-additional-details/rr-additional-details.component';
import { RrAmentitesComponent } from './rr-amentites/rr-amentites.component';
import { RrGalleryComponent } from './rr-gallery/rr-gallery.component';
import { RrLocationDetailsComponent } from './rr-location-details/rr-location-details.component';
import { RrPropertyDetailsComponent } from './rr-property-details/rr-property-details.component';
import { RrRentalDetailsComponent } from './rr-rental-details/rr-rental-details.component'
import { ChangeSellerComponent } from './seller/change-seller/change-seller.component';
import { CreatepasswordsellerComponent } from './seller/createpasswordseller/createpasswordseller.component';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { SellerRegisterComponent } from './seller/seller-register/seller-register.component';
import { SellerformobileComponent } from './seller/sellerformobile/sellerformobile.component';
import { SellerforotpComponent } from './seller/sellerforotp/sellerforotp.component';
import { UpdatepasswordsellerComponent } from './seller/updatepasswordseller/updatepasswordseller.component';
import { VerifyotpforsellerComponent } from './seller/verifyotpforseller/verifyotpforseller.component';
import { StartPostingComponent } from './start-posting/start-posting.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'buyerLogin',component:BuyerloginComponent},
  {path:'register',component:RegisterComponent},
  {path:'check-mail',component:CheckmailComponent},
  {path:'verify-mail',component:VerifyOtpComponent},
  {path:'createPassword',component:CreatepasswordComponent},
  {path:'buyer-forgot',component:BuyerForgotComponent},
  {path:'buyer-sendotp',component:BuyerSendotpComponent},
  {path:'buyer-update',component:UpdatepasswordbuyerComponent},
  {path:'changepassword-buyer',component:ChangeBuyerComponent},

  // seller
  {path:"sellerLogin",component:SellerLoginComponent},
  {path:"seller-register",component:SellerRegisterComponent},
  {path:'varifi-seller',component:VerifyotpforsellerComponent},
  {path:'createPassword-seller',component:CreatepasswordsellerComponent},
  {path:'sendMobile-seller',component:SellerformobileComponent},
  {path:'sent-otp',component:SellerforotpComponent},
  {path:'updatePassword-seller',component:UpdatepasswordsellerComponent},
  {path:'changepassword-seller',component:ChangeSellerComponent},
  {path:'start-posting',component:StartPostingComponent},
  {path:'residential-rent',component:RrPropertyDetailsComponent},
  {path:'residentaial-rent-location-details',component:RrLocationDetailsComponent},
  {path:'residentaial-rent-rental-details',component:RrRentalDetailsComponent},
  
 
  {path:'residentaial-rent-amentites',component:RrAmentitesComponent},
  {path:'residentaial-rent-gallery',component:RrGalleryComponent},
  {path:'residentaial-rent-details',component:RrAdditionalDetailsComponent},
  {path:'residentaial-rent-preview',component:ResidentialSaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
