import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  loginForm=this.fb.group({
    email:new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('', Validators.required),
    Type:new FormControl()
  });

  emailSubmit=false;
  constructor(private fb:FormBuilder,private sellerSerivece:SellerService,private route:Router,private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  genterateOtp(val:any){
    console.log(val.target.value.length,"working")
     if(val.target.value.length == 10){
     this.checkMobileno(val.target.value)
     }
  }
  checkMobileno(phone:any){
    const a={
      number:parseInt(phone)
    }
      this.sellerSerivece.sentOtp(a).subscribe((res:any) =>{

      })
  }
  display:any=false;
  Emailnotfound =false;
  notfound=false;
  deActive:any
  submitted(){
    console.log('working');
    this.emailSubmit=true;
    this.loginForm.patchValue({
      Type:"Seller"
    })
    if(this.loginForm.valid){
      this.sellerSerivece.Submit(this.loginForm.value).subscribe((res:any)=>{
        this.emailSubmit=false;
        this.setCookie(res.token.access.token);

        // this.toastr.success('Login to your Post Property', 'Toastr fun!',{timeOut: 3000,});
            this.route.navigate(['/owner'])
      },error => {
        console.log(error);
        if(error.error.message == "User Not Available"){
          // this.loginForm.get('password')?.reset();
          this.notfound=true;
        }
        if (error.error.message == "Email not Registered") {
          this.Emailnotfound = true;
          // this.loginForm.get('email')?.reset();
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
    document.cookie = `tokens=${token}; ${expires}`;
  }
  forgot(){
    this.route.navigate(['/sendMobile-seller'])
  }
  routeToHome(){
    this.route.navigateByUrl('/');
  }
  routeToReg(){
    this.route.navigateByUrl('/seller-register')
  }
  errormsg(){
    this.Emailnotfound = false;
    this.notfound=false;
    this.deActive=''
    this.emailSubmit=false;
   }
   routeTohost(){
    this.route.navigateByUrl('/sub-host-login');
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
