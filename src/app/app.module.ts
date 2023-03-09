import { NgModule } from '@angular/core';
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
    RrAdditionalDetailsComponent
  

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
