import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-verifyotpforseller',
  templateUrl: './verifyotpforseller.component.html',
  styleUrls: ['./verifyotpforseller.component.css']
})
export class VerifyotpforsellerComponent {
  otp_Form = this.fb.group({
    otp: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{1}[0-9]{5}$'),
    ]),
    type: new FormControl("Seller")
  });
  mobile: any;
  notfound: any;
  constructor(private fb:FormBuilder,private sellerSerivece:SellerService,private route:Router,private activateRouter:ActivatedRoute ) { }
  ngOnInit() {
    this.activateRouter.queryParams.subscribe((res: Params) => {
      this.mobile = res['mobile'];
      localStorage.setItem('mobile', this.mobile)
      console.log(this.mobile)
      this.getMobile(this.mobile)
    })
    this.startTimer()
  }
  getMobile(number: any) {
    const a = {
      number: number
    }
    this.sellerSerivece.sendOtptoMobile(a).subscribe((res: any) => {

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
  isSubmitted: any = false;
  already=false;
  errormsg:any
  submitOTP() {
    this.isSubmitted = true;
    if (this.otp_Form.valid) {
      this.sellerSerivece.getOtp(this.otp_Form.value).subscribe((res: any) => {
        this.isSubmitted = false;
        this.route.navigate(['/createPassword-seller'], { queryParams: { id: res._id } })
      },
      (error) => {
        console.log(error);
        this.notfound = true;
        this.errormsg = error.error.message;
      })
    }

  }
  resend(){
    this.notfound=false
    this.otp_Form.get('otp')?.reset()
    this.isSubmitted=false
    const a={
      number:this.mobile,
      resend:true
    }
    this.sellerSerivece.sendOtptoMobile(a).subscribe((res:any) => {
      this.recentShow = false;
      this.remainingTime = 60;
      this.startTimer();
    })
  }
  errmsg(){
    this.notfound=false;
  }
  remainingTime: number = 60;
  private intervalId: any;
  recentShow: any = false;
  startTimer() {
    this.intervalId = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        this.clearTimer();
        // Timer expired, perform necessary actions

        this.recentShow = true;
      }
    }, 1000); // Update every second (1000 milliseconds)
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

}
