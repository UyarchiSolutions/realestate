import { Component, OnInit } from '@angular/core';
import { SubHostService } from '../sub-host.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sub-host-setpassword',
  templateUrl: './sub-host-setpassword.component.html',
  styleUrls: ['./sub-host-setpassword.component.css']
})
export class SubHostSetpasswordComponent implements OnInit {
  constructor(private service:SubHostService,private arouter:ActivatedRoute,private router:Router
    ){
    
  }
  id:any;
  NotSame:any=true;
  submit=false
  form:any=new FormGroup({
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required),

  })

  ngOnInit(): void {
  this.arouter.queryParams.subscribe((res:any)=>{
    console.log(res)
    this.id=res['id']
    console.log(this.id)
  })

  }
  setPassword(){
   
    // this.form.get('password')?.value == this.form.get('confirmPassword')?.value
    console.log(this.form.get('password')?.value, this.form.get('confirmPassword')?.value, this.form.get('password')?.value == this.form.get('confirmPassword')?.value)
    
    if(this.form.valid && this.form.get('password')?.value == this.form.get('confirmPassword')?.value ){
      let data={
        password:this.form.get('password')?.value
      }
      console.log('inside api',data,this.id)
      this.service.set_password(this.id,data).subscribe((res:any)=>{
        console.log(res)
        this.router.navigateByUrl('/sub-host-login')
      })

    }
    this.submit=true;
  }

}
