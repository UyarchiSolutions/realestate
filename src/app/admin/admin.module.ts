import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InterestedPropertyPostComponent } from './interested-property-post/interested-property-post.component';
import { ManageBuyerTenantComponent } from './manage-buyer-tenant/manage-buyer-tenant.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { ManageSellerOwnerComponent } from './manage-seller-owner/manage-seller-owner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { StreamApprovalComponent } from './stream-approval/stream-approval.component';
import { ResidentialRentStreamComponent } from './stream-view/residential-rent-stream/residential-rent-stream.component';
import { ManageFaqComponent } from './manage-faq/manage-faq.component';
import { ManageEnquiryComponent } from './manage-enquiry/manage-enquiry.component';
import { ReportedPostComponent } from './reported-post/reported-post.component';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
  declarations: [
    HeaderComponent,
    InterestedPropertyPostComponent,
    ManageBuyerTenantComponent,
    ManagePostComponent,
    ManageSellerOwnerComponent,
    SidebarComponent,
    AddPlanComponent,
    ManagePlanComponent,
    StreamApprovalComponent,
    ResidentialRentStreamComponent,
    ManageFaqComponent,
    ManageEnquiryComponent,
    ReportedPostComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEditorModule

    
  ]
})
export class AdminModule { }
