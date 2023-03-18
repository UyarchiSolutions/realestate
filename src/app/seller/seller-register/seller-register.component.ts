import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent {
  isSubmit=false;
  loginForm=this.fb.group({
    userName:new FormControl('', Validators.required),
    mobile:new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
    email:new FormControl('',[Validators.required,Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    Type:new FormControl('Seller'),
    ownerType:new FormControl('', Validators.required)
    // otp:new FormControl('', Validators.required)
  });
  // otp_Form=this.fb.group({
  //   otp:new FormControl('', Validators.required)
  // });
  submit=false;
  constructor(private fb:FormBuilder,private sellerSerivece:SellerService,private route:Router ) { }

  ngOnInit(){

  }
  verfiyemail=false;
  mailAlready=false;
  mobile=false;
  onSubmitted(){
    this.isSubmit=true;
    if(this.loginForm.valid){
      this.sellerSerivece.registation(this.loginForm.value).subscribe((res:any) => {
        this.verfiyemail=true;
        this.isSubmit=true;

      },error => {
       if(error.error.message == 'email Already Registered'){
        this.mailAlready=true
       }else{
        this.mailAlready=false
       }
       if(error.error.message == 'Mobile Already registered'){
        this.mobile=true
       }else{
        this.mobile=false;

       }
      })
      this.route.navigate(['/check-mail'])
    }

  }
  routeToHome(){
    this.route.navigateByUrl('/');
  }
  routeToLog(){
    this.route.navigateByUrl('/sellerLogin')
  }
}
