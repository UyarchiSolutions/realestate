import { Component, OnDestroy, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'buyer-footer',
  templateUrl: './buyer-footer.component.html',
  styleUrls: ['./buyer-footer.component.css']
})
export class BuyerFooterComponent implements OnInit ,OnDestroy{

  constructor(private service:BuyerService,private fb:FormBuilder ){

  }
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['link'],
    ['ordered_list', 'bullet_list'],

  ];
  data:any;
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  ngOnInit(): void {
    this.prof()
    this.editor = new Editor();
    
  }
  enqform:any=new FormGroup({
    Name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
    Enquiry:new FormControl('',Validators.required)
  })
  submitted:boolean=false
  sendEnq(){
    this.submitted=true
    if(this.enqform.valid){
      this.service.send_enquiry(this.enqform.value).subscribe((res:any)=>{
        console.log(res,'enq res')
        this.submitted=false
        this.check()
      })
    }
   
  }
  ok=false
  check(){
    console.log('checking',this.ok)
    this.ok=!this.ok
  }
  prof(){
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res)
      this.data=res
      this.enqform.patchValue({
        Name:res.userName,
        email:res.email,
        phoneNumber:res.mobile
      })
    })
  }
  
}
