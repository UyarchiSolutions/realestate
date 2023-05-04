import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubHostService } from '../sub-host.service';

@Component({
  selector: 'app-sub-host-number-verfiy',
  templateUrl: './sub-host-number-verfiy.component.html',
  styleUrls: ['./sub-host-number-verfiy.component.css']
})
export class SubHostNumberVerfiyComponent implements OnInit{
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
      this.router.navigateByUrl('/sub-host-otp-verfiy?'+query);
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
