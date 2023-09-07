import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { ManageBuyerTenantComponent } from './manage-buyer-tenant/manage-buyer-tenant.component';
import { ManageEnquiryComponent } from './manage-enquiry/manage-enquiry.component';
import { ManageFaqComponent } from './manage-faq/manage-faq.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { ManageSellerOwnerComponent } from './manage-seller-owner/manage-seller-owner.component';
import { ReportedPostComponent } from './reported-post/reported-post.component';
import { StreamApprovalComponent } from './stream-approval/stream-approval.component';
import { ResidentialRentStreamComponent } from './stream-view/residential-rent-stream/residential-rent-stream.component';
import { ResidentialRentComponent } from './admin-property-view/residential-rent/residential-rent.component';
import { ResidentialSaleComponent } from './admin-property-view/residential-sale/residential-sale.component';
import { CommercialRentComponent } from './admin-property-view/commercial-rent/commercial-rent.component';
import { CommercialSaleComponent } from './admin-property-view/commercial-sale/commercial-sale.component';

const routes: Routes = [
  { path: 'manage-seller-owner', component: ManageSellerOwnerComponent },
      { path: 'manage-buyer-tenant', component: ManageBuyerTenantComponent },
      { path: 'manage-post', component: ManagePostComponent },
      { path: 'stream-approval',children:[
        {path:'',component: StreamApprovalComponent },
        {path:'stream-view',component:ResidentialRentStreamComponent},
      ] },
      { path: 'manage-plan', children:[
        {path:'', component: ManagePlanComponent},
        {path:'add-plan', component: AddPlanComponent},
      ]  },
      { path: 'manage-faq', component: ManageFaqComponent },
      { path: 'manage-enquiry', component: ManageEnquiryComponent },
      { path: 'reported-posts', component: ReportedPostComponent },
      { path: 'residential-rent', component: ResidentialRentComponent },
      { path: 'residential-sale', component: ResidentialSaleComponent },
      { path: 'commercial-rent', component: CommercialRentComponent },
      { path: 'commercial-sale', component: CommercialSaleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingRoutingModule { }
