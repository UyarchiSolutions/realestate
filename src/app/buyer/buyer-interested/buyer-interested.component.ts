import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'buyer-interested',
  templateUrl: './buyer-interested.component.html',
  styleUrls: ['./buyer-interested.component.css']
})
export class BuyerInterestedComponent implements OnInit {
  constructor(private buyerService:BuyerService,private router:Router){

  }
  ngOnInit(): void {
   this.Get_all_interest()
  }
  RBtab = true;
  RRtab = false;
  CBtab = false;
  CRtab = false;
  interestShow=true
  interestTab(tab: any) {
    if (tab == 'RB') {
      this.RBtab = true;
      this.RRtab = false;
      this.CBtab = false;
      this.CRtab = false;
    }
    if (tab == 'RR') {
      this.RBtab = false;
      this.RRtab = true;
      this.CBtab = false;
      this.CRtab = false;
    }
    if (tab == 'CB') {
      this.RBtab = false;
      this.RRtab = false;
      this.CBtab = true;
      this.CRtab = false;
    }
    if (tab == 'CR') {
      this.RBtab = false;
      this.RRtab = false;
      this.CBtab = false;
      this.CRtab = true;
    }
  }
  postshow = true;

  saveShow = false;
  alertShow = false;
  showTab(tab: any) {
    if (tab == 'post') {
      this.postshow = true;
      this.interestShow = false;
      this.saveShow = false;
      this.alertShow = false;
    }
    if (tab == 'interest') {
      this.postshow = false;
      this.interestShow = true;
      this.saveShow = false;
      this.alertShow = false;
    }
    if (tab == 'save') {
      this.postshow = false;
      this.interestShow = false;
      this.saveShow = true;
      this.alertShow = false;
    }
    if (tab == 'alert') {
      this.postshow = false;
      this.interestShow = false;
      this.saveShow = false;
      this.alertShow = true;
    }
  }
  AllInterested: any;
  ResiRent:any=[];
  ResiBuy:any=[];
  CommRent:any=[];
  CommBuy:any=[];


  Get_all_interest() {
    this.buyerService.getAll_Interested().subscribe((res: any) => {
      console.log(res,'all interest','child')
      this.AllInterested = res;
      this.ResiRent= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Rent' && v.HouseOrCommercialType =='Residential';
      })
      this.ResiBuy= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Sale' && v.HouseOrCommercialType =='Residential';
      })
      this.CommRent= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Rent' && v.HouseOrCommercialType =='Commercial';
      })
      this.CommBuy= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Sale' && v.HouseOrCommercialType =='Commercial';
      })
    });
  
  }
  GetDataBYId(id: any, i: any) {
   
    
        const query = new URLSearchParams().toString();
        this.router.navigateByUrl('/buyer-commercial-buy-search-view?' + query );
    
    } 

}
