import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-cr-rental-details',
  templateUrl: './cr-rental-details.component.html',
  styleUrls: ['./cr-rental-details.component.css']
})
export class CrRentalDetailsComponent implements OnInit {



      id:any;
      data:any=[];
    
      priceform:any= this.fb.group({
        ExpectedRent: new FormControl('',Validators.required),
        ExpectedrenttNegotiable:new FormControl(),
        AdvanceAmountNegotiable:new FormControl(),
        AdvanceAmount:new FormControl('',Validators.required),
        
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
    
          console.log(res,'res');
          if(res.MaintenanceStatus =='Exclude Maintenance'){
            this.maintance(this.data.MaintenanceStatus);
           
           }
           this.ldv=res.leaseDuration;
           this.lipv=res.lock_in_period;
          this.priceform.patchValue({
            ExpectedRent:res.MonthlyRentFrom,
            ExpectedrenttNegotiable:res.RentNegociable=='true'?true:null,
            AdvanceAmount :res.AdvanceAmt,
            AdvanceAmountNegotiable:res.depositeNegociable=='true'?true:null,
            ExcludeMaintenance:res.maintainenceCost,
            CurrentlyInLoan:res.current_in_loan
          
            
          }); 
          if(res.MaintenanceStatus){
            this.maintanceVal=res.MaintenanceStatus;
            this.mainmon=res.squareFT;
          }
         

           })
              this.leaseloop();
 
      }
      maintanceVal= 'Include Maintenance';
    
      maintance(a:any){
        console.log(this.maintanceVal);
        this.maintanceVal=a;

        if(this.maintanceVal=='Exclude Maintenance'){
          this.priceform.addControl('ExcludeMaintenance', new FormControl('', [Validators.required,]));
        }else{
          this.priceform.removeControl('ExcludeMaintenance');
        }
      }
      check(){
        console.log(this.priceform.get('ExpectedrenttNegotiable').value)
      }
  
      mainmon:any;
    
      mainmonv(a:any){
    
        this.mainmon=a;
      }
      Lmainmon:any;
    
      Lmainmonv(a:any){
    
        this.Lmainmon=a;
      }
      ldv:any;
      leasearray: any= [];
      leaseDur(a:any){
        this.ldv=a;
      }
      lipv:any;
      lockDur(a:any){
        this.lipv=a;
      }
      leaseloop(){
        for(let i = 1; i<=13; i++){
          this.leasearray.push(i +' Years' )
        }
      }
      routerlink='/start-posting/commercial-rent-rental-details';
      submitted=false;
      Checkdata:any;
      rentsub(){
        
        this.submitted =  true;
        if(this.maintanceVal=='Exclude Maintenance'){
        this.Checkdata={
  
          MonthlyRentFrom:this.priceform.get('ExpectedRent').value,
          AdvanceAmt:this.priceform.get('AdvanceAmount').value,
          maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
          leaseDuration:this.ldv,
          lock_in_period:this.lipv,
          squareFT:this.mainmon,
          MaintenanceStatus:this.maintanceVal,
        
        }
      }else{
        this.Checkdata={
  
          MonthlyRentFrom:this.priceform.get('ExpectedRent').value,
          AdvanceAmt:this.priceform.get('AdvanceAmount').value,
          leaseDuration:this.ldv,
          lock_in_period:this.lipv,
          MaintenanceStatus:this.maintanceVal,
        
        }
      }
        if(this.allKeysHaveValue(this.Checkdata)  ){ 
   
          console.log(this.Checkdata,'uploaded');
        var data={
  
          MonthlyRentFrom:this.priceform.get('ExpectedRent').value,
          RentNegociable:this.priceform.get('ExpectedrenttNegotiable').value,
          AdvanceAmt:this.priceform.get('AdvanceAmount').value,
          depositeNegociable:this.priceform.get('AdvanceAmountNegotiable').value,
          maintainenceCost:this.priceform.get('ExcludeMaintenance')?.value,
          leaseDuration:this.ldv,
          lock_in_period:this.lipv,
          squareFT:this.mainmon,
          MaintenanceStatus:this.maintanceVal,
          routeLink:this.routerlink,
        }
        console.log(data,'')
        this.service.formput(this.id,data).subscribe((res:any)=>{
          console.log(res,'updated');
          
          var postdata ={
            id:res._id
          }
          var queryString = new URLSearchParams(postdata).toString();
         this.router.navigateByUrl('/start-posting/commercial-rent-amenities?' + queryString);
        
          
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
    checkthis=false;
   
     
    
      routetopreview(){
        this.submitted=true
        if(this.priceform.valid){
          if(this.maintanceVal=='Exclude Maintenance'){

            this.Checkdata={
      
              MonthlyRentFrom:this.priceform.get('ExpectedRent').value,
              AdvanceAmt:this.priceform.get('AdvanceAmount').value,
              maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
              leaseDuration:this.ldv,
              lock_in_period:this.lipv,
              squareFT:this.mainmon,
              MaintenanceStatus:this.maintanceVal,
            
            }
          }else{
            this.Checkdata={
      
              MonthlyRentFrom:this.priceform.get('ExpectedRent').value,
              AdvanceAmt:this.priceform.get('AdvanceAmount').value,
              leaseDuration:this.ldv,
              lock_in_period:this.lipv,
              MaintenanceStatus:this.maintanceVal,
            
            }
          }
          this.submitted=false
               
                this.service.formput(this.id,this.Checkdata).subscribe((res:any)=>{
                  var postdata = {
                    id: this.id,
                  };
                  var queryString = new URLSearchParams(postdata).toString();
                  this.router.navigateByUrl('/start-posting/commercial-rent-preview?' + queryString);
                });
        }
      
      
      }
    
      back(count: any) {
        if (count == 0) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl('/start-posting/commercial-rent-property?' + queryString);
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 1) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl(
            '/start-posting/commercial-rent-location-details?' + queryString
          );
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 2) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl(
            '/start-posting/commercial-rent-rental-details?' + queryString
          );
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 3) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl('/start-posting/commercial-rent-amenities?' + queryString);
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 4) {
          var postdata = {
            id: this.id,
          };
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/commercial-rent-gallery?' + queryString);
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 5) {
          var postdata = {
            id: this.id,
          };
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/commercial-rent-add-details?' + queryString);
          this.service.formget(this.id).subscribe((res: any) => {});
        }
      }
    }
    
  

