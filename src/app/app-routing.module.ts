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
import { CrAdditionalDetailsComponent } from './cr-additional-details/cr-additional-details.component';
import { CrAmenitiesComponent } from './cr-amenities/cr-amenities.component';
import { CrCommercialRentPreviewComponent } from './cr-commercial-rent-preview/cr-commercial-rent-preview.component';
import { CrGalleryComponent } from './cr-gallery/cr-gallery.component';
import { CrLocationDetailsComponent } from './cr-location-details/cr-location-details.component';
import { CrPropertyDetailsComponent } from './cr-property-details/cr-property-details.component';
import { CrRentalDetailsComponent } from './cr-rental-details/cr-rental-details.component';
import { CsAdditionalDetailsComponent } from './cs-additional-details/cs-additional-details.component';
import { CsAmenitiesComponent } from './cs-amenities/cs-amenities.component';
import { CsCommercialSalePreviewComponent } from './cs-commercial-sale-preview/cs-commercial-sale-preview.component';
import { CsGalleryComponent } from './cs-gallery/cs-gallery.component';
import { CsLocationDetailsComponent } from './cs-location-details/cs-location-details.component';
import { CsPriceDetailsComponent } from './cs-price-details/cs-price-details.component';
import { CsPropertyDetailsComponent } from './cs-property-details/cs-property-details.component';

import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { PropertyPostComponent } from './property-post/property-post.component';
import { ResiRentPopupComponent } from './resi-rent-popup/resi-rent-popup.component';
import { ResidentialRentComponent } from './residential-rent/residential-rent.component';

import { ResidentialRent1Component } from './residential-rent1/residential-rent1.component';
import { RrAdditionalDetailsComponent } from './rr-additional-details/rr-additional-details.component';
import { RrAmentitesComponent } from './rr-amentites/rr-amentites.component';
import { RrGalleryComponent } from './rr-gallery/rr-gallery.component';
import { RrLocationDetailsComponent } from './rr-location-details/rr-location-details.component';
import { RrPropertyDetailsComponent } from './rr-property-details/rr-property-details.component';
import { RrRentalDetailsComponent } from './rr-rental-details/rr-rental-details.component'
import { RsAdditionalDetailsComponent } from './rs-additional-details/rs-additional-details.component';
import { RsAmenitiesComponent } from './rs-amenities/rs-amenities.component';
import { RsGalleryComponent } from './rs-gallery/rs-gallery.component';
import { RsLocationDetailsComponent } from './rs-location-details/rs-location-details.component';
import { RsPriceDetailsComponent } from './rs-price-details/rs-price-details.component';
import { RsPropertyDetailsComponent } from './rs-property-details/rs-property-details.component';
import { RsResidentialSalePreviewComponent } from './rs-residential-sale-preview/rs-residential-sale-preview.component';
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
  {path:'property-post',component:PropertyPostComponent},
  {path:'owner',component:OwnerComponent},

  {path:'residential-rent',component:RrPropertyDetailsComponent},
  {path:'residentaial-rent-location-details',component:RrLocationDetailsComponent},
  {path:'residentaial-rent-rental-details',component:RrRentalDetailsComponent},
  {path:'residentaial-rent-amentites',component:RrAmentitesComponent},
  {path:'residentaial-rent-gallery',component:RrGalleryComponent},
  {path:'residentaial-rent-details',component:RrAdditionalDetailsComponent},
  {path:'residentaial-rent-preview',component:ResidentialRentComponent},

  {path:'residential-sale-property',component:RsPropertyDetailsComponent},
  {path:'residential-sale-location-details',component:RsLocationDetailsComponent},
  {path:'residential-sale-price-details',component:RsPriceDetailsComponent},
  {path:'residential-sale-amentites',component:RsAmenitiesComponent},
  {path:'residential-sale-gallery',component:RsGalleryComponent},
  {path:'residential-sale-add-details',component:RsAdditionalDetailsComponent},
  {path:'residential-sale-preview',component:RsResidentialSalePreviewComponent},

  {path:'commercial-rent-property',component:CrPropertyDetailsComponent},
  {path:'commercial-rent-rental-details',component:CrRentalDetailsComponent},
  {path:'commercial-rent-location-details',component:CrLocationDetailsComponent},
  {path:'commercial-rent-gallery',component:CrGalleryComponent},
  {path:'commercial-rent-amenities',component:CrAmenitiesComponent},
  {path:'commercial-rent-add-details',component:CrAdditionalDetailsComponent},
  {path:'commercial-rent-preview',component:CrCommercialRentPreviewComponent},

  {path:'commercial-sale-property',component:CsPropertyDetailsComponent},
  {path:'commercial-sale-location-details',component:CsLocationDetailsComponent},
  {path:'commercial-sale-price-details',component:CsPriceDetailsComponent},
  {path:'commercial-sale-amenities',component:CsAmenitiesComponent},
  {path:'commercial-sale-gallery',component:CsGalleryComponent},
  {path:'commercial-sale-add-details',component:CsAdditionalDetailsComponent},
  {path:'commercial-sale-preview',component:CsCommercialSalePreviewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
