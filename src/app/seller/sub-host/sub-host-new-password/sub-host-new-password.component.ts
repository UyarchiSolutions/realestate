import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubHostService } from '../sub-host.service';
import { StrongPasswordValidator } from 'src/app/buyer/createpassword/password.validator';

@Component({
  selector: 'app-sub-host-new-password',
  templateUrl: './sub-host-new-password.component.html',
  styleUrls: ['./sub-host-new-password.component.css']
})
export class SubHostNewPasswordComponent implements OnInit {

  constructor(private router:Router,private arouter:ActivatedRoute,
    private service: SubHostService){

  }
  number:any;
  submitted=false;
  form:any= new FormGroup({
    password:new FormControl('',[Validators.required,StrongPasswordValidator]),
    confirmPassword:new FormControl('',Validators.required),

  } )
  ngOnInit(): void {
  this.arouter.queryParams.subscribe((res:any)=>{
    this.number=res['num']
  })
  }
  isSubmit=false;
  notsame=false;
  submit(){
    this.isSubmit=true
    // this.form.get('password')?.value == this.form.get('confirmPassword')?.value
    console.log(this.form.get('password')?.value, this.form.get('confirmPassword')?.value, this.form.get('password')?.value == this.form.get('confirmPassword')?.value)
    if(this.form.get('password')?.value != this.form.get('confirmPassword')?.value){
      this.notsame=true
    }
    if(this.form.valid && this.form.get('password')?.value == this.form.get('confirmPassword')?.value ){
      let data={
        mobileNumber:this.number,
        password:this.form.get('password')?.value
      }
      this.isSubmit=false
      this.notsame=false
      this.service.new_password(data).subscribe((res:any)=>{
        console.log(res)
        this.router.navigateByUrl('/sub-host-login')
      })
    }
  }
  get passwordControl() {
    return this.form.controls;
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
