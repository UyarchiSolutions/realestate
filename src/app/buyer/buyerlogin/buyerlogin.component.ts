import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyerlogin',
  templateUrl: './buyerlogin.component.html',
  styleUrls: ['./buyerlogin.component.css']
})
export class BuyerloginComponent {
  loginForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', Validators.required),
    Type: new FormControl()
  });
  emailSubmit = false;
  constructor(private fb: FormBuilder, private buyerService: BuyerService, private route: Router) { }

  ngOnInit() {
    console.log("kfnjvgdfjkhngdfjkbghjk")
  }

  genterateOtp(val: any) {
    console.log(val.target.value.length, "working")
    if (val.target.value.length == 10) {
      this.checkMobileno(val.target.value)
    }
  }
  checkMobileno(phone: any) {
    const a = {
      number: parseInt(phone)
    }
    this.buyerService.sentOtp(a).subscribe((res: any) => {

    })
  }
  display: any = false;
  notfound = false;
  submitted() {
    console.log("sdklsjjksfjk")
    this.emailSubmit = true;
    this.loginForm.patchValue({
      Type: "Buyer"
    })
    if (this.loginForm.valid) {
      this.buyerService.Submit(this.loginForm.value).subscribe((res: any) => {
        this.emailSubmit = false;
        this.setCookie(res.token.access.token);
        this.route.navigate(['/manageApprove'])
      }, error => {
        if (error.error.status != 401) {

        }
        if (error.error.message == "User Not Available") {
          this.notfound = true
        }
      })
    }

  }
  setCookie(token: any) {
    let d: Date = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    let expires: string = `expires=${d.toUTCString()}`;
    document.cookie = `buyer=${token}; ${expires}`;
  }
}
