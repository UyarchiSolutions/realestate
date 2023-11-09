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
  
    })
  
    
    constructor(private fb:FormBuilder,private arouter: ActivatedRoute,
      private service:PostPropertyService,
      private router:Router){}
     edit:any;
    ngOnInit(): void {
  this.maintanceVal='Include Maintenance';
      
      
     
      this.arouter.queryParams.subscribe(params => {
        console.log(params);
        this.id=params['id'];
        this.edit=params['edit'];

        console.log(this.id,"this is id from sp");
        
      });
  
  
this.service.formget(this.id).subscribe((res:any)=>{
  
        this.data=res;
  
        console.log(res);
        if(res.MaintenanceStatus =='Exclude Maintenance'){
          this.maintance(this.data.MaintenanceStatus);
          this.maintanceVal=res.MaintenanceStatus;
          this.priceform.patchValue({
            MonthlyRentFrom:res.MonthlyRentFrom,
            ExpectedpricetNegotiable:res.RentNegociable=='true'?true:null,
          
            ExcludeMaintenance:res.maintainenceCost,
            CurrentlyInLoan:res.current_in_loan=='true'?true:null,
            sqft:res.squareFT
            
          });console.log('value patched') ;
          if(res.MaintenanceStatus){
            this.mainmon=res.squareFT
            this.maintanceVal=res.MaintenanceStatus
          }
         }
       
         else{
          if(res.MaintenanceStatus){
            this.mainmon=res.squareFT
            this.maintanceVal=res.MaintenanceStatus
          }
          console.log('value patched')
           
          this.priceform.patchValue({
            MonthlyRentFrom:res.MonthlyRentFrom,
            ExpectedpricetNegotiable:res.RentNegociable=='true'?true:null,
            CurrentlyInLoan:res.current_in_loan=='true'?true:null,
            
            
          })
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
        this.priceform.addControl('sqft', new FormControl('', [Validators.required,]));
      }else{
        this.priceform.removeControl('ExcludeMaintenance');
        this.priceform.removeControl('sqft');
      }
    }

    mainmon='';
  
    mainmonv(a:any){
      this.priceform.patchValue({
        sqft: a
      })
      this.mainmon=a;
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
            current_in_loan:this.priceform.get('CurrentlyInLoan')?.value,
            RentNegociable:this.priceform.get('ExpectedpricetNegotiable')?.value,
            maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
            squareFT:this.priceform.get('sqft').value,
            MaintenanceStatus:this.maintanceVal,
          
          }
        }else{
          this.Checkdata={
    
            MonthlyRentFrom:this.priceform.get('MonthlyRentFrom').value,
            RentNegociable:this.priceform.get('ExpectedpricetNegotiable')?.value,
            CurrentlyInLoan:this.priceform.get('CurrentlyInLoan')?.value,
            MaintenanceStatus:this.maintanceVal,
          
          }
        }
        if(this.priceform.valid){
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
    }
  
  
   
  
    routetopreview(){
      console.log(this.priceform)
     this.submitted=true
     if(this.priceform.valid){
      if(this.maintanceVal=='Exclude Maintenance'){
        this.Checkdata={
  
          MonthlyRentFrom:this.priceform.get('MonthlyRentFrom').value,
          RentNegociable:this.priceform.get('ExpectedpricetNegotiable')?.value,
          CurrentlyInLoan:this.priceform.get('CurrentlyInLoan')?.value,
          maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
          squareFT:this.mainmon,
          MaintenanceStatus:this.maintanceVal,
        
        }
      }else{
        this.Checkdata={
  
          MonthlyRentFrom:this.priceform.get('MonthlyRentFrom').value,
          RentNegociable:this.priceform.get('ExpectedpricetNegotiable')?.value,
            CurrentlyInLoan:this.priceform.get('CurrentlyInLoan')?.value,
          MaintenanceStatus:this.maintanceVal,
        
        }
      }
    
    console.log('route triggered')
         this.submitted=false
    this.service.formput(this.id,this.Checkdata).subscribe((res:any)=>{
      
    var postdata = {
      id: this.id,
    };
    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/start-posting/residential-sale-preview?' + queryString);

    
    });
        
     }
        
           
  
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
  
