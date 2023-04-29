import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-sub-host',
  templateUrl: './add-sub-host.component.html',
  styleUrls: ['./add-sub-host.component.css']
})
export class AddSubHostComponent implements OnInit {


  myform:any=this.fb.group({
    Name:new FormControl('', Validators.required),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
    email:new FormControl('',[Validators.required,Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    role: new FormControl('', Validators.required),
  })
  constructor(private service:SellerService,private fb:FormBuilder
    ,private arouter:ActivatedRoute,private router:Router){

  }
  id:any;
  ngOnInit(): void {
   this.arouter.queryParams.subscribe(params=>{
    this.id=params['id'];
    if(this.id){
    this.service.get_single_host(this.id).subscribe((res:any)=>{
      console.log(res)
      this.myform.patchValue({
        Name:res.Name,
        phoneNumber:res.phoneNumber,
        email:res.email,
        role:res.role
      })
    })
  }
   })
  }
  isSubmit=false;
  submit(){
    this.isSubmit=true;
    if(this.myform.valid){
      this.service.add_Sub_host(this.myform.value).subscribe((res:any)=>{
        console.log(res)
        this.router.navigateByUrl('manage-sub-host')
      })
    }
  }
  reSubmit(){
    this.isSubmit=true;
    if(this.myform.valid){
    this.service.update_Sub_host(this.id,this.myform.value).subscribe((res:any)=>{
      console.log(res,'update')
      this.router.navigateByUrl('manage-sub-host')
    })
  }
  }

}
