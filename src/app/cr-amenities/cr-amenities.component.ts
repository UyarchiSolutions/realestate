import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-cr-amenities',
  templateUrl: './cr-amenities.component.html',
  styleUrls: ['./cr-amenities.component.css']
})
export class CrAmenitiesComponent {

  
  
      id: any;
      data:any;
  none: any;
    
      constructor(
        private fb: FormBuilder,
        private arouter: ActivatedRoute,
        private service: PostPropertyService,
        private router: Router
      ) {
    
      }
      myform:any = new FormGroup({
    
       
        waterFacility:new FormControl(),
        Security:new FormControl(),
        Escalator:new FormControl(),
        WIFI:new FormControl(),
      })
      
      ngOnInit(): void {
        this.arouter.queryParams.subscribe((params) => {
          console.log(params);
          this.id = params['id'];
          console.log(this.id, 'this is id from  rd');
    
          this.updateform();
        });
      
        this.service.formget(this.id).subscribe((res:any)=>{
          this.data=res;
          this.myform.patchValue({
            Security:res.security,
            Escalator:res.escalator,
            waterFacility:res.waterStorage,
            WIFI:res.wifi
          })
        })
      }

      submited=false;
      submit(){
        
    
        var data ={
          furnishingStatus:this.fsv,
          bathRoomType:this.btv,
          security: this.myform.get('Security')?.value,
          parkingFacilities:this.pv,
          powerBackup:this.pb,
          escalator:this.myform.get('Escalator')?.value,
          waterStorage:this.myform.get('waterFacility')?.value,
          wifi:this.myform.get('WIFI')?.value,
          Lift:this.lft
    
        }
        this.service.formput(this.id,data).subscribe((res:any)=>{
    
          console.log(res);
          var postdata ={
            id:res._id
          }
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/commercial-rent-gallery?' + queryString);
          console.log(res);
         
         })
        
    
    
      }
      updateform(){
    
        this.service.formget(this.id).subscribe((res:any)=>{
           
            this.data=res;
        
        })
      
    
      }
      fsv: any;
    
      furstav(a: any) {
        this.fsv = a;
        console.log(this.fsv);
        this.myform.get('furnishingStatus').setValue(a);
      }
      wsv: any;
    
      wassupv(a: any) {
        this.wsv = a;
        console.log(this.wsv);
        this.myform.get('waterSupply').setValue(a);
      }
      brv: any;
    
      bathrv(a: any) {
        this.brv = a;
        console.log(this.brv);
        this.myform.get('bathRoomCount').setValue(a);
      }
      btv: any;
      bathTv(a: any) {
        this.btv = a;
        console.log(this.btv);
        this.myform.get('bathRoomType').setValue(a);
      }
      ttv: any;
      toilTv(a: any) {
        this.ttv = a;
        console.log(this.ttv);
        this.myform.get('toiletType').setValue(a);
      }
      bv: any;
      balTv(a: any) {
        this.bv = a;
        console.log(this.bv);
        this.myform.get('balconyCount').setValue(a);
      }
      pv: any;
      parkTv(a: any) {
        this.pv = a;
      }
      kv: any;
   
 

      pb:any;
      powerbv(a:any){
    
        this.pb=a;
        this.myform.get('powerBackup').setValue(a);
    
      }
      routetopreview(){
       
        var data ={
          furnishingStatus:this.fsv,
          bathRoomType:this.btv,
          security: this.myform.get('Security')?.value,
          parkingFacilities:this.pv,
          powerBackup:this.pb,
          escalator:this.myform.get('Escalator')?.value,
          waterStorage:this.myform.get('waterFacility')?.value,
          wifi:this.myform.get('WIFI')?.value,
          Lift:this.lft
    
        }
        this.service.formput(this.id,data).subscribe((res:any)=>{})
        var postdata = {
          id: this.id,
        };
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/commercial-rent-preview?' + queryString);
    
        this.service.formget(this.id).subscribe((res: any) => {
          location.reload();
        });
        
      }
      lft:any;

      liftTv(a:any){

        this.lft = a;
        console.log(this.lft)
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
      showModal = -1;
      
      amshow= false;
      show(index: number) {
        this.showModal = index;
      }
      close() {
        this.showModal = -1;
        this.amshow=true;
      }
  
    }
    
    
    
  
  
  

