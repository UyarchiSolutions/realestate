import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Cookie } from 'ng2-cookies';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerModule } from './buyer/buyer.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerModule } from './seller/seller.module';
import { StartPostingComponent } from './start-posting/start-posting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    StartPostingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuyerModule,
    SellerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
