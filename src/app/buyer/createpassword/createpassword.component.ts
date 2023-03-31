import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrls: ['./createpassword.component.css']
})
export class CreatepasswordComponent {
  id: any;
  password = this.fb.group({
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  })
  constructor(private fb: FormBuilder, private buyerService: BuyerService, private route: Router,private active:ActivatedRoute) { }
  ngOnInit() {
    this.active.queryParams.subscribe((Params) => {
      this.id = Params['id'];
    })
    console.log(this.id);
  }
  isSubmit=false;
  submitOTP() {
    this.isSubmit=true;
    if (this.password.valid && this.password.get('password')?.value == this.password.get('confirmPassword')?.value) {
      this.buyerService.createPassword(this.id, this.password.value).subscribe((res: any) => {
        this.isSubmit=false;
        this.route.navigate(['/buyerLogin'])
      })
    }

  }
  mismatch=false;
  incorrect(event:any){
    if(this.password.get('password')?.value != this.password.get('confirmPassword')?.value){
      this.mismatch=true;
    }else{
      this.mismatch=false;
    }
  }
}
