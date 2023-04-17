import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Address } from 'ng-google-places-autocomplete';
import { PostPropertyService } from '../services/post-property.service';
import { MapsAPILoader } from '@agm/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies';





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
    private fb:FormBuilder,private route:Router,private toastr: ToastrService){


  }
  Resform:any = this.fb.group({
    BuyerAddres: new FormControl('',Validators.required),
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
   
    this.Getbuyer();
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
  
  Carea:any=[];
  Ccity: any;
  CBuyerAddres:any;
  CaddressArray:any[]=[];
  Clocalities:any[]=[];
  Czoom=10;
  CareaSend:any=[];
  ChandleAddressChange(address: Address,input:any){
    

      let Showvalue = input.value;
     let  Sendvalue = Showvalue.split(',').join('-');
      this.Carea.push(Showvalue);
      console.log(this.Carea,'show address');
      this.CareaSend.push(Sendvalue)
      console.log(this.CareaSend,'show address');
  
    
        this.CBuyerAddres = address.formatted_address;
        this.Comform.patchValue({
          CBuyerAddres: this.CBuyerAddres,
       })
       
       console.log(this.CBuyerAddres,this.Comform.get('CBuyerAddres')?.value);
     this.latitude = address.geometry.location.lat();
     this.longtitude = address.geometry.location.lng();
  
  
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
    if(this.areaSend.length==0){
      this.toastr.error('Fill the field', 'Please fil the address!', {
        positionClass: 'toast-bottom-center'
     });
    }
    if(this.Resform.get('type')?.value == ''){
      this.toastr.error('Select the Type', '', {
        positionClass: 'toast-bottom-center'
     });
    }
    if(this.Resform.get('type')?.value == 'Rent' && this.areaSend.length>0){
    
      
    let data ={
      formatAdd:this.BuyerAddres,
      type:this.Resform.get('type')?.value,
      propertType:this.Resform.get('PropertyType')?.value,
      BHKType:this.Resform.get('BHK')?.value? this.bhkArr.indexOf( this.Resform.get('BHK')?.value).toString():'',
      area:this.areaSend,
    }
   
      var queryString = new URLSearchParams(data).toString();
      this.route.navigateByUrl('/buyer-residential-rent-view?' + queryString );
    
  }

    if(this.Resform.get('type')?.value == 'Sale' && this.areaSend.length>0 ){
      let data ={
        formatAdd:this.BuyerAddres,
        type:'Sale',
        propertType:this.Resform.get('PropertyType')?.value,
        BHKType:this.Resform.get('BHK')?.value? this.bhkArr.indexOf( this.Resform.get('BHK')?.value).toString():'',
        area:this.areaSend,
      }

      var queryString = new URLSearchParams(data).toString();
      this.route.navigateByUrl('/buyer-residential-buy-view?' + queryString );
    
  }
  };

  Comsubmit()
  {
    if(this.CareaSend.length==0){
      this.toastr.error('Fill the field', 'Please fil the address!', {
        positionClass: 'toast-bottom-center'
     });
    }
    if(this.Comform.get('Ctype')?.value == ''){
      this.toastr.error('Select the Type', '', {
        positionClass: 'toast-bottom-center'
     });
    }
    if(this.Comform.get('Ctype')?.value == 'Rent' && this.CareaSend.length>0){
    console.log('iside if')
      
    let data ={
      formatAdd:this.CBuyerAddres,
      type:'Rent',
      // propertType:this.Comform.get('CPropertyType')?.value,
      // BHKType:this.Comform.get('CBHK')?.value? this.bhkArr.indexOf( this.Comform.get('BHK')?.value).toString():'',
      area:this.CareaSend,
    }
   
      var queryString = new URLSearchParams(data).toString();
      this.route.navigateByUrl('/buyer-commercial-rent-view?' + queryString );
    
  }

    if(this.Comform.get('Ctype')?.value == 'Buy' && this.CareaSend.length>0 ){
      console.log('iside if')
      let data ={
        formatAdd:this.CBuyerAddres,
        type:'Sale',
        // propertType:this.Comform.get('CPropertyType')?.value,
        // BHKType:this.Comform.get('CBHK')?.value? this.bhkArr.indexOf( this.Comform.get('BHK')?.value).toString():'',
        area:this.CareaSend,
      }

      var queryString = new URLSearchParams(data).toString();
      this.route.navigateByUrl('/buyer-commercial-buy-view?' + queryString );
    
  }
  };
  CremoveArea(i:any){
    console.log(i);
    this.Carea.splice(i,1);
  
    console.log(this.area,'area arry');
    this.service.GAreaArr = this.area;
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
  buyer:any;
  buyershow=false;
  Getbuyer(){
    this.service.Get_buyer_account().subscribe((res:any)=>{
      console.log(res);
      this.buyer=res;
      this.buyershow=true;
    })
  }
  logOut() {
    sessionStorage.clear();
    localStorage.clear();
    Cookie.delete('buyer');
    this.route.navigateByUrl('/');
    this.buyershow=false;
  }
  changepassword() {
    this.route.navigateByUrl('/changepassword-buyer');
  }
  bhksend(i:any){
  this.Resform.get('BHK').patchValue(i);
  console.log(this.Resform.get('BHk')?.value);
  }
}
