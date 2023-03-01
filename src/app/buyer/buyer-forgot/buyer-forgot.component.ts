import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyer-forgot',
  templateUrl: './buyer-forgot.component.html',
  styleUrls: ['./buyer-forgot.component.css']
})
export class BuyerForgotComponent {
  ForgotPassword = this.fb.group({
    number: new FormControl('',Validators.required),
    // otp: new FormControl(''),
    type: new FormControl('Buyer')
  })
  password = this.fb.group({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  })
  isDisplay=false;
  constructor(private fb: FormBuilder, private buyerService: BuyerService, private route: Router) { }


  submitOTP() {
    this.isDisplay=true;
    const a={
      number:this.ForgotPassword.get('number')?.value
    }
    if(this.ForgotPassword.valid){
      this.buyerService.forgot_otp(a).subscribe((res: any) => {
        this.route.navigate(['/buyer-sendotp'])
       this.isDisplay=true;
      })
    }

  }

  show = false
  id: any;
  // submitOTP(){
  //  this.buyerService.otp_send({otp:this.ForgotPassword.get('otp')?.value,type:this.ForgotPassword.get('type')?.value}).subscribe((data:any) => {
  //  this.show=true;
  //  this.id=data.value._id
  //  })
  // }

}
