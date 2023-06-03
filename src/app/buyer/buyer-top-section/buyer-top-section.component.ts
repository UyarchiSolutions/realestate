import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'ng-google-places-autocomplete';
import { PostPropertyService } from 'src/app/services/post-property.service';

@Component({
  selector: 'buyer-top-section',
  templateUrl: './buyer-top-section.component.html',
  styleUrls: ['./buyer-top-section.component.css']
})
export class BuyerTopSectionComponent implements OnInit {
  @Input() Data: any=[];
  
  constructor(private router:Router,private arouter:ActivatedRoute,private service:PostPropertyService
    ,private fb:FormBuilder) { }
  ngOnInit() {
    console.log(this.Data,'data child')
    this.areaArr =this.Data.area

  }
  show_top = false;
  type: any;
  areaArr: any = [];
  showInput = true;
  formatAdd: any = '';
  latitude: any;
  Address: any = [];
  longtitude: any;
  area: any;
  city: any;
  form:any=this.fb.group({
    address:new FormControl('')
    }
  )
  viewtop() {
    this.show_top = !this.show_top;
  }
  onChange(e: any) {
    this.type = e.target.value;
  }
  removeArea(i: any) {
    //console.log(i);
    this.areaArr.splice(i, 1);
    if (!(this.areaArr.length >= 3)) {
      this.showInput = true;
      console.log(this.showInput, 'inpout show');
    }
  }
  submitAddress() {
    if(this.Data.baseRType=='Commercial' && this.Data.type=='Buy') {
      let data={
        formatAdd:this.formatAdd
      }
      let query = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/buyer-commercial-buy-view?' + query);
    }
    // this.sendRecentSearch();
    // this.assignToSaveData();
    // let query = new URLSearchParams(this.sendData).toString();
    // this.router.navigateByUrl('/buyer-commercial-buy-view?' + query);
  }
  
  handleAddressChange(address: Address, input: any) {
    //console.log(input.value);
    this.formatAdd = input.value;
    
    let Showvalue = input.value;
    let  Sendvalue = Showvalue.split(',').join('-');
   
    this.areaArr.push(Sendvalue);
 
    if (this.areaArr.length == 3) {
      this.showInput = false;
      console.log(this.showInput, 'inpout hidde');
    }
    
    this.latitude = address.geometry.location.lat();
    this.longtitude = address.geometry.location.lng();
   
  }
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  toResBuy() {
    this.router.navigateByUrl('/buyer-residential-buy-view')
   }
   toComRent(){
     this.router.navigateByUrl('/buyer-commercial-rent-view')
   }
   toComBuy(){
     this.router.navigateByUrl('/buyer-commercial-buy-view')
   }
   toResRent(){
     this.router.navigateByUrl('/buyer-residential-rent-view')
   }

}
