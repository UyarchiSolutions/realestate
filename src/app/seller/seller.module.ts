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

    MyAccountComponent,
    EditAccountComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoYhbYhtl9HpilAZSy8F_JHmzvwVDoeHI',
    }),
  ],
})
export class SellerModule {}
