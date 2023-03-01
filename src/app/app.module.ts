import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerModule } from './buyer/buyer.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerModule } from './seller/seller.module';

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
    SellerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
