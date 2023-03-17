import { Injectable, NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Cookie } from 'ng2-cookies';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerModule } from './buyer/buyer.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerModule } from './seller/seller.module';
import { StartPostingComponent } from './start-posting/start-posting.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { RrPropertyDetailsComponent } from './rr-property-details/rr-property-details.component';
import { RrLocationDetailsComponent } from './rr-location-details/rr-location-details.component';
import { AgmMap } from '@agm/core/lib/directives';
import { AgmCoreModule } from '@agm/core';
import { RrRentalDetailsComponent } from './rr-rental-details/rr-rental-details.component';
import { RrAmentitesComponent } from './rr-amentites/rr-amentites.component';
import { RrGalleryComponent } from './rr-gallery/rr-gallery.component';
import { RrAdditionalDetailsComponent } from './rr-additional-details/rr-additional-details.component';
import { CommonModule } from '@angular/common';

import { ResidentialRent1Component } from './residential-rent1/residential-rent1.component';
import { ResidentialRentComponent } from './residential-rent/residential-rent.component';
import { RsPropertyDetailsComponent } from './rs-property-details/rs-property-details.component';
import { RsLocationDetailsComponent } from './rs-location-details/rs-location-details.component';
import { RsPriceDetailsComponent } from './rs-price-details/rs-price-details.component';
import { RsAmenitiesComponent } from './rs-amenities/rs-amenities.component';
import { RsGalleryComponent } from './rs-gallery/rs-gallery.component';
import { RsAdditionalDetailsComponent } from './rs-additional-details/rs-additional-details.component';
import { RsResidentialSalePreviewComponent } from './rs-residential-sale-preview/rs-residential-sale-preview.component';
import { CrPropertyDetailsComponent } from './cr-property-details/cr-property-details.component';
import { CrRentalDetailsComponent } from './cr-rental-details/cr-rental-details.component';
import { CrLocationDetailsComponent } from './cr-location-details/cr-location-details.component';
import { CrAmenitiesComponent } from './cr-amenities/cr-amenities.component';
import { CrGalleryComponent } from './cr-gallery/cr-gallery.component';
import { CrAdditionalDetailsComponent } from './cr-additional-details/cr-additional-details.component';
import { CrCommercialRentPreviewComponent } from './cr-commercial-rent-preview/cr-commercial-rent-preview.component';
import { CsPropertyDetailsComponent } from './cs-property-details/cs-property-details.component';
import { CsLocationDetailsComponent } from './cs-location-details/cs-location-details.component';
import { CsGalleryComponent } from './cs-gallery/cs-gallery.component';
import { CsPriceDetailsComponent } from './cs-price-details/cs-price-details.component';
import { CsCommercialSalePreviewComponent } from './cs-commercial-sale-preview/cs-commercial-sale-preview.component';
import { CsAmenitiesComponent } from './cs-amenities/cs-amenities.component';
import { CsAdditionalDetailsComponent } from './cs-additional-details/cs-additional-details.component';
import { PropertyPostComponent } from './property-post/property-post.component';
import { OwnerComponent } from './owner/owner.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
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

    PropertyPostComponent,
    OwnerComponent
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuyerModule,
    SellerModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    FormsModule,
    CommonModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoYhbYhtl9HpilAZSy8F_JHmzvwVDoeHI',
    }),
    
  ],
  exports: [ ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
