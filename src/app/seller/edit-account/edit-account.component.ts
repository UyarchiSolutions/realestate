import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  constructor( private router:Router,private service:SellerService,private fb:FormBuilder){

  }
  data:any=[];
  form:any = this.fb.group({
    userName: new FormControl(this.data.userName,Validators.required),
    email:  new FormControl(this.data.email,Validators.required),
    mobile: new FormControl(this.data.mobile,Validators.required),
    Type:new FormControl('',Validators.required)

    
  })
  ngOnInit(){
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res);
      this.data= res;
    })
  }
  editAccount(){
    this.router.navigateByUrl('/edit-account')
  }
  submit(){
    console.log(this.form.value)
    this.service.editAccountSeller(this.form.value).subscribe((res:any)=>{
      console.log(res);
      this.router.navigateByUrl('/my-account')
    })
  }

}
