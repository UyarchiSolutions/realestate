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
import { ResidentialRentComponent } from './admin-property-view/residential-rent/residential-rent.component';
import { ResidentialSaleComponent } from './admin-property-view/residential-sale/residential-sale.component';
import { CommercialSaleComponent } from './admin-property-view/commercial-sale/commercial-sale.component';
import { CommercialRentComponent } from './admin-property-view/commercial-rent/commercial-rent.component';
import { AgmCoreModule } from '@agm/core';
import { AdminRoutingRoutingModule } from './admin-routing-routing.module';
import { ManageDemoPostComponent } from './demo/manage-demo-post/manage-demo-post.component';
import { AddDemoUserComponent } from './demo/add-demo-user/add-demo-user.component';
import { AddPostComponent } from './demo/add-post/add-post.component';
import { AddPostPropComponent } from './demo/add-post-prop/add-post-prop.component';
import { ManageDemoUserPostsComponent } from './demo/manage-demo-user-posts/manage-demo-user-posts.component';
import { StreamDetailsComponent } from './demo/stream-details/stream-details.component';
import { ViewCompletedStreamComponent } from './demo/completed-stream/view-completed-stream/view-completed-stream.component';
import { VideoHlsComponent } from './demo/completed-stream/video-hls/video-hls.component';


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
    ReportedPostComponent,
    ResidentialRentComponent,
    ResidentialSaleComponent,
    CommercialSaleComponent,
    CommercialRentComponent,
    ManageDemoPostComponent,
    AddDemoUserComponent,
    AddPostComponent,
    AddPostPropComponent,
    ManageDemoUserPostsComponent,
    StreamDetailsComponent,
    ViewCompletedStreamComponent, VideoHlsComponent

  ],
  imports: [
    AdminRoutingRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEditorModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyARM6-Qr_hsR53GExv9Gmu9EtFTV5ZuDX4',
    }),

  ]
})
export class AdminModule { }
