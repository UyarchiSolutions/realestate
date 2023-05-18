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
    console.log(this.ResiBuy)
  
  }

    viewResiBuy(id:any){
      let data={
        id:id,
        interested:'true',
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-residential-buy-search-view?'+query);
    }
    viewResiRent(id:any){
      let data={
        id:id,
        interested:'true',
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-residential-rent-search-view?'+query);
    }
    
    viewCommBuy(id:any){
      let data={
        id:id,
        interested:'true',
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-commercial-buy-search-view?'+query);
    }
    
    viewCommRent(id:any){
      let data={
        id:id,
        interested:'true',
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-commercial-rent-search-view?'+query);
    }
    

  }
