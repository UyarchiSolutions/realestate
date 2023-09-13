import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BuyerService } from '../buyer.service';
import { StrongPasswordValidator } from '../createpassword/password.validator';

@Component({
  selector: 'app-updatepasswordbuyer',
  templateUrl: './updatepasswordbuyer.component.html',
  styleUrls: ['./updatepasswordbuyer.component.css']
})
export class UpdatepasswordbuyerComponent implements OnInit{
  password = this.fb.group({
    password: new FormControl('',[Validators.required,StrongPasswordValidator]),
    confirmPassword: new FormControl('',Validators.required),
  })
  isDisplay=false;
  matchPas=false;
  isSubmit=false
  id:any;
  constructor(private fb: FormBuilder, private buyerService: BuyerService, private route: Router,private activate_router:ActivatedRoute) { }
  ngOnInit() {
   this.activate_router.queryParams.subscribe((res:Params) =>{
    this.id=res['id'];
    console.log(this.id)
   })
  }
  changePassword() {
    this.isSubmit=true
    if( !(this.password.get('confirmPassword')?.value == this.password.get('password')?.value) && this.password.valid){
      this.matchPas=true;
    }
    if(this.password.valid && this.password.get('password')?.value == this.password.get('confirmPassword')?.value ){
      this.matchPas=false;
    this.buyerService.changePassword(this.id, this.password.value).subscribe((res: any) => {
      console.log('working')
      this.isSubmit=false
      let data={
        next:'true'
      }
      let query = new URLSearchParams(data).toString()
      this.route.navigateByUrl('/buyerLogin?' + query)
     
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
