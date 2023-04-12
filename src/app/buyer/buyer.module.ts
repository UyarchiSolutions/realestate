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
import { ResidentialBuyViewComponent } from './residential-buy-view/residential-buy-view.component';
import { IndianCurrencyPipe } from '../pipes/indian-currency.pipe';
import { RouterModule } from '@angular/router';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AgmCoreModule } from '@agm/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HeaderWithProfileComponent } from '../shared/header-with-profile/header-with-profile.component';
import { ResidentialDetailviewComponent } from './buyer-search-view/residential-detailview/residential-detailview.component';
import { BuyerInterestedPropertyComponent } from '../buyer-interested-property/buyer-interested-property.component';


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
    RbHomeComponent,
    ResidentialBuyViewComponent,
    IndianCurrencyPipe,
    HeaderWithProfileComponent,
    ResidentialDetailviewComponent,
    BuyerInterestedPropertyComponent
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
      apiKey: 'AIzaSyDoYhbYhtl9HpilAZSy8F_JHmzvwVDoeHI',
    }),
   
  ]
})
export class BuyerModule { }
