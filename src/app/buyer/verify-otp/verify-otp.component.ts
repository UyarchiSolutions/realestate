import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {
  otp_Form=this.fb.group({
    otp:new FormControl('',[
      Validators.required,
      Validators.pattern('^[0-9]{1}[0-9]{5}$'),
    ]),
    type: new FormControl("Buyer")
  });
  mobile:any;
  notfound: any;
  constructor(private fb:FormBuilder,private loginService:BuyerService,private activateRoute:ActivatedRoute,private route:Router) { }
  ngOnInit() {
    this.activateRoute.queryParams.subscribe((res:Params) => {
      this.mobile=res['mobile'];
      localStorage.setItem('mobile', this.mobile)

    })
    this.getMobile(this.mobile);
  }
  already=false;
  getMobile(number:any){
    const a={
      number:number
    }
    this.loginService.sendOtptoMobile(a).subscribe((res:any) => {

    },error =>{
     if(error.error.message == "OTP Already Send, Click Resend Otp"){
     this.already=true
     }else{
      this.already=false;
     }
     if(error.error.message == "Invalid OTP"){

      this.notfound=true;
    }
    })

  }
  isSubmit=false;
  submitOTP(){
    this.isSubmit=true;
    if(this.otp_Form.valid){
      this.loginService.getOtp(this.otp_Form.value).subscribe((res:any) =>{
        this.isSubmit=false;
        this.route.navigate(['/createPassword'],{queryParams:{id:res._id}})
      })
    }

  }
  resend(){
    const a={
      number:this.mobile,
      resend:true
    }
    this.loginService.sendOtptoMobile(a).subscribe((res:any) => {

    })
  }
  errmsg(){
    this.notfound=false;
  }
}
