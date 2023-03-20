import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';

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
  constructor(private fb:FormBuilder,private sellerSerivece:SellerService,private route:Router ) { }

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

  notfound=false;
  submitted(){
    console.log('working');
    this.emailSubmit=true
    this.loginForm.patchValue({
      Type:"Seller"
    })
    if(this.loginForm.valid){
      this.sellerSerivece.Submit(this.loginForm.value).subscribe((res:any)=>{
        this.emailSubmit=false;
        this.setCookie(res.token.access.token);

            this.route.navigate(['/owner'])
      },error => {
        if(error.error.message == "User Not Available"){
          this.notfound=true;
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
  
}
