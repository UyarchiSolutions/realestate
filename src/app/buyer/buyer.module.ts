import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerloginComponent } from './buyerlogin/buyerlogin.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { CheckmailComponent } from './checkmail/checkmail.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { CreatepasswordComponent } from './createpassword/createpassword.component';
import { BuyerForgotComponent } from './buyer-forgot/buyer-forgot.component';
import { BuyerSendotpComponent } from './buyer-sendotp/buyer-sendotp.component';
import { UpdatepasswordbuyerComponent } from './updatepasswordbuyer/updatepasswordbuyer.component';
import { ChangeBuyerComponent } from './change-buyer/change-buyer.component';
import{RbHomeComponent} from '../rb-home/rb-home.component';
import { ResidentialBuyViewComponent } from './buyer-home-view/residential-buy-view/residential-buy-view.component';
import { IndianCurrencyPipe } from '../pipes/indian-currency.pipe';
import { RouterModule } from '@angular/router';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HeaderWithProfileComponent } from '../shared/header-with-profile/header-with-profile.component';
import { ResidentialDetailviewComponent } from './buyer-search-view/residential-detailview/residential-detailview.component';
import { BuyerInterestedPropertyComponent } from '../buyer-interested-property/buyer-interested-property.component';
import { PropertyPostComponent } from '../property-post/property-post.component';
import { CommercialRentViewComponent } from './buyer-home-view/commercial-rent-view/commercial-rent-view.component';
import { CommercialBuyViewComponent } from './buyer-home-view/commercial-buy-view/commercial-buy-view.component';
import { ResidentialBuyDetailviewComponent } from './buyer-search-view/residential-buy-detailview/residential-buy-detailview.component';
import { CommercialRentDetailviewComponent } from './buyer-search-view/commercial-rent-detailview/commercial-rent-detailview.component';
import { CommercialBuyDetailviewComponent } from './buyer-search-view/commercial-buy-detailview/commercial-buy-detailview.component';
import { BuyerStreamsHomeComponent } from './buyer-streams-home/buyer-streams-home.component';

import { BuyerInterestedComponent } from './buyer-interested/buyer-interested.component';
import { BuyerTopSectionComponent } from './buyer-top-section/buyer-top-section.component';
import { BuyerSavedComponent } from './buyer-saved/buyer-saved.component';
import { BuyerAlertPopComponent } from './buyer-alert-pop/buyer-alert-pop.component';
import { BuyerNotificationComponent } from './buyer-notification/buyer-notification.component';



@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    BuyerloginComponent,
    RegisterComponent,
    CheckmailComponent,
    VerifyOtpComponent,
    CreatepasswordComponent,
    BuyerForgotComponent,
    BuyerSendotpComponent,
    UpdatepasswordbuyerComponent,
    ChangeBuyerComponent,
  
    ResidentialBuyViewComponent,
    IndianCurrencyPipe,
    HeaderWithProfileComponent,
    ResidentialDetailviewComponent,
    BuyerInterestedPropertyComponent,
    //home
    RbHomeComponent,
    CommercialRentViewComponent,
    CommercialBuyViewComponent,
    CommercialRentViewComponent,
   

    //single prop show
    ResidentialBuyDetailviewComponent,
    CommercialRentDetailviewComponent,
    ResidentialBuyDetailviewComponent,
    CommercialBuyDetailviewComponent,
    BuyerStreamsHomeComponent,
    BuyerInterestedComponent,
    BuyerTopSectionComponent,
    BuyerSavedComponent,
    BuyerAlertPopComponent,
    BuyerNotificationComponent,
 

  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    NgxSpinnerModule,
    NgxSliderModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4f71KgUy-ocpdfmadcNPy-wrVks4YSdY',
    }),
   
  ]
})
export class BuyerModule { }
