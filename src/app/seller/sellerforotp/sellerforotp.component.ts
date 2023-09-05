import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-sellerforotp',
  templateUrl: './sellerforotp.component.html',
  styleUrls: ['./sellerforotp.component.css'],
})
export class SellerforotpComponent implements OnInit {
  ForgotPassword = this.fb.group({
    otp: new FormControl('', Validators.required),
    type: new FormControl('Seller'),
  });
  show = false;
  notfound = false;
  number: any;
  id: any;
  remainingTime: number = 60;
  private intervalId: any;
  recentShow: any = false;
  errormsg: any;
  constructor(
    private fb: FormBuilder,
    private sellerService: SellerService,
    private route: Router,
    private arouter: ActivatedRoute
  ) {}
  ngOnInit() {
    this.arouter.queryParams.subscribe((params) => {
      console.log(params);
      this.number = params['number'];
    });
    this.startTimer();
  }
  submitOTP() {
    console.log('working,Invalid OTP');
    if (this.ForgotPassword.get('otp')?.valid) {
      this.sellerService
        .otp_send({
          otp: this.ForgotPassword.get('otp')?.value,
          type: this.ForgotPassword.get('type')?.value,
        })
        .subscribe(
          (data: any) => {
            this.show = true;
            this.id = data.value._id;
            this.route.navigate(['/updatePassword-seller'], {
              queryParams: { id: this.id },
            });
          },
          (error) => {
            console.log(error);
            this.notfound = true;
            this.errormsg = error.error.message;
          }
        );
    }
  }

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

  ResendOtp() {
    this.number = parseInt(this.number);

    let data = {
      number: this.number,
      resend: true,
    };
    this.sellerService.sentOtp(data).subscribe((res: any) => {
      this.recentShow = false;
      this.remainingTime = 60;
      this.startTimer();
    });
  }
  errmsg() {
    this.notfound = false;
  }
}
