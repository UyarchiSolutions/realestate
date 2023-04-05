import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-rr-additional-details',
  templateUrl: './rr-additional-details.component.html',
  styleUrls: ['./rr-additional-details.component.css']
})
export class RrAdditionalDetailsComponent implements OnInit {
id: any;
adform:any = new FormGroup({
  datetostart : new FormControl ('',Validators.required),
  contactname: new FormControl('',Validators.required),
  cnumber: new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
  c2number: new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')])
})


constructor(
  private fb: FormBuilder,
  private arouter: ActivatedRoute,
  private service: PostPropertyService,
  private router: Router
){

}
today: Date = new Date();

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
      c2number:res.secondaryContactNumber
    })
  })

}

data:any;
routerlink='residentaial-rent-details';
submited=false;
sameNum=false;
Onsubmit(){


  this.submited=true;
  if(this.adform.get('cnumber')?.value == this.adform.get('c2number')?.value ){
    this.sameNum=true;
  }
  if(this.adform.valid && !this.sameNum){

  
  let data ={
    availabilityDate:this.adform.get('datetostart')?.value,
    contactName:this.adform.get('contactname')?.value,
    primaryContactNumber:this.adform.get('cnumber')?.value,
    secondaryContactNumber:this.adform.get('c2number')?.value,
    routeLink:this.routerlink

  }

  this.service.formput(this.id,data).subscribe((res:any)=>{

    var postdata ={
      id:res._id
    }
    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/residentaial-rent-preview?' + queryString);
    console.log(res);
   })
  }
     
}
default(){
  this.sameNum=false;
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

back(count:any){
  if(count == 0){
    var data ={
     id:this.id
   }
   var queryString = new URLSearchParams(data).toString();
   this.router.navigateByUrl('/residential-rent?' + queryString);

   this.service.formget(this.id).subscribe((res:any)=>{
   

   })
  }
  if(count == 1){
    var data ={
     id:this.id
   }
   var queryString = new URLSearchParams(data).toString();
   this.router.navigateByUrl('/residentaial-rent-location-details?' + queryString);

   this.service.formget(this.id).subscribe((res:any)=>{
   })
  }
  if(count == 2){
    var data ={
     id:this.id
   }
   var queryString = new URLSearchParams(data).toString();
   this.router.navigateByUrl('/residentaial-rent-rental-details?' + queryString);

   this.service.formget(this.id).subscribe((res:any)=>{
   })
  }
  if(count == 3){
    var data ={
     id:this.id
   }
   var queryString = new URLSearchParams(data).toString();
   this.router.navigateByUrl('/residentaial-rent-amentites?' + queryString);

   this.service.formget(this.id).subscribe((res:any)=>{
   })
  }
  if(count == 4){
    var postdata ={
      id:this.id
    }
    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/residentaial-rent-gallery?' + queryString);
    this.service.formget(this.id).subscribe((res:any)=>{
    })
  }
}
routeToProp(){
  this.router.navigateByUrl('/owner')
}
changeps(){
  this.router.navigateByUrl('/changepassword-seller')
}
logOut(){
  sessionStorage.clear();
  localStorage.clear();
  Cookie.delete('tokens');
  this.router.navigateByUrl('/');
}

}
