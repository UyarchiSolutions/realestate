import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'ng-google-places-autocomplete';
import { PostPropertyService } from '../services/post-property.service';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-rr-location-details',
  templateUrl: './rr-location-details.component.html',
  styleUrls: ['./rr-location-details.component.css']
})
export class RrLocationDetailsComponent  implements OnInit{

  id:any;
  lat: any = 13.0827;
  long: any = 80.2707;
  latitude:any;
  longtitude:any;

  submitted:boolean=false;
  rrlocform:any = this.fb.group({
   
    Landmark: new FormControl ('',Validators.required),
    Pincode: new FormControl ('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    BuildingName: new FormControl ('',Validators.required),
    Address: new FormControl ('',Validators.required),
    lat:new FormControl ('',Validators.required),
    long:new FormControl ('',Validators.required),
    addressLoaction: new FormControl('',[Validators.required, Validators.max(6)]),
    direction:new FormControl ('',Validators.required)
  })
  myAddres: any;


  constructor(private arouter:ActivatedRoute,
   private fb:FormBuilder ,private router:Router, private service:PostPropertyService,){

  }
 

  ngOnInit(): void {


    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      console.log(this.id,"this is id from rrp"); 
      navigator.geolocation.getCurrentPosition((position: any) => {
        this.latitude = position.coords.latitude;
        this.longtitude = position.coords.longitude;
        this.rrlocform.patchValue({
          lat: this.latitude,
          long: this.longtitude
        })
      })
    })
    this.updateform();
    }

    OnSubmit(){

      this.submitted = true;
      if( this.rrlocform.valid ){
      var data={
        landMark:this.rrlocform.get('Landmark')?.value,
        pineCode:this.rrlocform.get('Pincode')?.value,
        BuildingName:this.rrlocform.get('BuildingName')?.value,
        lat:this.rrlocform.get('lat')?.value,
        long:this.rrlocform.get('long')?.value,
        Address:this.rrlocform.get('Address')?.value,
        buildingDirection:this.rrlocform.get('direction')?.value,
        formatedAddress:this.rrlocform.get('addressLoaction')?.value
      }
        this.service.formput(this.id,data).subscribe((res:any)=>{

          console.log(res);
          var postdata ={
            id:res._id
          }
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/residentaial-rent-rental-details?' + queryString);
          console.log(res);
         
         })
        }
    }
    updateform(){
      this.service.formget(this.id).subscribe((res:any)=>{
        this.rrlocform.patchValue({

          Landmark:res.landMark,
          Pincode:res.pineCode,
          BuildingName:res.BuildingName,
          lat:res.lat,
          long:res.long,
          addressLoaction:res.formatedAddress,
          direction:res.buildingDirection,
          Address:res.Address

        })
        console.log(res);
      })
    }
    routetopreview(){

      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/residentaial-rent-preview?' + queryString);
  
      this.service.formget(this.id).subscribe((res: any) => {});
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
      if(count == 5){
        var postdata ={
          id:this.id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/residentaial-rent-details?' + queryString);
        this.service.formget(this.id).subscribe((res:any)=>{
        })
      }
    }
      


    // address for map
    
  handleAddressChange(address: Address) {
    // this.myAddres = address.formatted_address
    this.latitude = address.geometry.location.lat();
    this.longtitude = address.geometry.location.lng();
    console.log(address.geometry.location.lat(),address.geometry.location.lng(),'handle change');
   
    this.rrlocform.patchValue({
      lat: this.latitude,
      long: this.longtitude,
    })
    console.log(this.rrlocform.get('lat')?.value,this.rrlocform.get('long')?.value,"dfnhjkdhdfghfg");
  }
  options: any = {
    componentRestrictions: { country: 'IN' }
  }

  draggEnded($event: any) {
    this.rrlocform.patchValue({
      lat: $event.latLng.lat(),
      long: $event.latLng.lng()
    })
    console.log($event.latLng.lat(),$event.latLng.lng(),'event');
    console.log(this.rrlocform.get('lat')?.value,this.rrlocform.get('long')?.value,"dfnhjkdhdfghfg")
    this.service.getAddress($event.latLng.lat(), $event.latLng.lng()).subscribe((res: any) => {
      console.log(res)
       
        this.myAddres = res[0].formatted_address
      
        this.rrlocform.patchValue({
          addressLoaction: this.myAddres,

        })
      }
    )
  }
  parseFloat(value: any) {
    return parseFloat(value);
  }

}



