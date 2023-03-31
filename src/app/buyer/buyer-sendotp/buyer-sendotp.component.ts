import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyer-sendotp',
  templateUrl: './buyer-sendotp.component.html',
  styleUrls: ['./buyer-sendotp.component.css']
})
export class BuyerSendotpComponent implements OnInit {
  ForgotPassword = this.fb.group({
    otp: new FormControl('', Validators.required),
    type: new FormControl('Buyer')
  })
  number:any;
  show = false;
  notfound=false;
  id: any;
  constructor(private fb: FormBuilder, private buyerService: BuyerService, private route: Router,private arouter:ActivatedRoute) { }
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((params) => {
      console.log(params);
      this.number = params['number'];
     
      
    });
  }
  submitOTP() {
    console.log("working")
    if (this.ForgotPassword.get('otp')?.valid) {
      this.buyerService.otp_send({ otp: this.ForgotPassword.get('otp')?.value, type: this.ForgotPassword.get('type')?.value }).subscribe((data: any) => {
        this.show = true;
        this.id = data.value._id
        this.route.navigate(['/buyer-update'],{queryParams:{id:this.id}})
      },error => {
        console.log(error);
        if(error.error.message == "Invalid OTP"){

          this.notfound=true;
        }
      }
      )
    }
  }
  ResendOtp(){
    this.number = parseInt(this.number);
    
    let data={
      number:this.number,
    resend:true
    }
    this.buyerService.sentOtp(data).subscribe((res:any)=>{
     
    })
  }
  errmsg(){
    this.notfound=false;
  }
}
