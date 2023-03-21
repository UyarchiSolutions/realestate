import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Address } from 'ng-google-places-autocomplete';
import { PostPropertyService } from '../services/post-property.service';
import { MapsAPILoader } from '@agm/core';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  latitude!: number;
  longtitude!: number;
  placesService!: google.maps.places.PlacesService;


  constructor ( private service:PostPropertyService,
    private fb:FormBuilder,private mapsAPILoader: MapsAPILoader){

    
      
  }
  Resform:any = this.fb.group({
    BuyerAddres: new FormControl(''),
    type:new FormControl(''),
    PropertyType:new FormControl(''),
    BHK:new FormControl(''),
    Construction:new FormControl('')

  })
  Comform:any = this.fb.group({
    CBuyerAddres: new FormControl(''),
    Ctype:new FormControl(''),
    CPropertyType:new FormControl(''),
    CBHK:new FormControl(''),
    CConstruction:new FormControl('')

  })
  ngOnInit(): void {
   
   
  }
  area:any;
  city: any;
  BuyerAddres:any;
  addressArray:any[]=[];
  localities:any[]=[];
  zoom=10;
 
  GetLocality(){
  
  }
  handleAddressChange(address: Address,) {

    this.BuyerAddres = address.formatted_address;
    this.Resform.patchValue({
      BuyerAddres: this.BuyerAddres,
   })

   this.latitude = address.geometry.location.lat();
   this.longtitude = address.geometry.location.lng();


   this.GetLocality();

   this.service.getAddress(this.latitude, this.longtitude).subscribe((res: any) => {
    console.log(res)
     
     
      let address = res[0].address_components;
      let area = address.find((component:any) => component.types.includes('locality')).long_name;
      console.log(area);
      this.area = area;

     let city = address.find((component:any) => component.types.includes('administrative_area_level_3')).long_name;
      console.log(city);
      this.city= city; 
      
  
    }) 
    
    
     
   }
   options: any = {
    componentRestrictions: { country: 'IN' }
  }
  ChandleAddressChange(address: Address,) {

    this.BuyerAddres = address.formatted_address;
    this.Comform.patchValue({
      BuyerAddres: this.BuyerAddres,
   })

   this.latitude = address.geometry.location.lat();
   this.longtitude = address.geometry.location.lng();


   this.GetLocality();

   this.service.getAddress(this.latitude, this.longtitude).subscribe((res: any) => {
    console.log(res)
     
     
      let address = res[0].address_components;
      let area = address.find((component:any) => component.types.includes('locality')).long_name;
      console.log(area);
      this.area = area;

     let city = address.find((component:any) => component.types.includes('administrative_area_level_3')).long_name;
      console.log(city);
      this.city= city; 
      
  
    }) 
    
    
     
   }
   Coptions: any = {
    componentRestrictions: { country: 'IN' }
  }
  pv:any;
  propertyv(a: any) {
    this.pv = a;
    console.log(this.pv);
  }
  range=10;
  page=0;
  Ressubmit(){
    let data ={
      formatAdd:this.Resform.get('BuyerAddres')?.value,

    }
    this.service.getSellerDetails(this.page,this.range,data).subscribe((res:any)=>{
      console.log(res);
    })
    
  }
  Comsubmit(){
    console.log(this.Comform.value,'zcxzxc');
  }
  resOrCom='Residential';
  switch(e:any){
    this.resOrCom=e;
  }

}
