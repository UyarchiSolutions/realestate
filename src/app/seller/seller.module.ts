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
import { HttpClientModule } from '@angular/common/http';
import { HeaderEmptyComponent } from '../header-empty/header-empty.component';
import { HeaderWithProfileComponent } from '../header-with-profile/header-with-profile.component';
import { OwnerComponent } from '../owner/owner.component';
import { PropertyPostComponent } from '../property-post/property-post.component';
import { StartPostingComponent } from '../start-posting/start-posting.component';
import { CrAdditionalDetailsComponent } from '../cr-additional-details/cr-additional-details.component';
import { CrAmenitiesComponent } from '../cr-amenities/cr-amenities.component';
import { CrCommercialRentPreviewComponent } from '../cr-commercial-rent-preview/cr-commercial-rent-preview.component';
import { CrGalleryComponent } from '../cr-gallery/cr-gallery.component';
import { CrLocationDetailsComponent } from '../cr-location-details/cr-location-details.component';
import { CrPropertyDetailsComponent } from '../cr-property-details/cr-property-details.component';
import { CrRentalDetailsComponent } from '../cr-rental-details/cr-rental-details.component';
import { CsAdditionalDetailsComponent } from '../cs-additional-details/cs-additional-details.component';
import { CsAmenitiesComponent } from '../cs-amenities/cs-amenities.component';
import { CsCommercialSalePreviewComponent } from '../cs-commercial-sale-preview/cs-commercial-sale-preview.component';
import { CsGalleryComponent } from '../cs-gallery/cs-gallery.component';
import { CsLocationDetailsComponent } from '../cs-location-details/cs-location-details.component';
import { CsPriceDetailsComponent } from '../cs-price-details/cs-price-details.component';
import { CsPropertyDetailsComponent } from '../cs-property-details/cs-property-details.component';
import { ResidentialRentComponent } from '../residential-rent/residential-rent.component';
import { RrAdditionalDetailsComponent } from '../rr-additional-details/rr-additional-details.component';
import { RrAmentitesComponent } from '../rr-amentites/rr-amentites.component';
import { RrGalleryComponent } from '../rr-gallery/rr-gallery.component';
import { RrLocationDetailsComponent } from '../rr-location-details/rr-location-details.component';
import { RrPropertyDetailsComponent } from '../rr-property-details/rr-property-details.component';
import { RrRentalDetailsComponent } from '../rr-rental-details/rr-rental-details.component';
import { RsAdditionalDetailsComponent } from '../rs-additional-details/rs-additional-details.component';
import { RsAmenitiesComponent } from '../rs-amenities/rs-amenities.component';
import { RsGalleryComponent } from '../rs-gallery/rs-gallery.component';
import { RsLocationDetailsComponent } from '../rs-location-details/rs-location-details.component';
import { RsPriceDetailsComponent } from '../rs-price-details/rs-price-details.component';
import { RsPropertyDetailsComponent } from '../rs-property-details/rs-property-details.component';
import { RsResidentialSalePreviewComponent } from '../rs-residential-sale-preview/rs-residential-sale-preview.component';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { IndianCurrencyPipeS } from '../pipes/indian-currency.pipe copy';
import { MyAccountComponent } from './my-account/my-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { PropertyAlertComponent } from '../property-alert/property-alert.component';
import { AppRoutingModule } from '../app-routing.module';
import { SellerSidebarComponent } from './seller-sidebar/seller-sidebar.component';
import { SellerAdminSidebarComponent } from './seller-admin-sidebar/seller-admin-sidebar.component';
import { RouterModule } from '@angular/router';
import { MyStreamsComponent } from './my-streams/my-streams.component';
import { RequestStreamComponent } from './request-stream/request-stream.component';
import { MyPlansComponent } from './my-plans/my-plans.component';
import { BuyPlanComponent } from './buy-plan/buy-plan.component';
import { AddSubHostComponent } from './add-sub-host/add-sub-host.component';
import { ManageSubHostComponent } from './manage-sub-host/manage-sub-host.component';
import { SubHostLoginComponent } from './sub-host/sub-host-login/sub-host-login.component';
import { SubHostNumberVerfiyComponent } from './sub-host/sub-host-number-verfiy/sub-host-number-verfiy.component';
import { SubHostOtpComponent } from './sub-host/sub-host-otp/sub-host-otp.component';
import { SubHostSetpasswordComponent } from './sub-host/sub-host-setpassword/sub-host-setpassword.component';
import { SubHostStreamComponent } from './sub-host/sub-host-stream/sub-host-stream.component';
import { AssignHostComponent } from './assign-host/assign-host.component';
import { SubHostHeaderComponent } from './sub-host/sub-host-header/sub-host-header.component';
import { SubHostAccountComponent } from './sub-host/sub-host-account/sub-host-account.component';
import { SubHostChangePasswordComponent } from './sub-host/sub-host-change-password/sub-host-change-password.component';
import { SubHostForgotMobileComponent } from './sub-host/sub-host-forgot-mobile/sub-host-forgot-mobile.component';
import { SubHostForgotOtpComponent } from './sub-host/sub-host-forgot-otp/sub-host-forgot-otp.component';
import { SubHostNewPasswordComponent } from './sub-host/sub-host-new-password/sub-host-new-password.component';
import { SubHostPropertyViewComponent } from './sub-host/sub-host-property-view/sub-host-property-view.component';
import { NotificationComponent } from './notification/notification.component';
import { SellerFooterComponent } from './seller-footer/seller-footer.component';

import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    SellerLoginComponent,
    SellerRegisterComponent,
    VerifyotpforsellerComponent,
    CreatepasswordsellerComponent,
    SellerformobileComponent,
    SellerforotpComponent,
    UpdatepasswordsellerComponent,
    ChangeSellerComponent,
    HeaderEmptyComponent,
    HeaderWithProfileComponent,
    OwnerComponent,
    PropertyPostComponent,
    NotificationComponent,
    StartPostingComponent,

    RrPropertyDetailsComponent,
    RrLocationDetailsComponent,
    RrRentalDetailsComponent,
    RrAmentitesComponent,
    RrGalleryComponent,
    RrAdditionalDetailsComponent,

    ResidentialRentComponent,
    RsPropertyDetailsComponent,
    RsLocationDetailsComponent,
    RsPriceDetailsComponent,
    RsAmenitiesComponent,
    RsGalleryComponent,
    RsAdditionalDetailsComponent,
    RsResidentialSalePreviewComponent,
    //CommercialRent
    CrPropertyDetailsComponent,
    CrRentalDetailsComponent,
    CrLocationDetailsComponent,
    CrAmenitiesComponent,
    CrGalleryComponent,
    CrAdditionalDetailsComponent,
    CrCommercialRentPreviewComponent,
    //Commericalsale
    CsPropertyDetailsComponent,
    CsLocationDetailsComponent,
    CsGalleryComponent,
    CsPriceDetailsComponent,
    CsCommercialSalePreviewComponent,
    CsAmenitiesComponent,
    CsAdditionalDetailsComponent,
    //pipes
    IndianCurrencyPipeS,
    //sidebar
    SellerSidebarComponent,
    SellerAdminSidebarComponent,
    MyStreamsComponent,
    RequestStreamComponent,
    MyPlansComponent,
    BuyPlanComponent,
    AddSubHostComponent,
    ManageSubHostComponent,
    MyAccountComponent,
    EditAccountComponent,
    AssignHostComponent,
    //subHost
    SubHostLoginComponent,
    SubHostNumberVerfiyComponent,
    SubHostOtpComponent,
    SubHostSetpasswordComponent,
    SubHostStreamComponent,
    SubHostHeaderComponent,
    SubHostAccountComponent,
    SubHostChangePasswordComponent,
    SubHostForgotMobileComponent,
    SubHostForgotOtpComponent,
    SubHostNewPasswordComponent,
    SubHostPropertyViewComponent,
    SellerFooterComponent

    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    GooglePlaceModule,
  
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8NFC9JWmp2ofQFhglFmovCa-pzPUn-gE',
    }),
  ],
  
})
export class SellerModule {}
