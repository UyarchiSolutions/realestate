import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sub-host-change-password',
  templateUrl: './sub-host-change-password.component.html',
  styleUrls: ['./sub-host-change-password.component.css']
})
export class SubHostChangePasswordComponent implements OnInit {
constructor(private fb:FormBuilder){
  
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  changeFrom:any =this.fb.group({
    oldPassword:new FormControl('',Validators.required),
    newPassword:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),
    password:new FormControl(),
  });
  oldPassword=false;
  notMatch=false;
}
