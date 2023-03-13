import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-rs-price-details',
  templateUrl: './rs-price-details.component.html',
  styleUrls: ['./rs-price-details.component.css']
})
export class RsPriceDetailsComponent implements OnInit {
   
  
   
    
    id:any;
    data:any;
  
    priceform:any= this.fb.group({
      ExpectedPrice: new FormControl(),
      ExpectedpricetNegotiable:new FormControl(),
      CurrentlyInLoan:new FormControl(),
      ExcludeMaintenance:new FormControl(),
      MrSq: new FormControl()
  
    })
  
    
    constructor(private fb:FormBuilder,private arouter: ActivatedRoute,
      private service:PostPropertyService,
      private router:Router){}
     
    ngOnInit(): void {
  
      
      
     
      this.arouter.queryParams.subscribe(params => {
        console.log(params);
        this.id=params['id'];
        console.log(this.id,"this is id from sp");
        
      });
  
  
      this.service.formget(this.id).subscribe((res:any)=>{
  
        this.data=res;
  
        console.log(res);
        
        this.priceform.patchValue({
          ExpectedPrice:res.expectedPrice,
          ExpectedpricetNegotiable:res.RentNegociable,
          CurrentlyInLoan:res.depositeAmount,
          ExpectedDepositNegotiable:res.depositeNegociable,
          ExcludeMaintenance:res.maintainenceCost,
          
          
        });console.log('value patched') ;
        
        this.maintanceVal= this.data.MaintenanceStatus }
  
      
        
      )
    }
    maintanceVal='Include Maintenance';
  
    maintance(a:any){
      this.maintanceVal=a;
      console.log(this.maintanceVal);
    }
    LmaintanceVal='Include Maintenance';
  
    Lmaintance(a:any){
      this.LmaintanceVal=a;
      console.log(this.maintanceVal);
    }
    mainmon='';
  
    mainmonv(a:any){
  
      this.mainmon=a;
    }
    Lmainmon:any;
  
    Lmainmonv(a:any){
  
      this.Lmainmon=a;
    }
    rentsub(){
  
      var data={

        expectedPrice:this.priceform.get('ExpectedPrice').value,
        RentNegociable:this.priceform.get('ExpectedpricetNegotiable').value,
       
        current_in_loan:this.priceform.get('CurrentlyInLoan').value,
        maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
        squareFT:this.mainmon,
        MaintenanceStatus:this.maintanceVal,
      }
      
      this.service.formput(this.id,data).subscribe((res:any)=>{
        console.log(res);
        
        var postdata ={
          id:res._id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/residential-sale-amentites?' + queryString);
        console.log(res);
        
      })
  
    }
  
  
   
  
    routetopreview(){
  
      var data={

        expectedPrice:this.priceform.get('ExpectedPrice').value,
        RentNegociable:this.priceform.get('ExpectedpricetNegotiable').value,
       
        current_in_loan:this.priceform.get('CurrentlyInLoan').value,
        maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
        squareFT:this.mainmon,
        MaintenanceStatus:this.maintanceVal,
      }   
           
            this.service.formput(this.id,data).subscribe((res:any)=>{});
          
           
  
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-preview?' + queryString);
  
      this.service.formget(this.id).subscribe((res: any) => {
        location.reload();
      });
    }
  
    back(count:any){
      if(count == 0){
        var data ={
         id:this.id
       }
       var queryString = new URLSearchParams(data).toString();
       this.router.navigateByUrl('/residential-sale-property?' + queryString);
  
       this.service.formget(this.id).subscribe((res:any)=>{
       
  
       })
      }
      if(count == 1){
        var data ={
         id:this.id
       }
       var queryString = new URLSearchParams(data).toString();
       this.router.navigateByUrl('/residential-sale-location-details?' + queryString);
  
       this.service.formget(this.id).subscribe((res:any)=>{
       })
      }
      if(count == 2){
        var data ={
         id:this.id
       }
       var queryString = new URLSearchParams(data).toString();
       this.router.navigateByUrl('/residential-sale-price-details?' + queryString);
  
       this.service.formget(this.id).subscribe((res:any)=>{
       })
      }
      if(count == 3){
        var data ={
         id:this.id
       }
       var queryString = new URLSearchParams(data).toString();
       this.router.navigateByUrl('/residential-sale-amentites?' + queryString);
  
       this.service.formget(this.id).subscribe((res:any)=>{
       })
      }
      if(count == 4){
        var postdata ={
          id:this.id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/residentaial-rent-gallery?' + queryString);
        this.service.formget(this.id).subscribe((res:any)=>{
        })
      }
      if(count == 5){
        var postdata ={
          id:this.id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/residentaial-rent-details?' + queryString);
        this.service.formget(this.id).subscribe((res:any)=>{
        })
      }
    }
  }
  
