import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyer-sendotp',
  templateUrl: './buyer-sendotp.component.html',
  styleUrls: ['./buyer-sendotp.component.css'],
})
export class BuyerSendotpComponent implements OnInit {
  ForgotPassword = this.fb.group({
    otp: new FormControl('', Validators.required),
    type: new FormControl('Buyer'),
  });
  number: any;
  show = false;
  notfound = false;
  id: any;
  errormsg: any;
  remainingTime: number = 60;
  private intervalId: any;
  recentShow: any = false;
  constructor(
    private fb: FormBuilder,
    private buyerService: BuyerService,
    private route: Router,
    private arouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((params) => {
      console.log(params);
      this.number = params['number'];
    });
    this.startTimer();
  }
  isSubmit=false
  submitOTP() {
    this.isSubmit = true;
   
    if (this.ForgotPassword.get('otp')?.valid) {
      this.buyerService
        .otp_send({
          otp: this.ForgotPassword.get('otp')?.value,
          type: this.ForgotPassword.get('type')?.value,
        })
        .subscribe(
          (data: any) => {
            this.isSubmit = false;
            this.show = true;
            this.id = data.value._id;
            this.route.navigate(['/buyer-update'], {
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
    this.notfound=false
    this.isSubmit=false
    this.ForgotPassword.get('otp')?.reset()
    this.number = parseInt(this.number);

    let data = {
      number: this.number,
      resend: true,
    };
    this.buyerService.sentOtp(data).subscribe((res: any) => {
      this.recentShow = false;
      this.remainingTime = 60;
      this.startTimer();
    });
  }
  errmsg() {
    this.notfound = false;
  }
  get formcontrol(){
    return this.ForgotPassword.controls;
  }
}
