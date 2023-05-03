import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubHostService } from '../sub-host.service';

@Component({
  selector: 'app-sub-host-login',
  templateUrl: './sub-host-login.component.html',
  styleUrls: ['./sub-host-login.component.css']
})
export class SubHostLoginComponent implements OnInit {
  constructor(private router:Router,private service:SubHostService){

  }
  form:any=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('',Validators.required),

  })
  wrongEmail=false;
  submit=false;
  ngOnInit(): void {
    
  }
  routeToVerfiy(){
    this.router.navigateByUrl('/sub-host-verfiy')
  }
  login(){
    this.submit=true;
    if(this.form.valid){
    this.service.login(this.form.value).subscribe((res:any)=>{
      console.log(res)
      this.setCookie(res.token.access.token);
      this.router.navigateByUrl('/sub-host-streams')
    },error =>{
      if(error.error.message=='Incorrect email or password'){
        this.wrongEmail=true
      }
    
    })
  }
 }
setCookie(token: any) {
  let d: Date = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
  let expires: string = `expires=${d.toUTCString()}`;
  document.cookie = `sub-host=${token}; ${expires}`;
}
  

}
