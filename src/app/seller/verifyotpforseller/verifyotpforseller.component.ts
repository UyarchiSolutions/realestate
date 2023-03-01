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
  constructor(private fb:FormBuilder,private sellerSerivece:SellerService,private route:Router,private activateRouter:ActivatedRoute ) { }
  ngOnInit() {
    this.activateRouter.queryParams.subscribe((res: Params) => {
      this.mobile = res['mobile'];
      localStorage.setItem('mobile', this.mobile)
      console.log(this.mobile)
      this.getMobile(this.mobile)
    })
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
     })

  }
  isSubmitted: any = false;
  already=false;
  submitOTP() {
    this.isSubmitted = true;
    if (this.otp_Form.valid) {
      this.sellerSerivece.getOtp(this.otp_Form.value).subscribe((res: any) => {
        this.isSubmitted = false;
        this.route.navigate(['/createPassword'], { queryParams: { id: res._id } })
      })
    }

  }
  resend(){
    const a={
      number:this.mobile,
      resend:true
    }
    this.sellerSerivece.sendOtptoMobile(a).subscribe((res:any) => {

    })
  }
}
