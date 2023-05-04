import { Component, OnInit } from '@angular/core';
import { SubHostService } from '../sub-host.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-host-forgot-otp',
  templateUrl: './sub-host-forgot-otp.component.html',
  styleUrls: ['./sub-host-forgot-otp.component.css']
})
export class SubHostForgotOtpComponent implements OnInit {
constructor(private serivce:SubHostService,private router:Router,private arouter:ActivatedRoute){
  
}
form:any=new FormGroup({
  otp: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
})
number:any;
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((res:any)=>{
      this.number=res['num']
    })
  }
  data:any;
  submit=false;
  noOtp=false
  sendOtp(){
    this.submit=true;
    if(this.form.valid){
    this.serivce.verfiy_otp(this.form.value).subscribe((res:any)=>{
      console.log(res)
      this.data=res.user._id
      console.log(this.data)

      let data={
        num:this.number
      }
      let query= new URLSearchParams(data).toString();
      this.router.navigateByUrl('/sub-host-new-password?' + query)
    },error =>{
      if(error.error.message == 'Otp Not Found OR Used'){
        this.noOtp=true
      }
    }
    )
  }
 }
 reSendOtp(){
  let data={
    mobileNumber:this.number
  }
  this.serivce.register(data).subscribe((res:any)=>{
    console.log(res)
  })
 }
}
