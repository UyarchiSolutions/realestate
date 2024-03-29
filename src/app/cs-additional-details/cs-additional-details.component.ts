import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-cs-additional-details',
  templateUrl: './cs-additional-details.component.html',
  styleUrls: ['./cs-additional-details.component.css']
})
export class CsAdditionalDetailsComponent {
 
   
    id: any;
    adform:any = this.fb.group({
      datetostart : new FormControl ('',Validators.required),
      contactname: new FormControl('',Validators.required),
      cnumber: new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
      c2number: new FormControl('',[Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
      
    })
    
    today: Date = new Date();
    constructor(
      private fb: FormBuilder,
      private arouter: ActivatedRoute,
      private service: PostPropertyService,
      private router: Router
    ){
    
    }
    routerlink='/start-posting/commercial-sale-add-details';
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
          preOccupancy:res.preOccupy,
          routeLink:this.routerlink
        });
        this.pov=res.preOccupy
      })
    
    }
    
    data:any=[]
    submited=false;
    sameNum=false;
    Onsubmit(){
    
      this.submited=true;
      // console.log(this.adform.value,this.pov,this.adform.valid)
      // console.log(this.adform.get('cnumber')?.value == this.adform.get('c2number')?.value , !(this.adform.get('cnumber')?.value == undefined),this.adform.get('cnumber')?.value == undefined)
      if(this.adform.get('cnumber')?.value == this.adform.get('c2number')?.value && !(this.adform.get('cnumber')?.value == undefined) ){
        this.sameNum=true;

      }else{
        this.sameNum=false;

      }
      if(this.adform.valid && !this.sameNum && this.pov){
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
        this.router.navigateByUrl('/start-posting/commercial-sale-preview?' + queryString);
        console.log(res);
       })
      }  
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
      this.router.navigateByUrl('/start-posting/commercial-sale-preview?' + queryString);
    
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
    
  
  
