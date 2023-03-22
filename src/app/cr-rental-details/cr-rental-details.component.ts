import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-cr-rental-details',
  templateUrl: './cr-rental-details.component.html',
  styleUrls: ['./cr-rental-details.component.css']
})
export class CrRentalDetailsComponent implements OnInit {



      id:any;
      data:any;
    
      priceform:any= this.fb.group({
        ExpectedRent: new FormControl(),
        ExpectedrenttNegotiable:new FormControl(),
        AdvanceAmountNegotiable:new FormControl(),
        AdvanceAmount:new FormControl(),
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
            ExpectedRent:res.expectedPrice,
            ExpectedrenttNegotiable:res.RentNegociable=='true'?true:null,
            AdvanceAmount :res.AdvanceAmt,
            AdvanceAmountNegotiable:res.depositeNegociable=='true'?true:null,
            ExcludeMaintenance:res.maintainenceCost,
            CurrentlyInLoan:res.current_in_loan
            
            
          });this.maintanceVal= res.MaintenanceStatus ;
          this.mainmon=res.squareFT;
         
          console.log('valuepatche',res.RentNegociable,res.depositeNegociable);
          
           })
           this.leaseloop();
      }
      maintanceVal='Include Maintenance';
    
      maintance(a:any){
        console.log(this.maintanceVal);
        this.maintanceVal=a;
        
      }
      check(){
        console.log(this.priceform.get('ExpectedrenttNegotiable').value)
      }
  
      mainmon='';
    
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
      routerlink='commercial-rent-rental-details';
      rentsub(){
    
        var data={
  
          expectedPrice:this.priceform.get('ExpectedRent').value,
          RentNegociable:this.priceform.get('ExpectedrenttNegotiable').value,
          AdvanceAmt:this.priceform.get('AdvanceAmount').value,
          depositeNegociable:this.priceform.get('AdvanceAmountNegotiable').value,
          maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
          leaseDuration:this.ldv,
          lock_in_period:this.lipv,
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
          this.router.navigateByUrl('/commercial-rent-amenities?' + queryString);
          console.log(res);
          
        })
    
      }
    
    
     
    
      routetopreview(){
        var data={
  
          expectedPrice:this.priceform.get('ExpectedRent').value,
          RentNegociable:this.priceform.get('ExpectedrenttNegotiable').value,
          AdvanceAmt:this.priceform.get('AdvanceAmount').value,
          depositeNegociable:this.priceform.get('AdvanceAmountNegotiable').value,
          maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
          leaseDuration:this.ldv,
          lock_in_period:this.lipv,
          squareFT:this.mainmon,
          MaintenanceStatus:this.maintanceVal,
        }  
             
              this.service.formput(this.id,data).subscribe((res:any)=>{
                var postdata = {
                  id: this.id,
                };
                var queryString = new URLSearchParams(postdata).toString();
                this.router.navigateByUrl('/commercial-rent-preview?' + queryString);
              });
      
      }
    
      back(count: any) {
        if (count == 0) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl('/commercial-rent-property?' + queryString);
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 1) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl(
            '/commercial-rent-location-details?' + queryString
          );
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 2) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl(
            '/commercial-rent-rental-details?' + queryString
          );
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 3) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl('/commercial-rent-amenities?' + queryString);
    
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
    
  

