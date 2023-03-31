import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loginForm = this.fb.group({
    userName: new FormControl('', Validators.required),
    mobile: new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
    email: new FormControl('',[Validators.required,Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    Type: new FormControl('Buyer'),
    Role: new FormControl('', Validators.required)
  });
  otp_Form = this.fb.group({
    otp: new FormControl('', Validators.required)
  });
  verfiyemail=false;
  mailAlready=false;
  mobile=false;
  submit = false;
  isSubmitted=false;
  constructor(private fb: FormBuilder, private buyerService: BuyerService, private route: Router) { }

  ngOnInit() {

  }

  onSubmitted() {
  this.isSubmitted=true;
    if (this.loginForm.valid) {
      this.buyerService.registation(this.loginForm.value).subscribe((res: any) => {
        this.verfiyemail = true;
        this.isSubmitted=false
        this.route.navigate(['/check-mail'])
        
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
    }

  }
  routeToLog(){
    this.route.navigateByUrl('/buyerLogin');
  }
  routeToHome(){
    this.route.navigateByUrl('/');
  }
  errmsg(){
    this.mobile=false;
    this.mailAlready=false
  }
}
