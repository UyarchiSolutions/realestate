import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private fb: FormBuilder, private buyerService: BuyerService, private route: Router,
    private arouter:ActivatedRoute) { }

    next:any;
  ngOnInit() {
    this.arouter.queryParams.subscribe((params)=>{
      console.log(params)
      this.next=params["next"]

    })
    console.log(this.next)
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
  Emailnotfound=false;
  deActive:any
  submitted() {
    
    this.emailSubmit = true;
    this.loginForm.patchValue({
      Type: "Buyer"
    })
    if (this.loginForm.valid) {
      this.buyerService.Submit(this.loginForm.value).subscribe((res: any) => {
        this.emailSubmit = false;
        this.setCookie(res.token.access.token);
        // this.route.navigate(['/'])
        if(this.next){
          this.route.navigateByUrl('/')
        }else{ window.history.back();}
       
      }, error => {
        if (error.error.status != 401) {

        }
        if (error.error.message == "User Not Available") {
          this.notfound = true
        }
        if (error.error.message == "Email not Registered") {
          this.Emailnotfound = true
        }
        if (error.error.message == "Account has been inactive / deactivated") {
          this.deActive = "Account has been Deactivated"
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
  forgotPass(){
    this.route.navigate(['/buyer-forgot'])
   }
   routeToReg(){
    this.route.navigateByUrl('register')
   }
   routeToHome(){
    this.route.navigateByUrl('/')
   }
   errormsg(){
    this.Emailnotfound = false;
    this.notfound=false;
    this.deActive=''
   }
   show1:boolean=false;
   show2:boolean=false;
   change1(){
     this.show1=!this.show1
    }
    change2(){
     this.show2=!this.show2
    }
}
