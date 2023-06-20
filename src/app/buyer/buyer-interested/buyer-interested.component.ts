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
  //  this.Get_all_interest()
   this.int_fr_resi_rent()
   this.int_fr_resi_buy()
   this.int_fr_comm_rent()
   this.int_fr_comm_sale()
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
  
  page1:any=0;
  range1:any=10;
  page2:any=0;
  range2:any=10;
  page3:any=0;
  range3:any=10;
  page4:any=0;
  range4:any=10;
  
  int_fr_resi_rent(){
   let type='Rent'
   let ctype='Residential'

    this.buyerService.get_interest_new_noind(type,ctype,this.page1,this.range1).subscribe((res:any)=>{
      console.log(res,'new')
      this.ResiRent=res.values;
    })
  }
  int_fr_resi_buy(){
   let type='Sale'
   let ctype='Residential'
   
    this.buyerService.get_interest_new_noind(type,ctype,this.page2,this.range2).subscribe((res:any)=>{
      console.log(res,'new')
      this.ResiBuy=res.values
    })
  }
  int_fr_comm_rent(){
   let type='Rent'
   let ctype='Commercial'
   
    this.buyerService.get_interest_new_noind(type,ctype,this.page3,this.range3).subscribe((res:any)=>{
      console.log(res,'new')
      this.CommRent=res.values
    })
  }
  int_fr_comm_sale(){
   let type='Sale'
   let ctype='Commercial'
   
    this.buyerService.get_interest_new_noind(type,ctype,this.page4,this.range4).subscribe((res:any)=>{
      console.log(res,'new')
      this.CommBuy=res.values
    })
  }

  Get_all_interest() {
    this.buyerService.getAll_Interested().subscribe((res: any) => {
      console.log(res,'all interest','child')
      this.AllInterested = res;
    
      this.ResiRent= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Rent' && v.HouseOrCommercialType =='Residential' && v.userStatus;
      })
      this.ResiBuy= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Sale' && v.HouseOrCommercialType =='Residential' && v.userStatus;
      })
      this.CommRent= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Rent' && v.HouseOrCommercialType =='Commercial'&& v.userStatus;
      })
      this.CommBuy= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Sale' && v.HouseOrCommercialType =='Commercial' && v.userStatus;
      })
    });
    console.log(this.ResiBuy)
  
  }

    viewResiBuy(id:any,i:any){
      console.log(i,'index')
      let data={
        id:id,
        interested:'true',
        page:this.page2,
        range:this.range2,
        index:i
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-residential-buy-search-view?'+query);
    }
    viewResiRent(id:any,i:any){
   
      let data={
        id:id,
        interested:'true',
        page:this.page1,
        range:this.range1,
        index:i
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-residential-rent-search-view?'+query);
    }
    
    viewCommBuy(id:any,i:any){
      let data={
        id:id,
        interested:'true',
        page:this.page4,
        range:this.range4,
        index:i
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-commercial-buy-search-view?'+query);
    }
    
    viewCommRent(id:any,i:any){
      let data={
        id:id,
        interested:'true',
        page:this.page3,
        range:this.range3,
        index:i
      }
      let query = new URLSearchParams(data).toString()
      this.router.navigateByUrl('/buyer-commercial-rent-search-view?'+query);
    }
    

  }
