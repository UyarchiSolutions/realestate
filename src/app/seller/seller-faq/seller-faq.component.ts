import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/buyer/buyer.service';

@Component({
  selector: 'app-seller-faq',
  templateUrl: './seller-faq.component.html',
  styleUrls: ['./seller-faq.component.css']
})
export class SellerFaqComponent implements OnInit {
  data:any=[]
  ngOnInit(): void {
    this.buyerService.get_faq().subscribe((res:any)=>{
      this.data=res
      console.log(res)
    })
  }
  constructor(  private buyerService: BuyerService,){

  }
  back(){
    window.history.back()
  }
}
