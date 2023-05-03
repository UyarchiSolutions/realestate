import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubHostService } from '../sub-host.service';

@Component({
  selector: 'app-sub-host-new-password',
  templateUrl: './sub-host-new-password.component.html',
  styleUrls: ['./sub-host-new-password.component.css']
})
export class SubHostNewPasswordComponent implements OnInit {

  constructor(private router:Router,private arouter:ActivatedRoute,
    private service: SubHostService){

  }
  number:any;
  submitted=false;
  form:any= new FormGroup({
    password:new FormControl(),
    confirmPassword:new FormControl(),

  } )
  ngOnInit(): void {
  this.arouter.queryParams.subscribe((res:any)=>{
    this.number=res['num']
  })
  }
  submit(){
    this.submitted=true;
    if(this.form.valid && this.form.get('password')?.value == this.form.get('confirmPassword')?.value ){
      let data={
        mobileNumber:this.number,
        password:this.form.get('password')?.value
      }
      this.service.new_password(data).subscribe((res:any)=>{
        console.log(res)
        this.router.navigateByUrl('/sub-host-login')
      })
    }
  }


}
