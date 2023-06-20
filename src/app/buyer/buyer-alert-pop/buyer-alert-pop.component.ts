import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { BuyerService } from '../buyer.service';
import { Address } from 'ng-google-places-autocomplete';
import { PostPropertyService } from 'src/app/services/post-property.service';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'buyer-alert-pop',
  templateUrl: './buyer-alert-pop.component.html',
  styleUrls: ['./buyer-alert-pop.component.css']
})
export class BuyerAlertPopComponent implements OnInit {
 constructor(private fb:FormBuilder,private buyerService:BuyerService,private service:PostPropertyService) { }
  ngOnInit(): void {
   this.getAlert();
  }
  check:boolean=true;
  check1:boolean=false;
  
  minValue:any=5000;
  maxValue:any=100000;
  sendAlert=true;
  recAlert=false;
  showProfileHeader=false;


myform:any=this.fb.group({
  type:new FormControl(''),
})

  popform:any=this.fb.group({
  foodType:new FormControl(''),
  PropertyStatus: new FormControl(''),

})
ResiRentpop=false;
ResiSalepop=false;
CommRentpop=false;
CommSalepop=false;

popup(){
 console.log(this.property,this.myform.get('type')?.value)

 if(this.property == 'Residential' && this.myform.get('type')?.value == 'Rent' ){
   this.ResiRentpop=true;
 }
 if(this.property == 'Residential' && this.myform.get('type')?.value == 'Buy' ){
   this.ResiSalepop=true;
 }
 if(this.property == 'Commercial' && this.myform.get('type')?.value == 'Rent' ){
   this.CommRentpop=true;
 }
 if(this.property == 'Commercial' && this.myform.get('type')?.value == 'Buy' ){
   this.CommSalepop=true;
 }
 // this.showAlertpop=!this.showAlertpop;
}

pop_cheked(val: any, filter: any) {
 if (filter != '') {
   let index = filter.indexOf(val);

   if (index == -1) {
     return false;
   } else {
     return true;
   }
 } else {
   return false;
 }
}
  Commercial(){

    this.check1=true;
    this.check=false;
    this.property="Commercial";
   }
   property="Residential";
 Residential(){
  
  this.check=true;
  this.check1=false;
  this.property="Residential";

 }
 areaP:any;
addressP:any;
propertyTypeP:any;
BhkTypeP:any;
amountFromP:any;
amountToP:any;
parkingP:any;
propertyStatusP:any;
shftingDateP:any;

areaPArr:any=[];
propertyTypePArr:any=[];
BhkTypePPArr:any=[];
parkingPArr:any=[];
propertyStatusPArr:any=[];
shftingDatePPArr:any=[];

planToBuy:any=[];
CommProperty:any=[];
CommBuildType:any=[];
amenities:any=[];
BuildminValue:any=500;
BuildmaxValue:any=10000;

update_pop_filter(v:any,arr:any){

  if(v.target.checked){

    arr.push(v.target.value)
    console.log(arr)
  }
  else{
    let index = arr.indexOf(v.target.value);
    arr.splice(index,1)
    console.log(arr)
  }
}
letType:any;
empty(){
  this.propertyTypePArr=[];
  this.BhkTypePPArr=[];
  this.CommProperty=[]
  this.CommBuildType=[]
  this.parkingPArr=[]
  this.propertyStatusPArr=[]
  this.amenities=[]
  this.shftingDatePPArr=[]
  this.areaSend=[]
  this.CommProperty=[]
  this.CommBuildType=[]
}
popcheck(){
  if(this.property == 'Residential' && this.myform.get('type')?.value == 'Rent' ){
  let data= {
    area:this.areaSend,
    ResOrCom:this.property,
    type:'Rent',
    // address:this.areaPArr,
    amountFrom:this.minValue,
    amountTo:this.maxValue,
    propertyType:this.propertyTypePArr,
    BhkType:this.BhkTypePPArr,
    parking:this.parkingPArr,
    shftingDate:this.shftingDatePPArr,
    furnish:this.propertyStatusPArr,
    foodType:this.popform.get('foodType')?.value,
    PropertyStatus:this.popform.get('PropertyStatus')?.value
  }
  console.log(data,'data');
  if(this.firstAlert){
    this.buyerService.send_alert(data).subscribe((res:any)=>{
      console.log(res)
      this.ResiRentpop=false;
      this.getAlert();
      this.empty();
      this.letType='Rent'
    })
  }else{
    this.buyerService.resend_alert(this.popid,data).subscribe((res:any)=>{
      console.log(res)
      this.ResiRentpop=false;
      this.getAlert();
      this.empty();
      this.letType='Rent'
    })
  }
}
if(this.property == 'Residential' && this.myform.get('type')?.value == 'Buy' ){
  let data= {
    area:this.areaSend,
    // address:this.areaPArr,
    ResOrCom:this.property,
    type:'Sale',
    amountFrom:this.minValue,
    amountTo:this.maxValue,
    propertyType:this.propertyTypePArr,
    BhkType:this.BhkTypePPArr,
    parking:this.parkingPArr,
    planToBuy:this.planToBuy,
    furnish:this.propertyStatusPArr,
    PropertyStatus:this.popform.get('PropertyStatus')?.value
  }
  console.log(data,'data');
  if(this.firstAlert){
    this.buyerService.send_alert(data).subscribe((res:any)=>{
      console.log(res)
    
      this.getAlert();
      this.empty();
      this.letType='Buy'
      this.ResiSalepop=false;
  
    })
  }else{
    this.buyerService.resend_alert(this.popid,data).subscribe((res:any)=>{
      console.log(res)
      this.getAlert();
      this.empty();
      this.letType='Buy'
      this.ResiSalepop=false;
    })
  }
}
if(this.property == 'Commercial' && this.myform.get('type')?.value == 'Rent' ){
  let data= {
    area:this.areaSend,
    ResOrCom:this.property,
    type:'Rent',
    // address:this.areaPArr,
    amountFrom:this.minValue,
    amountTo:this.maxValue,
    propertyType:this.CommProperty,
    buildtype:this.CommBuildType,
    parking:this.parkingPArr,
    shftingDate:this.shftingDatePPArr,
    furnish:this.propertyStatusPArr,
    amenities:this.amenities,
    buildFrom:this.BuildminValue,
    buildTo:this.BuildmaxValue
   
  }
  console.log(data,'data');
  if(this.firstAlert){
    this.buyerService.send_alert(data).subscribe((res:any)=>{
      console.log(res)
      
      this.getAlert();
      this.empty();
      this.letType='Rent'
      this.CommRentpop=false;
    })
  }else{
    this.buyerService.resend_alert(this.popid,data).subscribe((res:any)=>{
      console.log(res)
     
      this.getAlert();
      this.empty();
      this.letType='Rent'
      this.CommRentpop=false;
    })
  }
}
if(this.property == 'Commercial' && this.myform.get('type')?.value == 'Buy' ){
  let data= {
    area:this.areaSend,
    ResOrCom:this.property,
    type:'Sale',
    // address:this.areaPArr,
    amountFrom:this.minValue,
    amountTo:this.maxValue,
    propertyType:this.CommProperty,
    buildtype:this.CommBuildType,
    parking:this.parkingPArr,
    planToBuy:this.planToBuy,
    furnish:this.propertyStatusPArr,
    amenities:this.amenities,
    buildFrom:this.BuildminValue,
    buildTo:this.BuildmaxValue
   
  }
  console.log(data,'data');
  if(this.firstAlert){
    this.buyerService.send_alert(data).subscribe((res:any)=>{
      console.log(res)
     
      this.getAlert();
      this.empty();
      this.letType='Buy'
      this.CommSalepop=false;

    })
  }else{
    this.buyerService.resend_alert(this.popid,data).subscribe((res:any)=>{
      console.log(res)
    
      this.getAlert();
      this.empty();
      this.letType='Buy'
      this.CommSalepop=false;
    })
  }
}}

areaSend:any=[];
showinput2=true;
popValue:any=[];
latitude:any;
longtitude:any;
Address:any;

alertaddress(address: Address, input: any) {
  //console.log(input.value);

  this.areaPArr.push(input.value);
  if (this.areaPArr.length >= 3) {
    this.showinput2 = false;
    console.log(this.showinput2, 'showinput2 show');
  }
  this.latitude = address.geometry.location.lat();
  this.longtitude = address.geometry.location.lng();
  this.service.getAddress(this.latitude,this.longtitude).subscribe((res: any) => {
    this.Address = res[0].address_components;
    let area = this.Address.find((component: any) => {
      if (component.types.includes('locality')) {
        return component.types.includes('locality');
      }
      if (component.types.includes('sublocality_level_1')) {
        return component.types.includes('sublocality_level_1');
      }
    }).long_name;
    console.log(area);
    this.areaSend.push(area)
})
}

  removeArea2(i: any) {
    //console.log(i);
    this.areaPArr.splice(i, 1);
    if (!(this.areaPArr.length >= 3)) {
      this.showinput2 = true;
      console.log(this.showinput2, 'showinput2 show');
    }
   }
  getRentRange1(v:any){
    this.maxValue=v.value;
  }
  getRentRange(v:any){
    this.minValue=v.value;
  }
  getBuiltRange(v:any){
    this.BuildminValue=v.value;
  }
  getBuiltRange1(v:any){
    this.BuildmaxValue=v.value;
  }

  firstAlert=true;
  popid:any;
  getAlert(){
    this.buyerService.get_alert().subscribe((res:any)=>{
      console.log(res,'get alert',)
      
      
      this.popValue=res.values
      this.popid=res.data._id;
      this.property=res.data.ResOrCom;
      this.letType=res.data.type;

      if(res.data._id !=null){
        this.firstAlert=false;
        // console.log(this.firstAlert,'first alert','inside if')
      }
      if(res.data == null){
        this.recAlert=false;
        this.sendAlert=true;
      }
      else{
        this.recAlert=true;
        this.sendAlert=false;
      }
      // console.log(this.firstAlert,'first alert','in function')
    })
  }
  changeAlert(){
    this.recAlert=false;
     this.sendAlert=true;
  }
  GetDataBYId(id: any, i: any) {}
  RBtab = true;
  RRtab = false;
  CBtab = false;
  CRtab = false;
  interestTab(tab: any) {
    if (tab == 'RB') {
      this.RBtab = true;
      this.RRtab = false;
      this.CBtab = false;
      this.CRtab = false;
    }
    if (tab == 'RR') {
      this.RBtab = false;
      this.RRtab = true;
      this.CBtab = false;
      this.CRtab = false;
    }
    if (tab == 'CB') {
      this.RBtab = false;
      this.RRtab = false;
      this.CBtab = true;
      this.CRtab = false;
    }
    if (tab == 'CR') {
      this.RBtab = false;
      this.RRtab = false;
      this.CBtab = false;
      this.CRtab = true;
    }
  }
  popOptions: Options = {
    floor: 5000,
    ceil: 100000,
    step:500,
  };
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  BuildupOptions: Options = {
    floor: 500,
    ceil: 10000,
    step:500,
  };
}
