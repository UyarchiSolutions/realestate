import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'buyer-saved',
  templateUrl: './buyer-saved.component.html',
  styleUrls: ['./buyer-saved.component.css']
})
export class BuyerSavedComponent implements OnInit {
  constructor(private buyerService:BuyerService,private router:Router) { } 
  ngOnInit(): void {
  this.Get_all_saved()
  }

  RBtab = true;
  RRtab = false;
  CBtab = false;
  CRtab = false;
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
  
  AllSaved: any;
  ResiRentS:any=[];
  ResiBuyS:any=[];
  CommRentS:any=[];
  CommBuyS:any=[];

  Get_all_saved() {
    
    this.buyerService.getAll_saved().subscribe((res: any) => {
      console.log(res,'all saved')
      this.AllSaved = res;
      this.ResiRentS= this.AllSaved.filter((v:any)=>{
        return v.Type == 'Rent' && v.HouseOrCommercialType =='Residential';
       })
       this.ResiBuyS= this.AllSaved.filter((v:any)=>{
        return v.Type == 'Sale' && v.HouseOrCommercialType =='Residential';
       })
       this.CommRentS= this.AllSaved.filter((v:any)=>{
        return v.Type == 'Rent' && v.HouseOrCommercialType =='Commercial';
       })
       this.CommBuyS= this.AllSaved.filter((v:any)=>{
        return v.Type == 'Sale' && v.HouseOrCommercialType =='Commercial';
       })

    });
  }
  GetDataBYId(id: any, i: any) {}
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