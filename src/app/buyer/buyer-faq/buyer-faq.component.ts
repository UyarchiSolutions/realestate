import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostPropertyService } from 'src/app/services/post-property.service';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyer-faq',
  templateUrl: './buyer-faq.component.html',
  styleUrls: ['./buyer-faq.component.css']
})
export class BuyerFaqComponent implements OnInit{
  ngOnInit(): void {
    this.buyerService.get_faq().subscribe((res:any)=>{
      this.data=res
      console.log(res)
    })
    this.Getbuyer()
  }
  data:any=[]
  constructor(
    private arouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: PostPropertyService,
    private buyerService: BuyerService,
    private toastr: ToastrService
  ) {}
  showProfileHeader=false;
  buyer:any=[]
  Getbuyer() {
    this.service.Get_buyer_account().subscribe((res: any) => {
      // console.log(res);
      this.buyer = res;
      this.showProfileHeader=true

    });
  }
  back(){
    window.history.back()
  }
}
