import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubHostService } from '../sub-host.service';

@Component({
  selector: 'app-sub-host-forgot-mobile',
  templateUrl: './sub-host-forgot-mobile.component.html',
  styleUrls: ['./sub-host-forgot-mobile.component.css']
})
export class SubHostForgotMobileComponent implements OnInit {
constructor(private fb:FormBuilder,private router:Router,private service:SubHostService){

}
notfound=false;
form:any=this.fb.group({
  mobileNumber:new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')])
})
  ngOnInit(): void {
   
  }
  submit=false;
  Register(){
    this.submit=true;
    if(this.form.valid){
    this.service.register(this.form.value).subscribe((res:any)=>{
      
      let data={
        num:this.form.get('mobileNumber')?.value
      }
      let query = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/sub-host-forgot-otp?'+query)
      console.log('res')
    }
    ,error =>{
      // console.log(error);
      if(error.error.message == "subHost Not Available"){

        this.notfound=true;

      }
    }
    )
  }
}

}
