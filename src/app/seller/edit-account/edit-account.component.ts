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
    userName: new FormControl(''),
    email:  new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    mobile: new FormControl('',[Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
    Type:new FormControl('')

    
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
  submitted=false;
  submit(){
    this.form.setValue({
      userName:this.form.get('userName')?.value ?this.form.get('userName')?.value :  this.data.userName,
      email:this.form.get('email')?.value ?this.form.get('email')?.value :  this.data.email,
      mobile:this.form.get('mobile')?.value ?this.form.get('mobile')?.value :  this.data.mobile,
      Type:this.form.get('Type')?.value ?this.form.get('Type')?.value :  this.data.Type
    })
    console.log(this.form.value)
    this.submitted=true;
    if(this.form.valid){
    this.service.editAccountSeller(this.form.value).subscribe((res:any)=>{
      console.log(res);
      this.router.navigateByUrl('/my-account')
    })
  }
  }

}
