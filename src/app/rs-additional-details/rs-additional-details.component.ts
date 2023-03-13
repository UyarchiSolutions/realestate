import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-rs-additional-details',
  templateUrl: './rs-additional-details.component.html',
  styleUrls: ['./rs-additional-details.component.css']
})
export class RsAdditionalDetailsComponent implements OnInit {
  id: any;
adform:any = this.fb.group({
  datetostart : new FormControl (),
  contactname: new FormControl(),
  cnumber: new FormControl(),
  c2number: new FormControl(),
  paidpropety: new FormControl(),
  Saledeed: new FormControl(),
  occuCerf:new FormControl(),
  comCert:new FormControl ()
})
  constructor(
    private fb: FormBuilder,
    private arouter: ActivatedRoute,
    private service: PostPropertyService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      console.log(this.id,"this is id from sp");
      
    });
    this.service.formget(this.id).subscribe((res:any)=>{
      this.adform.patchValue({
        datetostart:res.availabilityDate,
        contactname:res.contactName,
        cnumber:res.primaryContactNumber,
        c2number:res.secondaryContactNumber,
        paidpropety:res.property_Tax,
        Saledeed:res.sale_Deed_Certificate,
        occuCerf:res.occuPency_certificate,
        comCert:res.Completion_certificate

      })
    })
  }
    Onsubmit(){

      let data ={
        availabilityDate:this.adform.get('datetostart')?.value,
        contactName:this.adform.get('contactname')?.value,
        primaryContactNumber:this.adform.get('cnumber')?.value,
        secondaryContactNumber:this.adform.get('c2number')?.value,
        property_Tax:this.adform.get('paidpropety')?.value,
        sale_Deed_Certificate:this.adform.get('Saledeed')?.value,
        occuPency_certificate:this.adform.get('occuCerf')?.value,
        Completion_certificate:this.adform.get('comCert')?.value
      }
      this.service.formput(this.id,data).subscribe((res:any)=>{
        var postdata ={
          id:res._id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/residential-sale-preview?' + queryString);
        console.log(res);
        console.log(res,'saved')
       })
         
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
