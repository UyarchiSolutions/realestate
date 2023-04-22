import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
      MonthlyRentFrom: new FormControl('',Validators.required),
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
          MonthlyRentFrom:res.MonthlyRentFrom,
          ExpectedpricetNegotiable:res.RentNegociable=='true'?true:null,
       
          ExpectedDepositNegotiable:res.depositeNegociable=='true'?true:null,
          ExcludeMaintenance:res.maintainenceCost,
          CurrentlyInLoan:res.current_in_loan=='true'?true:null,
          
          
        });console.log('value patched') ;
          this.mainmon=res.squareFT;
          this.maintanceVal=res.MaintenanceStatus;
        
         }
  
      
        
      )
    }
    maintanceVal='Include Maintenance';
    mv='Include Maintenance';
    maintance(a:any){
      console.log(this.maintanceVal);
      
      this.mv=a;
      this.maintanceVal=this.mv;
    }

    mainmon='';
  
    mainmonv(a:any){
  
      this.mainmon=a;
    }
    Lmainmon:any;
  
    Lmainmonv(a:any){
  
      this.Lmainmon=a;
    }
    routerlink='/start-posting/residential-sale-price-details';
    submitted=false;
    rentsub(){
      
      this.submitted=true;
      if ( this.priceform.valid){
      var data={

        MonthlyRentFrom:this.priceform.get('MonthlyRentFrom').value,
        RentNegociable:this.priceform.get('ExpectedpricetNegotiable').value,
       
        current_in_loan:this.priceform.get('CurrentlyInLoan').value,
        maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
        squareFT:this.mainmon,
        MaintenanceStatus:this.maintanceVal,
        routeLink:this.routerlink
      }
      console.log('sub triggered')
      
      this.service.formput(this.id,data).subscribe((res:any)=>{
        console.log(res);
        
        var postdata ={
          id:res._id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/start-posting/residential-sale-amentites?' + queryString);
        console.log(res);
        
      })
     }
    }
  
  
   
  
    routetopreview(){
  
      var data={

        MonthlyRentFrom:this.priceform.get('MonthlyRentFrom').value,
        RentNegociable:this.priceform.get('ExpectedpricetNegotiable').value,
       
        current_in_loan:this.priceform.get('CurrentlyInLoan').value,
        maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
        squareFT:this.mainmon,
        MaintenanceStatus:this.maintanceVal,
      }   
      console.log('route triggered')
           
      this.service.formput(this.id,data).subscribe((res:any)=>{
        
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/residential-sale-preview?' + queryString);
  
      
      });
          
           
  
    }
  
    back(count:any){
      if(count == 0){
        var data ={
         id:this.id
       }
       var queryString = new URLSearchParams(data).toString();
       this.router.navigateByUrl('/start-posting/residential-sale-property?' + queryString);
  
       this.service.formget(this.id).subscribe((res:any)=>{
       
  
       })
      }
      if(count == 1){
        var data ={
         id:this.id
       }
       var queryString = new URLSearchParams(data).toString();
       this.router.navigateByUrl('/start-posting/residential-sale-location-details?' + queryString);
  
       this.service.formget(this.id).subscribe((res:any)=>{
       })
      }
      if(count == 2){
        var data ={
         id:this.id
       }
       var queryString = new URLSearchParams(data).toString();
       this.router.navigateByUrl('/start-posting/residential-sale-price-details?' + queryString);
  
       this.service.formget(this.id).subscribe((res:any)=>{
       })
      }
      if(count == 3){
        var data ={
         id:this.id
       }
       var queryString = new URLSearchParams(data).toString();
       this.router.navigateByUrl('/start-posting/residential-sale-amentites?' + queryString);
  
       this.service.formget(this.id).subscribe((res:any)=>{
       })
      }
      if(count == 4){
        var postdata ={
          id:this.id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/start-posting/residential-sale-gallery?' + queryString);
        this.service.formget(this.id).subscribe((res:any)=>{
        })
      }
      if(count == 5){
        var postdata ={
          id:this.id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/start-posting/residential-sale-add-details?' + queryString);
        this.service.formget(this.id).subscribe((res:any)=>{
        })
      }
    }
  }
  
