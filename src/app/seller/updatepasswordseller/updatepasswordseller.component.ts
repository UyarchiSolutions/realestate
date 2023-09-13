import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {SellerService} from '../seller.service';
import { StrongPasswordValidator } from 'src/app/buyer/createpassword/password.validator';

@Component({
  selector: 'app-updatepasswordseller',
  templateUrl: './updatepasswordseller.component.html',
  styleUrls: ['./updatepasswordseller.component.css']
})
export class UpdatepasswordsellerComponent {
  password = this.fb.group({
    password: new FormControl('',[Validators.required,StrongPasswordValidator]),
    confirmPassword: new FormControl('',Validators.required),
  })
  isDisplay=false;
  matchPas=false;
  isSubmit=false
  id:any;
  constructor(private fb: FormBuilder, private SellerService: SellerService, private route: Router,private activate_router:ActivatedRoute) { }
  ngOnInit() {
   this.activate_router.queryParams.subscribe((res:Params) =>{
    this.id=res['id'];
   })
   
  }
  changePassword() {
    this.isSubmit=true
    if( !(this.password.get('confirmPassword')?.value == this.password.get('password')?.value) ){
      this.matchPas=true;
    }

    if(this.password.valid&& this.password.get('password')?.value == this.password.get('confirmPassword')?.value ){
      this.matchPas=false;
    let data={
      password:this.password.get('password')?.value,
      type:'Seller'
    }
    this.SellerService.changePassword(this.id, data).subscribe((data: any) => {
      console.log(data)
      this.isSubmit=false
     this.route.navigate(['/sellerLogin'])
    })
  }
  }
  errorMsg(){
    this.matchPas=false;
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

}
