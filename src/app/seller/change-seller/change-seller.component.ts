import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{SellerService} from '../seller.service'
import { StrongPasswordValidator } from 'src/app/buyer/createpassword/password.validator';

@Component({
  selector: 'app-change-seller',
  templateUrl: './change-seller.component.html',
  styleUrls: ['./change-seller.component.css']
})
export class ChangeSellerComponent {
  isSubmit=false;
  id:any;
  changeFrom:any =this.fb.group({
    oldPassword:new FormControl('',Validators.required),
    newPassword:new FormControl('',[Validators.required,StrongPasswordValidator]),
    confirmPassword:new FormControl('',Validators.required),
    password:new FormControl(),
  });
  constructor(private fb: FormBuilder, private SellerService: SellerService, private route: Router, private arouter:ActivatedRoute) { }
  ngOnInit() {
    this.arouter.queryParams.subscribe(params=>{
      console.log(params);

      this.id=params['id']
    })
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
  notMatch=false;
  onSubmit(){
  this.isSubmit=true;
  
  if(!( this.changeFrom.get('newPassword').value == this.changeFrom.get('confirmPassword').value)){
    this.notMatch=true;
  }
  if(this.changeFrom.valid && this.changeFrom.get('newPassword').value == this.changeFrom.get('confirmPassword').value){
    this.changeFrom.patchValue({
      password:this.changeFrom.get('newPassword')?.value,
    })
    let data={
      oldPassword:this.changeFrom.get('oldPassword')?.value,
      newPassword:this.changeFrom.get('newPassword')?.value,
    }
    this.SellerService.changePasswordForseller(data).subscribe((res:any) => {
      this.changeFrom.reset()
      this.isSubmit=false;
      this.route.navigate(['/sellerLogin']);
      console.log(res);
    },error => {
      if(error.error.message == "Old PassWord Incorrect Or Invalid User"){
       this.oldPassword=true;
      }else{
        this.oldPassword=false;
      }
    
    })
    }}
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
