import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerService } from '../buyer.service';
import { StrongPasswordValidator } from './password.validator';

@Component({
  selector: 'app-createpassword',
  templateUrl: './createpassword.component.html',
  styleUrls: ['./createpassword.component.css']
})
export class CreatepasswordComponent {
  id: any;
  passwordForm = this.fb.group({
    password: new FormControl('',[Validators.required,StrongPasswordValidator] ),
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
    if (this.passwordForm.valid && this.passwordForm.get('password')?.value == this.passwordForm.get('confirmPassword')?.value) {
      this.buyerService.createPassword(this.id, this.passwordForm.value).subscribe((res: any) => {
        this.isSubmit=false;
        let data={
          next:'true'
        }
        let query = new URLSearchParams(data).toString()
        this.route.navigateByUrl('/buyerLogin?' + query)
        // this.route.navigate(['/buyerLogin'])
      })
    }

  }
  mismatch=false;
  incorrect(event:any){
    if(this.passwordForm.get('password')?.value != this.passwordForm.get('confirmPassword')?.value){
      this.mismatch=true;
    }else{
      this.mismatch=false;
    }
  }
  get passwordControl() {
    return this.passwordForm.controls;
  }
  show1:boolean=false;
  show2:boolean=false;
  change1(){
    this.show1=!this.show1
   }
   change2(){
    this.show2=!this.show2
   }
}
