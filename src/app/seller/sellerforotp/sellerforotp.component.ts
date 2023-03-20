import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/buyer/buyer.service';


@Component({
  selector: 'app-sellerforotp',
  templateUrl: './sellerforotp.component.html',
  styleUrls: ['./sellerforotp.component.css']
})
export class SellerforotpComponent {
  ForgotPassword = this.fb.group({
    otp: new FormControl('', Validators.required),
    type: new FormControl('Buyer')
  })
  show = false;
  id: any;
  constructor(private fb: FormBuilder, private buyerService: BuyerService, private route: Router) { }
  submitOTP() {
    console.log("working")
    if (this.ForgotPassword.get('otp')?.valid) {
      this.buyerService.otp_send({ otp: this.ForgotPassword.get('otp')?.value, type: this.ForgotPassword.get('type')?.value }).subscribe((data: any) => {
        this.show = true;
        this.id = data.value._id
        this.route.navigate(['/updatePassword-seller'],{queryParams:{id:this.id}})
      })
    }
  }
}
