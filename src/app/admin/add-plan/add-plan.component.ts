import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:AdminService,private router:Router){
    
  }
  ngOnInit(): void {
    
  }
  myform:any=this.fb.group({
    userType: new FormControl(),
    planType:new FormControl(),
    planeName:new FormControl(),
    planMode:new FormControl(),
    no_of_Stream:new FormControl(),
    no_of_host_per_Stream:new FormControl(),
    Duration_per_stream:new FormControl(),
    Entry_Permit_to_participants:new FormControl(),
    No_buyer_contact_Reveals:new FormControl(),
    No_of_participants_Limit:new FormControl(),
    validity_of_plan:new FormControl(),
    Stream_validity:new FormControl(),
    Regular_Price:new FormControl(),
    Offer_Price:new FormControl(),
    Chat_Needed:new FormControl(),
    post_Stream:new FormControl(),
    service_Charges:new FormControl(),
    Description:new FormControl(),
  })
  submit(){
    console.log(this.myform.value)
    this.service.add_Plan(this.myform.value).subscribe((res:any)=>{
      console.log(res);
      this.router.navigateByUrl('/admin/manage-plan')
    })
  }

}
