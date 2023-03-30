import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { SellerService } from '../seller.service';

@Component({
  selector: 'app-createpasswordseller',
  templateUrl: './createpasswordseller.component.html',
  styleUrls: ['./createpasswordseller.component.css']
})
export class CreatepasswordsellerComponent implements OnInit {

  id: any;
  password = this.fb.group({
    password: new FormControl('', Validators.required),
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
    if (this.password.valid) {
      this.sellerService.createPassword(this.id, this.password.value).subscribe((res: any) => {
        this.isSubmit=false;
        this.route.navigate(['/sellerLogin'])
      })
    }

  }
  mismatch=false;
  incorrect(event:any){
    if(this.password.get('password')?.value != this.password.get('confirmPassword')?.value){
      this.mismatch=true;
    }else{
      this.mismatch=false;
    }
  }
}
