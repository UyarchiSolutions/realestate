import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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
            ExpectedpricetNegotiable:res.RentNegociable=='true'?true:null,
            CurrentlyInLoan:res.current_in_loan=='true'?true:null,
            
            ExcludeMaintenance:res.maintainenceCost,
          
            
          });this.maintanceVal=res.MaintenanceStatus;
          this.mainmon=res.squareFT;
          console.log('value patched') ;
          
           }
    
        
          
        )
      }
      maintanceVal='Include Maintenance';
    
      maintance(a:any){
        console.log(this.maintanceVal);
        this.maintanceVal=a;
        
      }
  
      mainmon:any;
    
      mainmonv(a:any){
    
        this.mainmon=a;
      }
      Lmainmon:any;
    
      Lmainmonv(a:any){
    
        this.Lmainmon=a;
      }
      routerlink='commercial-sale-price-details';
      rentsub(){
    
        var data={
  
          expectedPrice:this.priceform.get('ExpectedPrice').value,
          RentNegociable:this.priceform.get('ExpectedpricetNegotiable').value,
         
          current_in_loan:this.priceform.get('CurrentlyInLoan').value,
          maintainenceCost:this.priceform.get('ExcludeMaintenance').value,
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
          this.router.navigateByUrl('/commercial-sale-amenities?' + queryString);
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
        this.router.navigateByUrl('/commercial-sale-preview?' + queryString);
    
        this.service.formget(this.id).subscribe((res: any) => {
          location.reload();
        });
      }
    
      back(count: any) {
        if (count == 0) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl('/commercial-sale-property?' + queryString);
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 1) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl(
            '/commercial-sale-location-details?' + queryString
          );
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 2) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl(
            '/commercial-sale-price-details?' + queryString
          );
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 3) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl('/commercial-sale-amenities?' + queryString);
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 4) {
          var postdata = {
            id: this.id,
          };
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/commercial-sale-gallery?' + queryString);
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 5) {
          var postdata = {
            id: this.id,
          };
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/commercial-sale-add-details?' + queryString);
          this.service.formget(this.id).subscribe((res: any) => {});
        }
      }
    }
    
  

