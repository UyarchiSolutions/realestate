import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OwnerComponent } from './owner/owner.component';
import { StartPostingComponent } from './start-posting/start-posting.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StartPostingComponent,
    OwnerComponent,
    HeaderComponent
   

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
