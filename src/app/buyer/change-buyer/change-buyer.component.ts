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
  console.log(this.changeFrom.get('newPassword').value !="" && this.changeFrom.get('confirmPassword').value !="","not workji")

  if(this.changeFrom.valid){
    this.buyerService.changePasswordForbuyer(this.changeFrom.value).subscribe((res:any) => {
      this.changeFrom.reset()
      this.isSubmit=false;
    },error => {
      if(error.error.message == "Old PassWord Incorrect Or Invalid User"){
       this.oldPassword=true;
      }else{
        this.oldPassword=false;
      }
    })
  }

  }
}
