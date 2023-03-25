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

import { GooglePlaceModule } from "ngx-google-places-autocomplete";


import { AgmCoreModule } from '@agm/core';

import { CommonModule } from '@angular/common';











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
    

    FormsModule,
    CommonModule,
    GooglePlaceModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDoYhbYhtl9HpilAZSy8F_JHmzvwVDoeHI',
    }),
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
