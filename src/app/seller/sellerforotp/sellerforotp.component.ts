import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SellerService} from '../seller.service';

@Component({
  selector: 'app-sellerforotp',
  templateUrl: './sellerforotp.component.html',
  styleUrls: ['./sellerforotp.component.css']
})
export class SellerforotpComponent {
  ForgotPassword = this.fb.group({
    otp: new FormControl('', Validators.required),
    type: new FormControl('Seller')
  })
  show = false;
  id: any;
  constructor(private fb: FormBuilder, private sellerService: SellerService, private route: Router) { }
  submitOTP() {
    console.log("working")
    if (this.ForgotPassword.get('otp')?.valid) {
      this.sellerService.otp_send({ otp: this.ForgotPassword.get('otp')?.value, type: this.ForgotPassword.get('type')?.value }).subscribe((data: any) => {
        this.show = true;
        this.id = data.value._id
        this.route.navigate(['/updatePassword-seller'],{queryParams:{id:this.id}})
      })
    }
  }
}
