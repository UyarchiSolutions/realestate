import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{SellerService} from '../seller.service';

@Component({
  selector: 'app-sellerformobile',
  templateUrl: './sellerformobile.component.html',
  styleUrls: ['./sellerformobile.component.css']
})
export class SellerformobileComponent {
  ForgotPassword = this.fb.group({
    number: new FormControl('',Validators.required),
    // otp: new FormControl(''),
    type: new FormControl('Seller')
  })
  password = this.fb.group({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  })
  isDisplay=false;
  notfound=false;
  number:any;
  constructor(private fb: FormBuilder, private SellerService: SellerService, private route: Router) { }
  submitOTP() {
    
    this.isDisplay=true;
    const a={
      number:this.ForgotPassword.get('number')?.value,
      Type:'Seller'
    }
    if(this.ForgotPassword.valid){
      this.SellerService.forgot_otp(a).subscribe((res: any) => {
        this.number=this.ForgotPassword.get('number')?.value;
        var data={
          number:this.number
        };
        const querystring = new URLSearchParams(data).toString();
        this.route.navigateByUrl('/sent-otp?' + querystring)
       this.isDisplay=true;
      },error => {
        console.log(error);
        if(error.error.message == "Mobile Number Not Registered"){

          this.notfound=true;
        }}
      )
    }

  }
  errMsg(){
    this.notfound=false;
  }
}
