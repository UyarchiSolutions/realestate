import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SubHostService } from '../sub-host.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-host-change-password',
  templateUrl: './sub-host-change-password.component.html',
  styleUrls: ['./sub-host-change-password.component.css']
})
export class SubHostChangePasswordComponent implements OnInit {
constructor(private fb:FormBuilder,private service:SubHostService
  ,private router:Router){
  
}
  ngOnInit(): void {
   
  }
  form:any =this.fb.group({
    oldPassword:new FormControl('',Validators.required),
    newPassword:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),
   
  });
  oldPassword=false;
  notMatch=false;
  change(){
    this.notMatch=true
    if(this.form.valid && this.form.get('newPassword')?.value==this.form.get('confirmPassword')?.value){
      this.notMatch=false
   
      let data={
        oldPassword:this.form.get('oldPassword')?.value,
        password:this.form.get('confirmPassword')?.value
      }
      this.service.change_password(data).subscribe((res:any)=>{
        console.log(res)
        this.router.navigateByUrl('/sub-host-streams')
      },error =>{
        console.log(error)
        if(error.error.message=='Old Password Is Wrong'){
          this.oldPassword=true;
        }
      })
    }
  }
}
