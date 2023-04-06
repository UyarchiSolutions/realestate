import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Address } from 'ng-google-places-autocomplete';
import { PostPropertyService } from '../services/post-property.service';
import { MapsAPILoader } from '@agm/core';
import { Router } from '@angular/router';





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
    private fb:FormBuilder,private route:Router){

    
      
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
  area:any=[];
  city: any;
  BuyerAddres:any;
  addressArray:any[]=[];
  localities:any[]=[];
  zoom=10;
  areaSend:any=[];

  handleAddressChange(address: Address,input:any) {

    let Showvalue = input.value;
   let  Sendvalue = Showvalue.split(',').join('-');
    this.area.push(Showvalue);
    console.log(this.area,'show address');
    this.areaSend.push(Sendvalue)
    console.log(this.areaSend,'show address');

  
      this.BuyerAddres = address.formatted_address;
      this.Resform.patchValue({
        BuyerAddres: this.BuyerAddres,
     })

   this.latitude = address.geometry.location.lat();
   this.longtitude = address.geometry.location.lng();


  

  //  this.service.getAddress(this.latitude, this.longtitude).subscribe((res: any) => {
  //   console.log(res)
     
     
  //     let address = res[0].address_components;
  //     let area = address.find((component:any) =>{ 
  //       if( component.types.includes('locality')){

  //         console.log(component.types.includes('locality'),'locality');

  //       return component.types.includes('locality')}

  //       if( component.types.includes('sublocality_level_1')){

  //         console.log(component.types.includes('sublocality_level_1'),'sublocality_level_1');

  //       return component.types.includes('sublocality_level_1')}
     
  //     }
  //     ).long_name; 
  //     console.log(area);
     
  //     this.service.GAreaArr = this.area;
  //     console.log(this.area,'area arry')

  //    let city = address.find((component:any) => component.types.includes('administrative_area_level_3')).long_name;
  //     console.log(city);
  //     this.city= city; 

  //    
  //     this.Resform.setValue({
  //       BuyerAddres: this.BuyerAddres,
  //    })
  //   }) 
  this.Resform.get('BuyerAddres').reset();

    console.log(this.Resform.get('BuyerAddres')?.value,'buyer address')
    
     
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


 

   this.service.getAddress(this.latitude, this.longtitude).subscribe((res: any) => {
    console.log(res)
     
     
      let address = res[0].address_components;
      let area = address.find((component:any) =>{ 
        if( component.types.includes('locality')){

          console.log(component.types.includes('locality'),'locality');

        return component.types.includes('locality')}

        if( component.types.includes('sublocality_level_1')){

          console.log(component.types.includes('sublocality_level_1'),'sublocality_level_1');

        return component.types.includes('sublocality_level_1')}
     
      }
      ).long_name; 

      this.area = area;

     let city = address.find((component:any) => component.types.includes('administrative_area_level_3')).long_name;
      console.log(city);
      this.city= city; 
      
  
    }) 
    
    
     
   }
   Coptions: any = {
    componentRestrictions: { country: 'IN' }
  }
  // pv:any;
  // propertyv(a: any) {
  //   this.pv = a;
  //   console.log(this.pv);
  // }
  range=10;
  page=0;
  bhkArr: any[]=
  ['1 Rk','1 BHK','2 BHK','3 BHK','4 BHK','5 BHK','6 BHK'
  ,'7 BHK','8 BHK','9 BHK','10+ BHK'] ;
  Ressubmit()
  {
    if(this.Resform.get('type')?.value == 'Rent'){
     
    let data ={
      formatAdd:this.BuyerAddres,
      type:this.Resform.get('type')?.value,
      propertType:this.Resform.get('PropertyType')?.value,
      BHKType:this.Resform.get('BHK')?.value,
      area:this.areaSend,
    }
   
      var queryString = new URLSearchParams(data).toString();
      this.route.navigateByUrl('/buyer-residential-rent-view?' + queryString );
    
  }

    if(this.Resform.get('type')?.value == 'Sale'){
    let data ={
      formatAdd:this.Resform.get('BuyerAddres')?.value,

    }
    this.service.getSellerDetails(this.page,this.range,data).subscribe((res:any)=>{
      console.log(res);
      var postdata = {
        formatAdd:this.Resform.get('BuyerAddres')?.value,
        

      };
      var queryString = new URLSearchParams(postdata).toString();
      this.route.navigateByUrl('/buyer-residential-buy-view?' + queryString );
    })
  }
  }
  Comsubmit(){
    console.log(this.Comform.value,'zcxzxc');
  }
  resOrCom='Residential';
  switch(e:any){
    this.resOrCom=e;
  }
  removeArea(i:any){
    console.log(i);
    this.area.splice(i,1);
    console.log('area removed',this.area.indexOf(i),'index');
    console.log(this.area,'area arry');
    this.service.GAreaArr = this.area;
  }
}
