import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-change-buyer',
  templateUrl: './change-buyer.component.html',
  styleUrls: ['./change-buyer.component.css']
})
export class ChangeBuyerComponent {
  isSubmit=false;
  changeFrom:any =this.fb.group({
    oldPassword:new FormControl('',Validators.required),
    newPassword:new FormControl('',Validators.required),
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
      this.route.navigate(['/buyerLogin'])
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
}
