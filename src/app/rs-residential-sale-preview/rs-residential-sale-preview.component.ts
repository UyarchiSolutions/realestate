import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-rs-residential-sale-preview',
  templateUrl: './rs-residential-sale-preview.component.html',
  styleUrls: ['./rs-residential-sale-preview.component.css']
})
export class RsResidentialSalePreviewComponent implements OnInit {
 
  
    id:any;
    date = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');
    
    constructor(private arouter: ActivatedRoute,
      private service: PostPropertyService,
      private router: Router){
  
    }
    ngOnInit(): void {
      
      this.arouter.queryParams.subscribe(params => {
        this.id=params['id'];
      });
      this.getalldata();
     
      
    }
    data:any;
  
    getalldata(){
      
      this.service.formget(this.id).subscribe((res:any)=>{
    
        this.data = res;
       
      })
      
    }
   
    imgSliderCheker:any;
    imgslider(a:any){
  
      this.imgSliderCheker = a;
    }
    Redirect(count:any){
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
        this.router.navigateByUrl('/residential-sale-gallery?' + queryString);
        this.service.formget(this.id).subscribe((res:any)=>{
        })
      }
      if(count == 5){
        var postdata ={
          id:this.id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/residential-sale-add-details?' + queryString);
        this.service.formget(this.id).subscribe((res:any)=>{
        })
      }
    }
  }
  

