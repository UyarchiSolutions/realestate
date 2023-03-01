import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-updatepasswordbuyer',
  templateUrl: './updatepasswordbuyer.component.html',
  styleUrls: ['./updatepasswordbuyer.component.css']
})
export class UpdatepasswordbuyerComponent implements OnInit{
  password = this.fb.group({
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
  })
  isDisplay=false;
  id:any;
  constructor(private fb: FormBuilder, private buyerService: BuyerService, private route: Router,private activate_router:ActivatedRoute) { }
  ngOnInit() {
   this.activate_router.queryParams.subscribe((res:Params) =>{
    this.id=res['id'];
   })
  }
  changePassword() {
    this.buyerService.changePassword(this.id, this.password.value).subscribe((data: any) => {

    })
  }
}
