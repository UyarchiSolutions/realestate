import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {} from 'ngx-editor';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-demo-user',
  templateUrl: './add-demo-user.component.html',
  styleUrls: ['./add-demo-user.component.css'],
})
export class AddDemoUserComponent implements OnInit {
  constructor(private service:AdminService,private router: Router) {}
  ngOnInit(): void {}
  submitted: boolean = false;
  myform = new FormGroup({
    userName: new FormControl('', Validators.required),
    mail: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    mobileNumber: new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
    location: new FormControl('', Validators.required),
  });
  submit() {
   
    this.submitted=true
    if(this.myform.valid){
      this.service.add_demo_user(this.myform.value).subscribe((res:any)=>{
        this.router.navigateByUrl('/admin/manage-demo-post')
      })
    }
  }
  get Formcontrol() {
    return this.myform.controls;
  }
}
