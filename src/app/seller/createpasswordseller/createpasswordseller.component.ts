import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { SellerService } from '../seller.service';
import { StrongPasswordValidator } from 'src/app/buyer/createpassword/password.validator';

@Component({
  selector: 'app-createpasswordseller',
  templateUrl: './createpasswordseller.component.html',
  styleUrls: ['./createpasswordseller.component.css']
})
export class CreatepasswordsellerComponent implements OnInit {

  id: any;
  password = this.fb.group({
    password: new FormControl('', [Validators.required,StrongPasswordValidator]),
    confirmPassword: new FormControl('', Validators.required),
  })
  constructor(private fb: FormBuilder, private sellerService: SellerService, private route: Router,private active:ActivatedRoute) { }
  ngOnInit() {
    this.active.queryParams.subscribe((res: any) => {
      this.id = res['id'];
    })
  }
  isSubmit=false;
  submitOTP() {
    this.isSubmit=true;
    this.incorrect()
    if (this.password.valid && this.password.get('password')?.value == this.password.get('confirmPassword')?.value ) {
      this.sellerService.createPassword(this.id, this.password.value).subscribe((res: any) => {
        this.isSubmit=false;
        this.incorrect()
        this.route.navigate(['/sellerLogin'])
      })
    }

  }
  mismatch=false;
  incorrect(){
    if(this.password.valid && this.password.get('password')?.value != this.password.get('confirmPassword')?.value){
      this.mismatch=true;
    }else{
      this.mismatch=false;
    }
  }
  show1:boolean=false;
  show2:boolean=false;
  change1(){
    this.show1=!this.show1
   }
   change2(){
    this.show2=!this.show2
   }
   get passwordControl() {
    return this.password.controls;
  }
  err(){
    this.mismatch=false
  }
}
