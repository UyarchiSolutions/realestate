import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {SellerService} from '../seller.service';

@Component({
  selector: 'app-sellerforotp',
  templateUrl: './sellerforotp.component.html',
  styleUrls: ['./sellerforotp.component.css']
})
export class SellerforotpComponent implements OnInit {
  ForgotPassword = this.fb.group({
    otp: new FormControl('', Validators.required),
    type: new FormControl('Seller')
  })
  show = false;
  notfound=false;
  number:any;
  id: any;
  constructor(private fb: FormBuilder, private sellerService: SellerService, private route: Router, private arouter:ActivatedRoute) { }
  ngOnInit() {
    this.arouter.queryParams.subscribe((params) => {
      console.log(params);
      this.number = params['number'];
     
      
    });
  }
  submitOTP() {
    console.log("working,Invalid OTP")
    if (this.ForgotPassword.get('otp')?.valid) {
      this.sellerService.otp_send({ otp: this.ForgotPassword.get('otp')?.value, type: this.ForgotPassword.get('type')?.value }).subscribe((data: any) => {
        this.show = true;
        this.id = data.value._id
        this.route.navigate(['/updatePassword-seller'],{queryParams:{id:this.id}})
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
    this.sellerService.sentOtp(data).subscribe((res:any)=>{
     
    })
  }
  errmsg(){
    this.notfound=false;
  }
}
