import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InterestedPropertyPostComponent } from './interested-property-post/interested-property-post.component';
import { ManageBuyerTenantComponent } from './manage-buyer-tenant/manage-buyer-tenant.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { ManageSellerOwnerComponent } from './manage-seller-owner/manage-seller-owner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    InterestedPropertyPostComponent,
    ManageBuyerTenantComponent,
    ManagePostComponent,
    ManageSellerOwnerComponent,
    SidebarComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    
  ]
})
export class AdminModule { }
