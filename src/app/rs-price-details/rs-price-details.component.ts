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
        if(res.MaintenanceStatus =='Exclude Maintenance'){
          this.maintance(this.data.MaintenanceStatus);
          this.mainmon=res.squareFT;
         }
        this.priceform.patchValue({
          MonthlyRentFrom:res.MonthlyRentFrom,
          ExpectedpricetNegotiable:res.RentNegociable=='true'?true:null,
       
          ExpectedDepositNegotiable:res.depositeNegociable=='true'?true:null,
          ExcludeMaintenance:res.maintainenceCost,
          CurrentlyInLoan:res.current_in_loan=='true'?true:null,
          
          
        });console.log('value patched') ;
          this.mainmon=res.squareFT;
          if(res.MaintenanceStatus){
            this.maintanceVal=res.MaintenanceStatus;
          }
        
        
         }
  
      
        
      )
    }
    maintanceVal='Include Maintenance';
    mv='Include Maintenance';
    maintance(a:any){
      console.log(this.maintanceVal);
      this.maintanceVal=a;

      if(this.maintanceVal=='Exclude Maintenance'){
        this.priceform.addControl('ExcludeMaintenance', new FormControl('', [Validators.required,]));
      }else{
        this.priceform.removeControl('ExcludeMaintenance');
      }
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
    Checkdata:any=[];
    rentsub(){
      
      this.submitted=true;
      if ( this.priceform.valid){
        if(this.maintanceVal=='Exclude Maintenance'){
          this.Checkdata={
    
            MonthlyRentFrom:this.priceform.get('MonthlyRentFrom').value,
   
            maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
            squareFT:this.mainmon,
            MaintenanceStatus:this.maintanceVal,
          
          }
        }else{
          this.Checkdata={
    
            MonthlyRentFrom:this.priceform.get('MonthlyRentFrom').value,
          
            MaintenanceStatus:this.maintanceVal,
          
          }
        }
      
      this.service.formput(this.id, this.Checkdata).subscribe((res:any)=>{
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
      console.log(this.priceform)
     
        if(this.maintanceVal=='Exclude Maintenance'){
          this.Checkdata={
    
            MonthlyRentFrom:this.priceform.get('MonthlyRentFrom').value,
   
            maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
            squareFT:this.mainmon,
            MaintenanceStatus:this.maintanceVal,
          
          }
        }else{
          this.Checkdata={
    
            MonthlyRentFrom:this.priceform.get('MonthlyRentFrom').value,
          
            MaintenanceStatus:this.maintanceVal,
          
          }
        }
      
      console.log('route triggered')
           
      this.service.formput(this.id,this.Checkdata).subscribe((res:any)=>{
        
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
  
