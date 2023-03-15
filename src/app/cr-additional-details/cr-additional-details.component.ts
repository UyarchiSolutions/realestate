import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-cr-additional-details',
  templateUrl: './cr-additional-details.component.html',
  styleUrls: ['./cr-additional-details.component.css']
})
export class CrAdditionalDetailsComponent {
 
  id: any;
  adform:any = this.fb.group({
    datetostart : new FormControl (),
    contactname: new FormControl(),
    cnumber: new FormControl(),
    c2number: new FormControl(),
    preOccupancy:new FormControl()
  })
  
  
  constructor(
    private fb: FormBuilder,
    private arouter: ActivatedRoute,
    private service: PostPropertyService,
    private router: Router
  ){
  
  }
  ngOnInit(): void {
    
    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      console.log(this.id,"this is id from sp");
      
    });
    this.service.formget(this.id).subscribe((res:any)=>{

      this.data=res;
      this.adform.patchValue({
        datetostart:res.availabilityDate,
        contactname:res.contactName,
        cnumber:res.primaryContactNumber,
        c2number:res.secondaryContactNumber,
        preOccupancy:res.preOccupy
      });
    })
  
  }
  
  data:any;
  Onsubmit(){
  
    let data ={
      availabilityDate:this.adform.get('datetostart')?.value,
      contactName:this.adform.get('contactname')?.value,
      primaryContactNumber:this.adform.get('cnumber')?.value,
      secondaryContactNumber:this.adform.get('c2number')?.value,
      preOccupy:this.pov,
      
    }
    this.service.formput(this.id,data).subscribe((res:any)=>{
  
  
      
  
      var postdata ={
        id:res._id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/commercial-rent-preview?' + queryString);
      console.log(res);
     })
       
  }
  pov:any;
  PrevOccup(a:any){
    this.pov=a;
  }
  routetopreview(){
  
    var data = {
      id: this.id,
    };
    var queryString = new URLSearchParams(data).toString();
    this.router.navigateByUrl('/residentaial-rent-preview?' + queryString);
  
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
  

