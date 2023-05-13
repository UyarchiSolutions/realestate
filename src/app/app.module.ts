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
import { ToastrModule } from 'ngx-toastr';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { PropertyAlertComponent } from './property-alert/property-alert.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { AdminModule } from './admin/admin.module';












@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuyerModule,
    SellerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSliderModule,
    AdminModule,
    FormsModule,
    CommonModule,
    GooglePlaceModule,
    ToastrModule.forRoot( {
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4f71KgUy-ocpdfmadcNPy-wrVks4YSdY',
    }),
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
