import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-profile-edit',
  templateUrl: './buyer-profile-edit.component.html',
  styleUrls: ['./buyer-profile-edit.component.css']
})
export class BuyerProfileEditComponent implements OnInit{

  data:any=[]
  form:any = new FormGroup({
    userName:new FormControl(),
    mobile:new FormControl('',[Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
    email:new FormControl('',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  })
  constructor(private service:BuyerService,private router:Router){}
  ngOnInit(): void {
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    })
  }
  submitted=false;
  submit(){
    this.form.setValue({
      userName:this.form.get('userName')?.value ?this.form.get('userName')?.value :  this.data.userName,
      email:this.form.get('email')?.value ?this.form.get('email')?.value :  this.data.email,
      mobile:this.form.get('mobile')?.value ?this.form.get('mobile')?.value :  this.data.mobile,
    })
    this.submitted=true;
    if(this.form.valid){
    this.service.editAccountSeller(this.form.value).subscribe((res:any)=>{
      this.router.navigateByUrl('/buyer-profile') 
    })
  }
}

}
