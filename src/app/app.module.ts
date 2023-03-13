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
    // ResidentialRent1Component,
    ResidentialRentComponent,
    RsPropertyDetailsComponent,
    RsLocationDetailsComponent,
    RsPriceDetailsComponent,
    RsAmenitiesComponent,
    RsGalleryComponent,
    RsAdditionalDetailsComponent,
    RsResidentialSalePreviewComponent
    
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuyerModule,
    SellerModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    FormsModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoYhbYhtl9HpilAZSy8F_JHmzvwVDoeHI',
    }),
    
  ],
  exports: [ ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
