import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyer-sendotp',
  templateUrl: './buyer-sendotp.component.html',
  styleUrls: ['./buyer-sendotp.component.css']
})
export class BuyerSendotpComponent {
  ForgotPassword = this.fb.group({
    otp: new FormControl('', Validators.required),
    type: new FormControl('Buyer')
  })
  show = false;
  id: any;
  constructor(private fb: FormBuilder, private buyerService: BuyerService, private route: Router) { }
  submitOTP() {
    if (this.ForgotPassword.get('otp')?.invalid) {
      this.buyerService.otp_send({ otp: this.ForgotPassword.get('otp')?.value, type: this.ForgotPassword.get('type')?.value }).subscribe((data: any) => {
        this.show = true;
        this.id = data.value._id
        this.route.navigate(['/buyer-update'],{queryParams:{id:this.id}})
      })
    }
  }
}
