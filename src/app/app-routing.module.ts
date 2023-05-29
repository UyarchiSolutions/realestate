import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerForgotComponent } from './buyer/buyer-forgot/buyer-forgot.component';
import { ResidentialDetailviewComponent } from './buyer/buyer-search-view/residential-detailview/residential-detailview.component';
import { BuyerSendotpComponent } from './buyer/buyer-sendotp/buyer-sendotp.component';
import { BuyerloginComponent } from './buyer/buyerlogin/buyerlogin.component';
import { ChangeBuyerComponent } from './buyer/change-buyer/change-buyer.component';
import { CheckmailComponent } from './buyer/checkmail/checkmail.component';
import { CreatepasswordComponent } from './buyer/createpassword/createpassword.component';
import { RegisterComponent } from './buyer/register/register.component';
import { ResidentialBuyViewComponent } from './buyer/buyer-home-view/residential-buy-view/residential-buy-view.component';
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
import { RbHomeComponent } from './rb-home/rb-home.component';
import { ResiRentPopupComponent } from './resi-rent-popup/resi-rent-popup.component';
import { ResidentialRentComponent } from './residential-rent/residential-rent.component';

import { RrAdditionalDetailsComponent } from './rr-additional-details/rr-additional-details.component';
import { RrAmentitesComponent } from './rr-amentites/rr-amentites.component';
import { RrGalleryComponent } from './rr-gallery/rr-gallery.component';
import { RrLocationDetailsComponent } from './rr-location-details/rr-location-details.component';
import { RrPropertyDetailsComponent } from './rr-property-details/rr-property-details.component';
import { RrRentalDetailsComponent } from './rr-rental-details/rr-rental-details.component';
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
import { MyAccountComponent } from './seller/my-account/my-account.component';
import { EditAccountComponent } from './seller/edit-account/edit-account.component';
import { BuyerInterestedPropertyComponent } from './buyer-interested-property/buyer-interested-property.component';
import { PropertyAlertComponent } from './property-alert/property-alert.component';
import { CommercialBuyViewComponent } from './buyer/buyer-home-view/commercial-buy-view/commercial-buy-view.component';
import { CommercialRentViewComponent } from './buyer/buyer-home-view/commercial-rent-view/commercial-rent-view.component';
import { ManageSellerOwnerComponent } from './admin/manage-seller-owner/manage-seller-owner.component';
import { ManageBuyerTenantComponent } from './admin/manage-buyer-tenant/manage-buyer-tenant.component';
import { ManagePostComponent } from './admin/manage-post/manage-post.component';
import { ResidentialBuyDetailviewComponent } from './buyer/buyer-search-view/residential-buy-detailview/residential-buy-detailview.component';
import { CommercialRentDetailviewComponent } from './buyer/buyer-search-view/commercial-rent-detailview/commercial-rent-detailview.component';
import { CommercialBuyDetailviewComponent } from './buyer/buyer-search-view/commercial-buy-detailview/commercial-buy-detailview.component';
import { AddPlanComponent } from './admin/add-plan/add-plan.component';
import { MyStreamsComponent } from './seller/my-streams/my-streams.component';
import { RequestStreamComponent } from './seller/request-stream/request-stream.component';
import { ManagePlanComponent } from './admin/manage-plan/manage-plan.component';
import { MyPlansComponent } from './seller/my-plans/my-plans.component';
import { BuyPlanComponent } from './seller/buy-plan/buy-plan.component';
import { ManageSubHostComponent } from './seller/manage-sub-host/manage-sub-host.component';
import { AddSubHostComponent } from './seller/add-sub-host/add-sub-host.component';
import { StreamApprovalComponent } from './admin/stream-approval/stream-approval.component';
import { ResidentialRentStreamComponent } from './admin/stream-view/residential-rent-stream/residential-rent-stream.component';
import { SubHostLoginComponent } from './seller/sub-host/sub-host-login/sub-host-login.component';
import { SubHostNumberVerfiyComponent } from './seller/sub-host/sub-host-number-verfiy/sub-host-number-verfiy.component';
import { SubHostOtpComponent } from './seller/sub-host/sub-host-otp/sub-host-otp.component';
import { SubHostSetpasswordComponent } from './seller/sub-host/sub-host-setpassword/sub-host-setpassword.component';
import { SubHostStreamComponent } from './seller/sub-host/sub-host-stream/sub-host-stream.component';
import { AssignHostComponent } from './seller/assign-host/assign-host.component';
import { SubHostAccountComponent } from './seller/sub-host/sub-host-account/sub-host-account.component';
import { SubHostChangePasswordComponent } from './seller/sub-host/sub-host-change-password/sub-host-change-password.component';
import { SubHostForgotMobileComponent } from './seller/sub-host/sub-host-forgot-mobile/sub-host-forgot-mobile.component';
import { SubHostForgotOtpComponent } from './seller/sub-host/sub-host-forgot-otp/sub-host-forgot-otp.component';
import { SubHostNewPasswordComponent } from './seller/sub-host/sub-host-new-password/sub-host-new-password.component';
import { SubHostPropertyViewComponent } from './seller/sub-host/sub-host-property-view/sub-host-property-view.component';
import { BuyerStreamsHomeComponent } from './buyer/buyer-streams-home/buyer-streams-home.component';
import { NotificationComponent } from './seller/notification/notification.component';
import { BuyerInterestedComponent } from './buyer/buyer-interested/buyer-interested.component';
import { BuyerAlertPopComponent } from './buyer/buyer-alert-pop/buyer-alert-pop.component';
import { BuyerNotificationComponent } from './buyer/buyer-notification/buyer-notification.component';
import { SellerFooterComponent } from './seller/seller-footer/seller-footer.component';
import { BuyerFooterComponent } from './buyer/buyer-footer/buyer-footer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ManageFaqComponent } from './admin/manage-faq/manage-faq.component';
import { ManageEnquiryComponent } from './admin/manage-enquiry/manage-enquiry.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buyerLogin', component: BuyerloginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'check-mail', component: CheckmailComponent },
  { path: 'verify-mail', component: VerifyOtpComponent },
  { path: 'createPassword', component: CreatepasswordComponent },
  { path: 'buyer-forgot', component: BuyerForgotComponent },
  { path: 'buyer-sendotp', component: BuyerSendotpComponent },
  { path: 'buyer-update', component: UpdatepasswordbuyerComponent },
  { path: 'changepassword-buyer', component: ChangeBuyerComponent },

  {path:'buyer-streams',component:BuyerStreamsHomeComponent},

  {path:'buyer-interested',component:BuyerNotificationComponent},

  // seller
  { path: 'sellerLogin', component: SellerLoginComponent },
  { path: 'seller-register', component: SellerRegisterComponent },
  { path: 'varifi-seller', component: VerifyotpforsellerComponent },
  { path: 'createPassword-seller', component: CreatepasswordsellerComponent },
  { path: 'sendMobile-seller', component: SellerformobileComponent },
  { path: 'sent-otp', component: SellerforotpComponent },
  { path: 'updatePassword-seller', component: UpdatepasswordsellerComponent },
  { path: 'changepassword-seller', component: ChangeSellerComponent },
  { path: 'seller-notification', component: NotificationComponent },
  { path: 'seller-footer', component: SellerFooterComponent },



  {
    path: 'start-posting',
    children: [
      { path: '', component: StartPostingComponent },
      { path: 'residential-rent', component: RrPropertyDetailsComponent },
      {
        path: 'residentaial-rent-location-details',
        component: RrLocationDetailsComponent,
      },
      {
        path: 'residentaial-rent-rental-details',
        component: RrRentalDetailsComponent,
      },
      { path: 'residentaial-rent-amentites', component: RrAmentitesComponent },
      { path: 'residentaial-rent-gallery', component: RrGalleryComponent },
      {
        path: 'residentaial-rent-details',
        component: RrAdditionalDetailsComponent,
      },
      {
        path: 'residentaial-rent-preview',
        component: ResidentialRentComponent,
      },

      {
        path: 'residential-sale-property',
        component: RsPropertyDetailsComponent,
      },
      {
        path: 'residential-sale-location-details',
        component: RsLocationDetailsComponent,
      },
      {
        path: 'residential-sale-price-details',
        component: RsPriceDetailsComponent,
      },
      { path: 'residential-sale-amentites', component: RsAmenitiesComponent },
      { path: 'residential-sale-gallery', component: RsGalleryComponent },
      {
        path: 'residential-sale-add-details',
        component: RsAdditionalDetailsComponent,
      },
      {
        path: 'residential-sale-preview',
        component: RsResidentialSalePreviewComponent,
      },

      {
        path: 'commercial-rent-property',
        component: CrPropertyDetailsComponent,
      },
      {
        path: 'commercial-rent-rental-details',
        component: CrRentalDetailsComponent,
      },
      {
        path: 'commercial-rent-location-details',
        component: CrLocationDetailsComponent,
      },
      { path: 'commercial-rent-gallery', component: CrGalleryComponent },
      { path: 'commercial-rent-amenities', component: CrAmenitiesComponent },
      {
        path: 'commercial-rent-add-details',
        component: CrAdditionalDetailsComponent,
      },
      {
        path: 'commercial-rent-preview',
        component: CrCommercialRentPreviewComponent,
      },

      {
        path: 'commercial-sale-property',
        component: CsPropertyDetailsComponent,
      },
      {
        path: 'commercial-sale-location-details',
        component: CsLocationDetailsComponent,
      },
      {
        path: 'commercial-sale-price-details',
        component: CsPriceDetailsComponent,
      },
      { path: 'commercial-sale-amenities', component: CsAmenitiesComponent },
      { path: 'commercial-sale-gallery', component: CsGalleryComponent },
      {
        path: 'commercial-sale-add-details',
        component: CsAdditionalDetailsComponent,
      },
      {
        path: 'commercial-sale-preview',
        component: CsCommercialSalePreviewComponent,
      },
    ],
  },
  // seller

  { path: 'owner', children:[
    {path:'',component: OwnerComponent},
    {path: 'interest-post', component: PropertyPostComponent  }
  ]  },
   {path:'my-plans',children:[
    {path:'',component: MyPlansComponent},
    {path:'buy-plans',component: BuyPlanComponent}
    ]},
    {path:'manage-sub-host',children:[
      {path:'',component: ManageSubHostComponent},
      {path:'add-sub-host',component: AddSubHostComponent}
    ]},
  {
    path:'my-streams',children:[
  {path:'',component:MyStreamsComponent},
  {path:'my-add-stream',component:RequestStreamComponent},
  {path:'assign-host',component:AssignHostComponent},
],
},
//sub-host 
{ path: 'sub-host-login', component: SubHostLoginComponent },
{ path: 'sub-host-verfiy', component: SubHostNumberVerfiyComponent },
{ path: 'sub-host-otp-verfiy', component: SubHostOtpComponent },
{ path: 'sub-host-set-password', component: SubHostSetpasswordComponent },
{ path: 'sub-host-streams', component: SubHostStreamComponent },
{ path: 'sub-host-account', component: SubHostAccountComponent },
{ path: 'sub-host-change-password', component: SubHostChangePasswordComponent },
{ path: 'sub-host-forgot-password', component: SubHostForgotMobileComponent },
{ path: 'sub-host-forgot-otp', component: SubHostForgotOtpComponent },
{ path: 'sub-host-new-password', component: SubHostNewPasswordComponent },
{ path: 'sub-host-view', component: SubHostPropertyViewComponent },
  

  //buyer home
  { path: 'buyer-residential-rent-view', component: RbHomeComponent },
  {
    path: 'buyer-residential-buy-view',
    component: ResidentialBuyViewComponent,
  },
  { path: 'buyer-commercial-buy-view', component: CommercialBuyViewComponent },
  {
    path: 'buyer-commercial-rent-view',
    component: CommercialRentViewComponent,
  },

  //buyer search single view
  {
    path: 'buyer-residential-rent-search-view',
    component: ResidentialDetailviewComponent,
  },
  {
    path: 'buyer-residential-buy-search-view',
    component: ResidentialBuyDetailviewComponent,
  },
  {
    path: 'buyer-commercial-rent-search-view',
    component: CommercialRentDetailviewComponent,
  },
  {
    path: 'buyer-commercial-buy-search-view',
    component: CommercialBuyDetailviewComponent,
  },

  //buyerInterested
  { path: 'interested-property', component: BuyerInterestedPropertyComponent },

  { path: 'my-account', component: MyAccountComponent },
  { path: 'edit-account', component: EditAccountComponent },
  //alert pop
  { path: 'alert', component: PropertyAlertComponent },

  //admin
  {
    path: 'admin',
    children: [
      { path: 'manage-seller-owner', component: ManageSellerOwnerComponent },
      { path: 'manage-buyer-tenant', component: ManageBuyerTenantComponent },
      { path: 'manage-post', component: ManagePostComponent },
      { path: 'stream-approval',children:[
        {path:'',component: StreamApprovalComponent },
        {path:'stream-view',component:ResidentialRentStreamComponent},
      ] },
      { path: 'manage-plan', children:[
        {path:'', component: ManagePlanComponent},
        {path:'add-plan', component: AddPlanComponent},
      ]  },
      { path: 'manage-faq', component: ManageFaqComponent },
      { path: 'manage-enquiry', component: ManageEnquiryComponent },
     
    ],
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
 
})
export class AppRoutingModule {}
