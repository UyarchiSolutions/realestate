import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BuyerService } from 'src/app/buyer/buyer.service';

@Component({
  selector: 'app-updatepasswordseller',
  templateUrl: './updatepasswordseller.component.html',
  styleUrls: ['./updatepasswordseller.component.css']
})
export class UpdatepasswordsellerComponent {
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
     this.route.navigate(['/buyerLogin'])
    })
  }
}
