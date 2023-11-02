import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.css']
})
export class AddPlanComponent implements OnInit {
  submitted=false
  constructor(private fb:FormBuilder,private service:AdminService,private router:Router){
    
  }
  ngOnInit(): void {
    
  }
  myform:any=this.fb.group({
    userType:new FormControl(),
    planName: new FormControl('', Validators.required),
    Duration: new FormControl('', Validators.required),
    DurationType: new FormControl('', Validators.required),
    numberOfParticipants: new FormControl('', Validators.required),
    numberofStream: new FormControl('', Validators.required),
    validityofplan: new FormControl('', Validators.required),
    // additionalDuration: new FormControl(''),
    // additionalParticipants: new FormControl(''),
    // DurationIncrementCost: new FormControl(''),
    // noOfParticipantsCost: new FormControl(''),
    chat_Option: new FormControl('', Validators.required),
    // commision: new FormControl('', Validators.required),
    // commition_value: new FormControl(''),
    regularPrice: new FormControl('', Validators.required),
    // salesPrice: new FormControl('', Validators.required),
    // max_post_per_stream: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    planmode: new FormControl('', Validators.required),
    no_of_host: new FormControl('', Validators.required),
    transaction: new FormControl('', Validators.required),

    planType: new FormControl('', Validators.required),
    streamvalidity: new FormControl('', Validators.required),
    offer_price: new FormControl('', Validators.required),
    PostCount: new FormControl('', Validators.required),
    RaiseHands: new FormControl('', Validators.required),
    raisehandcontrol: new FormControl('', Validators.required),
    completedStream: new FormControl('', Validators.required),
    Candidate_Contact_reveal: new FormControl('', Validators.required),
    Pdf: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    Teaser: new FormControl('', Validators.required),
    Special_Notification: new FormControl('', Validators.required),
    Service_Charges: new FormControl('', Validators.required),
    // TimeType: new FormControl('', Validators.required),
  })
  submit(){
    console.log(this.myform.value)
   
      this.service.add_Plan(this.myform.value).subscribe((res:any)=>{
        console.log(res);
        this.router.navigateByUrl('/admin/manage-plan')
      })
     
   
  }
  raisehandVal: any = null;
  raiseHandControl(e: any) {
    let val = e.target.value;
    this.raisehandVal = val;
    if (val == 'No') {
      this.myform.get('raisehandcontrol')?.setErrors(null);
    }
  }
  completedStream: any = null;
  completedStreamControl(e: any) {
    let val = e.target.value;
    this.completedStream = val;
    if (val == 'No') {
      this.myform.get('streamvalidity')?.setErrors(null);
      this.myform.get('DurationType')?.setErrors(null);
    }
  }

}
