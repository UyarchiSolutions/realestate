import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'buyer-footer',
  templateUrl: './buyer-footer.component.html',
  styleUrls: ['./buyer-footer.component.css']
})
export class BuyerFooterComponent implements OnInit {

  constructor(private service:BuyerService ){

  }
  data:any;
  ngOnInit(): void {
    this.service.myAcount().subscribe((res:any)=>{
      this.data=res;
      console.log(res,'footer')
    })
  }
  enqform:any=new FormGroup({
    Name:new FormControl(),
    email:new FormControl(),
    phoneNumber: new FormControl(),
    Enquiry:new FormControl()
  })
  sendEnq(){
    this.service.send_enquiry(this.enqform.value).subscribe((res:any)=>{

    })
  }
  ok=false
  check(){
    this.ok=!this.ok
    console.log('checking',this.ok)
  }
}
