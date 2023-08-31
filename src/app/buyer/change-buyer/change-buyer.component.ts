import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyerService } from '../buyer.service';
import { StrongPasswordValidator } from '../createpassword/password.validator';

@Component({
  selector: 'app-change-buyer',
  templateUrl: './change-buyer.component.html',
  styleUrls: ['./change-buyer.component.css']
})
export class ChangeBuyerComponent {
  isSubmit=false;
  changeFrom:any =this.fb.group({
    oldPassword:new FormControl('',Validators.required),
    newPassword:new FormControl('',[Validators.required,StrongPasswordValidator]),
    confirmPassword:new FormControl('',Validators.required)
  });
  constructor(private fb: FormBuilder, private buyerService: BuyerService, private route: Router) { }
  notMatch=false;
  ngOnInit() {

  }
  throughError(val:any){
    if(this.changeFrom.get('newPassword').value !=val.target.value){
      this.confirm=true
    }else{
      this.confirm=false
    }
  }
  oldPassword=false;
  confirm=false;
  onSubmit(){
  this.isSubmit=true;
  if(!( this.changeFrom.get('newPassword').value == this.changeFrom.get('confirmPassword').value)){
    this.notMatch=true;
  }
  console.log(this.changeFrom.get('newPassword').value !="" && this.changeFrom.get('confirmPassword').value !="","not workji")
  if(this.changeFrom.valid && this.changeFrom.get('newPassword').value == this.changeFrom.get('confirmPassword').value){
    this.buyerService.changePasswordForbuyer(this.changeFrom.value).subscribe((res:any) => {
      this.changeFrom.reset()
      this.isSubmit=false;
      this.notMatch=false;
      console.log('proper login')
      let data={
        next:'true'
      }
      let query = new URLSearchParams(data).toString()
      this.route.navigateByUrl('/buyerLogin?' + query)
     
    },error => {
      if(error.error.message == "Old PassWord Incorrect Or Invalid User"){
       this.oldPassword=true;
      }else{
        this.oldPassword=false;
      }
    })
    
  } }
  errMsg() {
    this.notMatch=false;
    this.oldPassword=false;
  }
  show1:boolean=false;
  show2:boolean=false;
  show3:boolean=false;
  change1(){
    this.show1=!this.show1
   }
   change2(){
    this.show2=!this.show2
   }
   change3(){
    this.show3=!this.show3
   }
   get changeFromControl() {
    return this.changeFrom.controls;
  }
}
