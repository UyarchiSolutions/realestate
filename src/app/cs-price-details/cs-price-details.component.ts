import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-cs-price-details',
  templateUrl: './cs-price-details.component.html',
  styleUrls: ['./cs-price-details.component.css']
})
export class CsPriceDetailsComponent {

      
      id:any;
      data:any;
    
      priceform:any= this.fb.group({
        ExpectedPrice: new FormControl('',Validators.required),
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
          }
          this.priceform.patchValue({
            ExpectedPrice:res.MonthlyRentFrom,
            ExpectedpricetNegotiable:res.RentNegociable=='true'?true:null,
            CurrentlyInLoan:res.current_in_loan=='true'?true:null,
            
            ExcludeMaintenance:res.maintainenceCost,
          
            
          });
          this.mainmon=res.squareFT;
          console.log('value patched',this.maintanceVal) ;
          if(this.data.MaintenanceStatus){
            this.maintanceVal= this.data.MaintenanceStatus; 
          }
          
           }
        )
      }
     maintanceVal='Include Maintenance';
      maintance(a:any){
      
        this.maintanceVal=a;
        if(this.maintanceVal=='Exclude Maintenance'){
          console.log('added form');
          this.priceform.addControl('ExcludeMaintenance', new FormControl('', [Validators.required,]));
        }else{
          console.log('remove form');
          this.priceform.removeControl('ExcludeMaintenance');
        }
        
      }
  
      mainmon:any;
    
      mainmonv(a:any){
    
        this.mainmon=a;
      }
      Lmainmon:any;
    
      Lmainmonv(a:any){
    
        this.Lmainmon=a;
      }
      routerlink='/start-posting/commercial-sale-price-details';
      submitted=false;
      Checkdata:any;
      rentsub(){

        this.submitted = true;
       
        if(this.maintanceVal=='Exclude Maintenance'){
        this.Checkdata={
  
          MonthlyRentFrom:this.priceform.get('ExpectedPrice').value,
          maintainenceCost:this.priceform.get('ExcludeMaintenance')?.value,
          squareFT:this.mainmon,
          MaintenanceStatus:this.maintanceVal,
          
        }
      }else{
        this.Checkdata={
  
          MonthlyRentFrom:this.priceform.get('ExpectedPrice').value,
          MaintenanceStatus:this.maintanceVal,
        
        }
      }
      if(this.allKeysHaveValue(this.Checkdata)  ){ 
        console.log('updated',this.Checkdata);
        var data={
  
          MonthlyRentFrom:this.priceform.get('ExpectedPrice').value,
          RentNegociable:this.priceform.get('ExpectedpricetNegotiable').value,
          current_in_loan:this.priceform.get('CurrentlyInLoan').value,
          maintainenceCost:this.priceform.get('ExcludeMaintenance')?.value,
          squareFT:this.mainmon,
          MaintenanceStatus:this.maintanceVal,
          routeLink:this.routerlink,
        }
       
        this.service.formput(this.id,data).subscribe((res:any)=>{
          console.log(res);
          
          var postdata ={
            id:res._id
          }
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/start-posting/commercial-sale-amenities?' + queryString);
          console.log(res);
          
        })
      }
    
      }
      allKeysHaveValue(obj: any) {
        const keys = Object.keys(obj);
        let allKeysHaveValue = true;
    
        keys.forEach((key) => {
        if (!obj.hasOwnProperty(key) || !obj[key]) {
          console.log(obj.hasOwnProperty(key),obj[key])
          allKeysHaveValue = false;
        }
      });
      console.log(allKeysHaveValue);
      return allKeysHaveValue;
      
    }
    
    
     
    
      routetopreview(){
        var data;
        if(this.maintanceVal=='Exclude Maintenance'){
          data={
    
            MonthlyRentFrom:this.priceform.get('ExpectedPrice').value,
            maintainenceCost:this.priceform.get('ExcludeMaintenance')?.value,
            squareFT:this.mainmon,
            MaintenanceStatus:this.maintanceVal,
            
          }
        }else{
          data={
    
            MonthlyRentFrom:this.priceform.get('ExpectedPrice').value,
            MaintenanceStatus:this.maintanceVal,
          
          }
        }
        if(this.allKeysHaveValue(data) ){ 
          console.log('updated',this.Checkdata);
        if(this.maintanceVal=='Exclude Maintenance'){
          data={
    
            MonthlyRentFrom:this.priceform.get('ExpectedPrice').value,
            RentNegociable:this.priceform.get('ExpectedpricetNegotiable').value,
            current_in_loan:this.priceform.get('CurrentlyInLoan').value,
            maintainenceCost:this.priceform.get('ExcludeMaintenance')?.value,
            squareFT:this.mainmon,
            MaintenanceStatus:this.maintanceVal,
            
          }
        }else{
          data={
    
            MonthlyRentFrom:this.priceform.get('ExpectedPrice').value,
            RentNegociable:this.priceform.get('ExpectedpricetNegotiable').value,
            current_in_loan:this.priceform.get('CurrentlyInLoan').value,
            MaintenanceStatus:this.maintanceVal,
          
          }  
        }
            console.log(data) 
       this.service.formput(this.id,data).subscribe((res:any)=>{
        var postdata = {
          id: this.id,
        };
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/start-posting/commercial-sale-preview?' + queryString);
    
       
       });
            
       
      }
      }
    
      back(count: any) {
        if (count == 0) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl('/start-posting/commercial-sale-property?' + queryString);
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 1) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl(
            '/start-posting/commercial-sale-location-details?' + queryString
          );
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 2) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl(
            '/start-posting/commercial-sale-price-details?' + queryString
          );
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 3) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl('/start-posting/commercial-sale-amenities?' + queryString);
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 4) {
          var postdata = {
            id: this.id,
          };
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/start-posting/commercial-sale-gallery?' + queryString);
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 5) {
          var postdata = {
            id: this.id,
          };
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/start-posting/commercial-sale-add-details?' + queryString);
          this.service.formget(this.id).subscribe((res: any) => {});
        }
      }
    }
    
  

