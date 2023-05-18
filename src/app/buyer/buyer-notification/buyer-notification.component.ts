import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { TypeModifier } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'buyer-notification',
  templateUrl: './buyer-notification.component.html',
  styleUrls: ['./buyer-notification.component.css']
})
export class BuyerNotificationComponent implements OnInit {
  constructor(private buyerService:BuyerService,private router:Router ) { }
  nofi:any=[];
  ngOnInit(): void {
    this.get_all_notification();
  }
  get_all_notification(){
    this.buyerService.get_all_notification().subscribe((res:any)=>{
      console.log(res,'notification');
      this.nofi=res;
    })
  }
  routeView(Rtype:any,type:any,id:any){
    console.log(Rtype,type)

    if(Rtype =='Residential' && type =='Rent'){
      let data={
        id:id,
        interested:'true',
        schedule:'true',
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-residential-rent-search-view?'+query);
    }
    if(Rtype =='Residential' && type =='Sale'){
      let data={
        id:id,
        interested:'true',
        schedule:'true',
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-residential-buy-search-view?'+query);
    }
    if(Rtype =='Commercial' && type =='Sale'){
      let data={
        id:id,
        interested:'true',
        schedule:'true',
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-commercial-buy-search-view?'+query);
    }
    if(Rtype =='Commercial' && type =='Rent'){
      let data={
        id:id,
        interested:'true',
        schedule:'true',
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-commercial-rent-search-view?'+query);
    }
  }
}
