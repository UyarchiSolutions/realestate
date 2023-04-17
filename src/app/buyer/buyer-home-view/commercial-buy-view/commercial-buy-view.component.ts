import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from 'src/app/services/post-property.service';
import { BuyerService } from '../../buyer.service';
import { Address } from 'ng-google-places-autocomplete';
import { Options } from '@angular-slider/ngx-slider';
import { Cookie } from 'ng2-cookies';


@Component({
  selector: 'app-commercial-buy-view',
  templateUrl: './commercial-buy-view.component.html',
  styleUrls: ['./commercial-buy-view.component.css']
})
export class CommercialBuyViewComponent implements OnInit {
  buyer: any = [];
  constructor(
    private arouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: PostPropertyService,
    private buyerService: BuyerService
  ) {}
  range = 10;
  page = 0;
  displaycount = 0;

  pagetotal = 0;
  totalcount = 0;
  areaArr: any = [];
  formatAdd: any = '';
  data: any;
  type: any;
  propertType: any = [];
  BHKType: any = [];
  showOnlyType: any = [];
  furType: any = [];
  tentType: any = [];
  propageType: any = [];
  bathType: any = [];
  parkType: any = [];

  SelectedFilters: any = [];
  FbhkArr: any = [];
  proptArr: any = [];
  bhkArr: any = ['1 Rk', '1 BHK', '2 BHK', '3 BHK', '4+ BHK'];
  bathArr: any = ['1 Bathroom', '2 Bathroom', '3 Bathroom', '4+ Bathroom'];
  FbathArr: any = [];
  bathtypeShow: any = [];
  bathCountArr: any = [];
  ShowOnlyArr: any = [];
  FurArr: any = [];
  ParkArr: any = [];
  TentArr: any = [];
  PropAgeArr: any = [];
  RecentSearchArr: any = [];
  dommy: any = [];
  LoopItArr: any = [];
  BhkCountArr: any = [];
  BhkTypeShow: any = [];


  options1: Options = {
    floor: 5000,
    ceil: 100000,
    step:500,
  };

  filter: any = this.fb.group({
    propertType: new FormControl(''),
    buildupFrom: new FormControl(0),
    buildupTo: new FormControl(10000),
    priceFrom: new FormControl(5000),
    priceTo: new FormControl(100000),
    search: new FormControl(),
    price: new FormControl([5000, 100000])
  });
  ngOnInit(): void {
    this.Getbuyer();
    this.Get_all_interest();
    this.Get_all_saved();
    this.FetchRecentSearch();

    this.arouter.queryParamMap.subscribe((params: any) => {
      //console.log(params.params.formatAdd)
      if (params.params.formatAdd != null) {
        console.log(params);
        this.formatAdd = params.params.formatAdd;
        this.type = params.params['type'];
        this.propertType =
          params.params['propertType'] != null &&
          params.params['propertType'] != ''
            ? params.params['propertType'].split(',')
            : [];
        this.BHKType =
          params.params['BHKType'] != null && params.params['BHKType'] != ''
            ? params.params['BHKType'].split(',')
            : [];
        this.areaArr =
          params.params['area'] != null && params.params['area'] != ''
            ? params.params['area'].replace(/-/g, ' ').split(',')
            : [];
        //console.log(this.areaArr,this.areaArr.length);
        // for(let i=0;)

        this.showOnlyType =
          params.params['rentDetails'] != null &&
          params.params['rentDetails'] != ''
            ? params.params['rentDetails'].split(',')
            : [];
        this.furType =
          params.params['furnishing'] != null &&
          params.params['furnishing'] != ''
            ? params.params['furnishing'].split(',')
            : [];
        this.tentType =
          params.params['rentprefer'] != null &&
          params.params['rentprefer'] != ''
            ? params.params['rentprefer'].split(',')
            : [];
        this.propageType =
          params.params['propAge'] != null && params.params['propAge'] != ''
            ? params.params['propAge'].split(',')
            : [];
        this.bathType =
          params.params['bathroom'] != null && params.params['bathroom'] != ''
            ? params.params['bathroom'].split(',')
            : [];
        this.parkType =
          params.params['parking'] != null && params.params['parking'] != ''
            ? params.params['parking'].split(',')
            : [];

        // this.areaArr =this.areaArr.split(',');
        //console.log(this.propertType,this.BHKType,'gfgbgfh');
        if (!(this.BHKType == '' && this.BHKType == null)) {
          this.BHKType.forEach((a: any) => {
            this.BhkTypeShow.push(this.bhkArr[a]);
            // console.log(this.BhkTypeShow,'final bhk',this.bhkArr[a])
          });
        }
        if (!(this.bathType == '' && this.bathType == null)) {
          this.bathType.forEach((a: any) => {
            this.bathtypeShow.push(this.bathArr[a]);
            // console.log(this.bathType,'final bath',this.bathArr[a])
          });
        }
        this.SelectedFilters = [
          ...this.propertType,
          ...this.BhkTypeShow,
          ...this.showOnlyType,
          ...this.furType,
          ...this.tentType,
          ...this.propageType,
          ...this.bathtypeShow,
          ...this.parkType,
        ];

        this.proptArr = this.propertType;
        this.BhkCountArr = this.BHKType;
        this.bathCountArr = this.bathType;
        this.ShowOnlyArr = this.showOnlyType;
        this.FurArr = this.furType;
        this.ParkArr = this.parkType;
        this.PropAgeArr = this.propageType;
        this.TentArr = this.tentType;
        this.FbhkArr = this.BhkTypeShow;
        this.FbathArr = this.bathtypeShow;

        // console.log(this.proptArr,'proppt arry',this.propertType)

        this.SelectedFilters = this.SelectedFilters.filter((e: any) => e != '');
        // console.log(this.SelectedFilters, 234234);
        console.log(this.areaArr, this.areaArr.length);
        if (this.areaArr.length >= 3) {
          this.showInput = false;
          // console.log(this.showInput, 'inpout show');
        }
        this.GetDataForFilter();
      }
    });
    this.getAlert();
  }
  
  showInput = true;
  sendData: any;
  totalval: any;
  sendDataBOOL = true;
  GetDataForFilter() {
  let  Data = {
      formatAdd: this.formatAdd,
      HouseOrCommercialType:'Commercial',
      type: 'Sale',
      propertType: this.propertType,
      BHKType: this.BHKType,
      rentDetails: this.showOnlyType,
      furnishing: this.furType,
      parking: this.parkType,
      rentprefer: this.tentType,
      propAge: this.propageType,
      bathroom: this.bathType,
      // buildupfrom: this.filter.get('buildupFrom')?.value,
      // buildupto: this.filter.get('buildupTo')?.value,
      // priceFrom: this.filter.get('priceFrom')?.value,
      // priceTo: this.filter.get('priceTo')?.value,
    };
    console.log(Data);
    this.service
      .getSellerDetails(this.page, this.range, Data,this.floordata)
      .subscribe((res: any) => {
        console.log(res, 'data from backend');
        this.data = res.values;
        this.totalval = res.total;
        if (this.totalval > 10) {
          this.showPag_rag = true;
        }
        //console.log(this.data, 'data');

        if (this.page == 0) {
          let page = res.total / (this.page + 1);

          //console.log(res.total, 'range', this.range);

          this.displaycount = Math.ceil(page / this.range);

          //console.log(page, 'dc', this.page + 1);
        }
        this.sendDataBOOL = false;
      });
    // console.log(this.sendData, 'updated');
    this.bathtypeShow = [];
    this.BhkTypeShow = [];
  }
  showPag_rag = false;

  onChange(e: any) {
    this.type = e.target.value;
  }
  floordata:any={arr:[]};
  FloorArr:any=[];

  updateFloor(v:any,count:any){
    console.log(count);
    if (v.target.checked) {
      var val = v.target.value;
      this.SelectedFilters.push(val);
      this.FloorArr.push(val);
      console.log(this.floordata,'check1')
      if(Array.isArray(count)){
        this.floordata.arr.push(
        {
           from:count[0],
           to:count[1]}
         );
      }
        if(count== 0 || count==13){
          this.floordata.arr.push({
          from:count
          })
        }
        console.log(this.floordata,'check3')
     console.log(this.SelectedFilters,'psuh',this.FloorArr,'floor array',this.floordata,'floordata')
    } else  {
      let index = this.SelectedFilters.findIndex(
        (res: any) => res == v.target.value
      );
      console.log('1','selected fiter',this.SelectedFilters[index],this.SelectedFilters,)
      if (index != -1) {
        console.log(this.floordata,'check2')
        this.SelectedFilters.splice(index, 1);
     
      
      let i = this.FloorArr.findIndex((res:any)=>res==v.target.value)

        console.log('2',this.FloorArr,v.target.value,this.FloorArr.includes(v.target.value),'floor array')
        console.log('3',this.floordata,this.floordata.arr[i],'floor data')
        console.log('4','value romove in data',this.floordata.arr[i],this.FloorArr[i],i,)
        console.log('5',this.floordata.arr.splice(i,1),'else',this.floordata) 

      this.FloorArr.splice(i,1);
      this.floordata.arr.splice(i,1);

   }
      console.log('6',this.SelectedFilters,'splice',this.FloorArr,'floor array',this.floordata,'floordata',)
    }
   
   
    console.log(this.floordata,'before api')
 this.service.getSellerDetails(this.page, this.range, this.sendData,this.floordata).subscribe((res: any) => {
    console.log(res, 'data from backend');
    this.data = res.values;
    this.totalval = res.total;
    if (this.totalval > 10) {
      this.showPag_rag = true;
    } if (this.page == 0) {
      let page = res.total / (this.page + 1);
      this.displaycount = Math.ceil(page / this.range);
      }})
    
  }
  // isfloorcheck(val:any,find:any){
  //   if(find !=''){
  //   let index = find.findIndex(
  //     (res: any) => res == val
  //   );
  //   if(index == -1){
  //     return false;
  //   }
  //   else{
  //     return true;
  //   }
  // }
  // return false;
  // }

  updateFilter(v: any, position: any) {
    position=position.toString();
    console.log(v.target.value)
    if (v.target.checked) {
      var val = v.target.value;
      this.SelectedFilters.push(val);
     
    } else {
      let index = this.SelectedFilters.findIndex(
        (res: any) => res == v.target.value
      );
      if (index != -1) {
        this.SelectedFilters.splice(index, 1);
      }
    }

    //console.log('updted', this.SelectedFilters);
    //prop arr

    if (
      v.target.value == 'Gated Community' ||
      v.target.value == 'Individual House/Villa' ||
      v.target.value == 'Apartment'
    ) {
      if (this.proptArr.findIndex((res: any) => res == v.target.value) == -1) {
        this.proptArr.push(v.target.value);
        //console.log(this.proptArr, 'proparr, update filter');
      } else {
        let index = this.proptArr.findIndex(
          (res: any) => res == v.target.value
        );

        this.proptArr.splice(index, 1);
        //console.log('prop removed', this.proptArr);
      }
    }

    //bhk arr
    if (
      this.bhkArr.findIndex((res: any) => {
        return res == v.target.value;
      }) != -1
    ) {
      let index = this.bhkArr.indexOf(v.target.value);

      if (
        this.FbhkArr.findIndex((res: any) => {
          return res == v.target.value;
        }) == -1
      ) {
        this.FbhkArr.push(v.target.value);
        this.BhkCountArr.push(index);
        //console.log(this.BhkCountArr,'bhk count')
        //console.log(this.FbhkArr, 'final bhk arr');
      } else {
        let index = this.FbhkArr.findIndex((res: any) => res == v.target.value);

        this.FbhkArr.splice(index, 1);
        this.BhkCountArr.splice(index, 1);
        //console.log(this.BhkCountArr,'bhk count')
        //console.log('f bhk removed', this.FbhkArr);
      }
    }
    //bathroom arr

    
    if (this.bathArr.indexOf(v.target.value) != -1) {
      if (this.bathCountArr.indexOf(position) == -1) {
        this.FbathArr.push(v.target.value);
        this.bathCountArr.push(position);
      } else {
        let index = this.bathCountArr.indexOf(position);
        let index2 = this.FbathArr.indexOf(v.target.value);
        this.FbathArr.splice(index2, 1);
        this.bathCountArr.splice(index, 1);
      }

      console.log(this.FbathArr, 345, position,this.bathCountArr);
      console.log(this.SelectedFilters);
    }
    //show only
    if (v.target.value == 'rent' || v.target.value == 'lease') {
      //console.log('inside rebt r lease', this.SelectedFilters.findIndex((res: any) => res == v.target.value) );
      let i = this.ShowOnlyArr.findIndex(
        (res: any) => res == v.target.value
      );
      if (i == -1) {
        this.ShowOnlyArr.push(v.target.value);
        //console.log(this.ShowOnlyArr, 'if');
      } else {
        this.ShowOnlyArr.splice(i, 1);
        //console.log(this.ShowOnlyArr, 'else');
      }
    }
    //furnished
    if (
      v.target.value == 'Fully Furnished' ||
      v.target.value == 'Semi Furnished' ||
      v.target.value == 'UnFurnished'
    ) {
      let i = this.FurArr.findIndex(
        (res: any) => res == v.target.value
      );
      console.log(i,this.FurArr.findIndex((res: any) => res == v.target.value),v.target.value,this.FurArr)
      if (i == -1) {
        this.FurArr.push(v.target.value);
        console.log(this.FurArr, 'if');
        console.log(this.SelectedFilters,'selected filter')
      } else {
        this.FurArr.splice(i, 1);
        console.log(this.FurArr, 'else');
        console.log(this.SelectedFilters,'selected filter',i)
      }
    }
    //park arr
    if (
      v.target.value == 'Bike' ||
      v.target.value == 'Car' ||
      v.target.value == 'Both'
    ) {
      let i = this.ParkArr.findIndex(
        (res: any) => res == v.target.value
      );
      if (i == -1) {
        this.ParkArr.push(v.target.value);
        //console.log(this.ParkArr, 'if');
      } else {
        this.ParkArr.splice(i, 1);
        //console.log(this.ParkArr, 'else');
      }
    }
    //tent arr
    if (
      v.target.value == 'Family' ||
      v.target.value == 'Bachelor' ||
      v.target.value == 'Company' ||
      v.target.value == 'Any'
    ) {
      let i = this.SelectedFilters.findIndex(
        (res: any) => res == v.target.value
      );
      if (i != -1) {
        this.TentArr.push(v.target.value);
        //console.log(this.TentArr);
      } else {
        this.TentArr.splice(i, 1);
        //console.log(this.TentArr);
      }
    }
    //prop age arr
    if (
      v.target.value == 'Less than Year' ||
      v.target.value == '1 to 3 Years' ||
      v.target.value == '3 to 5 Years' ||
      v.target.value == '5 to 10 Years' ||
      v.target.value == '10+ Years'
    ) {
      let i = this.SelectedFilters.findIndex(
        (res: any) => res == v.target.value
      );
      if (i != -1) {
        this.PropAgeArr.push(v.target.value);
        //console.log(this.PropAgeArr);
      } else {
        this.PropAgeArr.splice(i, 1);
        //console.log(this.PropAgeArr);
      }
    }
    //data to api
    this.sendData = {
      formatAdd: this.formatAdd,
      area: this.areaArr,
      type: this.type,
      propertType: this.proptArr,
      BHKType: this.BhkCountArr,
      rentDetails: this.ShowOnlyArr,
      furnishing: this.FurArr,
      parking: this.ParkArr,
      rentprefer: this.TentArr,
      propAge: this.PropAgeArr,
      bathroom: this.bathCountArr,
      // buildupfrom: this.filter.get('buildupFrom')?.value,
      // buildupto: this.filter.get('buildupTo')?.value,
      // priceFrom: this.filter.get('priceFrom')?.value,
      // priceTo: this.filter.get('priceTo')?.value,
    };
    //console.log(this.ShowOnlyArr);
    let query = new URLSearchParams(this.sendData).toString();
    this.router.navigateByUrl('/buyer-commercial-buy-view?' + query);
  }

  deleteFilter(v: any) {
    let index = this.SelectedFilters.findIndex((res:any)=>res==v);

    if (index > -1) {
      this.SelectedFilters.splice(index, 1);
    }
    console.log(v)
    console.log('deleted', this.SelectedFilters);

    //bhk arr
    if (
      this.FbhkArr.findIndex((res: any) => {
        return res == v;
      }) > -1
    ) {
      //console.log(this.FbhkArr, 'sfsdf');
      let index = this.FbhkArr.findIndex((res: any) => {
        res == v;
      });
      this.FbhkArr.splice(index, 1);
      this.BhkCountArr.splice(index, 1);
    }
    //bath arr
    if (
      this.FbathArr.findIndex((res: any) => {
        return res == v;
      }) > -1
    ) {
      //console.log(this.FbathArr, 'sfsdf');
      let index = this.FbathArr.findIndex((res: any) => {
        res == v;
      });
      this.FbathArr.splice(index, 1);
      this.bathCountArr.splice(index, 1);
    }

    //prop arr
    if (v == 'Gated Community' || 'Individual House/Villa' || 'Apartment') {
      let index = this.proptArr.findIndex((res: any) => {
        res == v;
      });
      let i = this.proptArr.indexOf(v)
      console.log(this.proptArr,v,index,i)
      if (i > -1) {
        this.proptArr.splice(i, 1);
      }
    }
    //show only arr
    if (v == 'rent' || 'lease') {
      let index = this.ShowOnlyArr.findIndex((res:any)=>res == v);
      //console.log(index, 234234);
      if (index > -1) {
        this.ShowOnlyArr.splice(index, 1);
      }
    }
    //fur arr
    if (v == 'Fully Furnished' || 'Semi Furnished' || 'UnFurnished') {
      let index = this.FurArr.findIndex((res:any)=>res==v);
      if (index > -1) {
        this.FurArr.splice(index, 1);
      }
      // console.log(this.FurArr)
    }
    // park arr
    if (v == 'Bike' || v == 'Car' || v == 'Both') {
      let index = this.ParkArr.findIndex((res: any) => {
        res == v;
      });
      let i = this.ParkArr.indexOf(v)
    
      if (i > -1) {
        this.ParkArr.splice(i, 1);
      }
     
    }
    //tent arr
    if (v == 'Family' || v == 'Bachelor' || v == 'Company' || v == 'Any') {
      let index = this.TentArr.indexOf(v)
    
      if (index > -1) {
        this.TentArr.splice(index, 1);
      }
    }
    //prop age arr
    if (
      v == 'Less than Year' ||
      v == '1 to 3 Years' ||
      v == '3 to 5 Years' ||
      v == '5 to 10 Years' ||
      v == '10+ Years'
    ) {
      let index = this.PropAgeArr.findIndex((res: any) => {
        res == v;
      });
      if (index > -1) {
        this.PropAgeArr.splice(index, 1);
      }
    }
    //floor
    if( this.FloorArr.findIndex((res:any)=>{res==v}) != -1 ){
    let i = this.FloorArr.findIndex((res:any)=>{res==v })
    console.log(i,'floor is checked')
   
    this.FloorArr.splice(i,1);
    this.floordata.arr.splice(i,1);
    console.log(this.FloorArr,this.floordata);
  }
    this.sendData = {
      formatAdd: this.formatAdd,
      type: this.type,
      area: this.areaArr,
      propertType: this.proptArr,
      BHKType: this.BhkCountArr,
      rentDetails: this.ShowOnlyArr,
      furnishing: this.FurArr,
      parking: this.ParkArr,
      rentprefer: this.TentArr,
      propAge: this.PropAgeArr,
      bathroom: this.bathCountArr,
      buildupfrom: this.filter.get('buildupFrom')?.value,
      buildupto: this.filter.get('buildupTo')?.value,
      priceFrom: this.filter.get('priceFrom')?.value,
      priceTo: this.filter.get('priceTo')?.value,
    };
    let query = new URLSearchParams(this.sendData).toString();
    this.router.navigateByUrl('/buyer-commercial-buy-view?' + query);
  }

  is_chckked(val: any, filter: any) {
    // console.log(val,filter)
    if (filter != '') {
      let index = filter.findIndex((res:any)=>{ res==val});
      let i = filter.indexOf(val)
      // console.log(index,'find index','is cheked',i,'indexof')
      if (i == -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  latitude: any;
  Address: any = [];
  longtitude: any;
  area: any;
  city: any;
  handleAddressChange(address: Address, input: any) {
    //console.log(input.value);
    this.formatAdd = input.value;
    
    let Showvalue = input.value;
   let  Sendvalue = Showvalue.split(',').join('-');
   
    this.areaArr.push(Sendvalue);
    if (this.areaArr.length >= 3) {
      this.showInput = false;
      console.log(this.showInput, 'inpout show');
    }
    input.value = ''; 
    this.latitude = address.geometry.location.lat();
    this.longtitude = address.geometry.location.lng();

    this.service.getAddress(this.latitude, this.longtitude).subscribe((res: any) => {
        //console.log(res)
          this.Address = res[0].address_components;
        //console.log(this.Address)

        //console.log( res,'zxczc',input.value)

        let area = this.Address.find((component: any) => {
          if (component.types.includes('locality')) {
            //console.log(component.types.includes('locality'),'locality');

            return component.types.includes('locality');
          }

          if (component.types.includes('sublocality_level_1')) {
            //console.log(component.types.includes('sublocality_level_1'),'sublocality_level_1');

            return component.types.includes('sublocality_level_1');
          }
        }).long_name;
        //console.log(area);

        //  let city = this.Address.find((component:any) => component.types.includes('administrative_area_level_3')).long_name;
        //   //console.log(city);
        //   this.city= city;
      });
   
  }
  sendRecentSearch() {
    let data = {
      formatAdd: this.formatAdd,
      type: this.type,
      propertType: this.proptArr,
      BHKType: this.BhkCountArr,
      rentDetails: this.ShowOnlyArr,
      furnishing: this.FurArr,
      parking: this.ParkArr,
      rentprefer: this.TentArr,
      propAge: this.PropAgeArr,
      bathroom: this.bathCountArr,
      buildupfrom: this.filter.get('buildupFrom')?.value,
      buildupto: this.filter.get('buildupTo')?.value,
      priceFrom: this.filter.get('priceFrom')?.value,
      priceTo: this.filter.get('priceTo')?.value,
      selected: this.SelectedFilters,
    };
    this.service.RecentSearch(data).subscribe((res: any) => {
      console.log(res, 'recent search');
    });
  }
  submitAddress() {
    this.sendRecentSearch();
    this.sendData = {
      formatAdd: this.formatAdd,
      type: this.type,
      area: this.areaArr,
      propertType: this.proptArr,
      BHKType: this.BhkCountArr,
      rentDetails: this.ShowOnlyArr,
      furnishing: this.FurArr,
      parking: this.ParkArr,
      rentprefer: this.TentArr,
      propAge: this.PropAgeArr,
      bathroom: this.bathCountArr,
      buildupfrom: this.filter.get('buildupFrom')?.value,
      buildupto: this.filter.get('buildupTo')?.value,
      priceFrom: this.filter.get('priceFrom')?.value,
      priceTo: this.filter.get('priceTo')?.value,
    };
    let query = new URLSearchParams(this.sendData).toString();
    this.router.navigateByUrl('/buyer-commercial-buy-view?' + query);
  }
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  checkCookie: any;

  GetDataBYId(id: any, i: any) {
    console.log(i)
    this.checkCookie = this.service.findCookie();
    if (this.checkCookie) {
      this.service.userStatusCheck(id).subscribe((res: any) => {
        console.log(res, 'view res');

        let oneid = {
          id: id,
          index: i,
          formatAdd: this.formatAdd,
          type: this.type,
          propertType: this.proptArr,
          BHKType: this.BhkCountArr,
          rentDetails: this.ShowOnlyArr,
          furnishing: this.FurArr,
          parking: this.ParkArr,
          rentprefer: this.TentArr,
          propAge: this.PropAgeArr,
          area: this.areaArr,
        };

        this.service.Alldata = this.sendData;
        this.service.send_ALLres(this.data);
        console.log(oneid)
        const query = new URLSearchParams(oneid).toString();
        this.router.navigateByUrl(
          '/buyer-residential-rent-search-view?' + query
        );
      });
    } else {
      //console.log('route to login')
      this.router.navigateByUrl('buyerLogin');
    }
  }
  GetRecentSearch(index: any) {
    let v = this.RecentSearchArr[index];
    console.log(v, 'get recent search', this.RecentSearchArr[index].buildupto);

    this.SelectedFilters = this.RecentSearchArr[index].selected;
    this.proptArr = this.RecentSearchArr[index].propertType;
    this.BhkCountArr = this.RecentSearchArr[index].BHKType;
    this.ShowOnlyArr = this.RecentSearchArr[index].rentDetails;
    this.FurArr = this.RecentSearchArr[index].furnishing;
    this.ParkArr = this.RecentSearchArr[index].parking;
    this.TentArr = this.RecentSearchArr[index].rentprefer;
    this.PropAgeArr = this.RecentSearchArr[index].propAge;
    this.formatAdd = this.RecentSearchArr[index].formatAdd;
    this.bathCountArr = this.RecentSearchArr[index].bathroom;
    this.filter
      .get('buildupFrom')
      .patchValue(this.RecentSearchArr[index].buildupfrom);
    this.filter
      .get('buildupTo')
      .patchValue(this.RecentSearchArr[index].buildupto);
    this.filter
      .get('priceFrom')
      .patchValue(this.RecentSearchArr[index].priceFrom);
    this.filter.get('priceTo').patchValue(this.RecentSearchArr[index].priceTo);

    this.service
      .getSellerDetails(this.page, this.range, v,this.floordata)
      .subscribe((res: any) => {
        this.data = res.values;
      });
  }

  pagination(val: any) {
    this.sendDataBOOL = false;

    if (val == 1) {
      this.page = this.page + 1;
    }
    if (val == 0) {
      if (this.page != 0) {
        this.page = this.page - 1;
      }
    }
    this.GetDataForFilter();
  }
  displaySelect: boolean = false;

  Setrange(val: any) {
    this.sendDataBOOL = false;
    this.displaySelect = true;
    this.range = val.target.value;

    //console.log(this.range, 'inside set range');

    this.GetDataForFilter();
  }
  emptyArr: any[] = [];

  refineFilters() {
    this.SelectedFilters = [];
    this.FbhkArr = [];
    this.proptArr = [];
    this.ShowOnlyArr = [];
    this.FurArr = [];
    this.ParkArr = [];
    this.TentArr = [];
    this.PropAgeArr = [];
    this.bathCountArr = [];
    this.FbathArr = [];
    this.BhkCountArr = [];
    this.areaArr = [];
    this.floordata=[];

    this.sendData = {
      formatAdd: this.formatAdd,
      // area: this.areaArr,
      type: this.type,
      propertType: this.proptArr,
      BHKType: this.BhkCountArr,
      rentDetails: this.ShowOnlyArr,
      furnishing: this.FurArr,
      parking: this.ParkArr,
      rentprefer: this.TentArr,
      propAge: this.PropAgeArr,
      bathroom: this.bathCountArr,
      buildupfrom: this.filter.get('buildupFrom')?.value,
      buildupto: this.filter.get('buildupTo')?.value,
      priceFrom: this.filter.get('priceFrom')?.value,
      priceTo: this.filter.get('priceTo')?.value,
    };

    this.service
      .getSellerDetails(this.page, this.range, this.sendData,this.floordata)
      .subscribe((res: any) => {
        this.data = res.values;
        //console.log(this.data, 'data');
      });
  }
  removeArea(i: any) {
    //console.log(i);
    this.areaArr.splice(i, 1);
    if (!(this.areaArr.length >= 3)) {
      this.showInput = true;
      console.log(this.showInput, 'inpout show');
    }

    //console.log(this.areaArr,'area arry');
  }

  logOut() {
    sessionStorage.clear();
    localStorage.clear();
    Cookie.delete('buyer');

    this.router.navigateByUrl('/');
  }
  changepassword() {
    this.router.navigateByUrl('/changepassword-buyer');
  }
  postshow = true;
  interestShow = false;
  saveShow = false;
  alertShow = false;
  showTab(tab: any) {
    if (tab == 'post') {
      this.postshow = true;
      this.interestShow = false;
      this.saveShow = false;
      this.alertShow = false;
    }
    if (tab == 'interest') {
      this.postshow = false;
      this.interestShow = true;
      this.saveShow = false;
      this.alertShow = false;
    }
    if (tab == 'save') {
      this.postshow = false;
      this.interestShow = false;
      this.saveShow = true;
      this.alertShow = false;
    }
    if (tab == 'alert') {
      this.postshow = false;
      this.interestShow = false;
      this.saveShow = false;
      this.alertShow = true;
    }
  }
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
  save(tab: any) {
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
  
  AllInterested: any;
  ResiRent:any=[];
  ResiBuy:any=[];
  CommRent:any=[];
  CommBuy:any=[];


  Get_all_interest() {
    this.buyerService.getAll_Interested().subscribe((res: any) => {
      console.log(res,'all interest')
      this.AllInterested = res;
      this.ResiRent= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Rent' && v.HouseOrCommercialType =='Residential';
      })
      this.ResiBuy= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Sale' && v.HouseOrCommercialType =='Residential';
      })
      this.CommRent= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Rent' && v.HouseOrCommercialType =='Commercial';
      })
      this.CommBuy= this.AllInterested.filter((v:any)=>{
       return v.Type == 'Sale' && v.HouseOrCommercialType =='Commercial';
      })


    
    });
  
  }
  AllSaved: any;
  ResiRentS:any=[];
  ResiBuyS:any=[];
  CommRentS:any=[];
  CommBuyS:any=[];

  Get_all_saved() {
    
    this.buyerService.getAll_saved().subscribe((res: any) => {
      console.log(res,'all saved')
      this.AllSaved = res;
      this.ResiRentS= this.AllSaved.filter((v:any)=>{
        return v.Type == 'Rent' && v.HouseOrCommercialType =='Residential';
       })
       this.ResiBuyS= this.AllSaved.filter((v:any)=>{
        return v.Type == 'Sale' && v.HouseOrCommercialType =='Residential';
       })
       this.CommRentS= this.AllSaved.filter((v:any)=>{
        return v.Type == 'Rent' && v.HouseOrCommercialType =='Commercial';
       })
       this.CommBuyS= this.AllSaved.filter((v:any)=>{
        return v.Type == 'Sale' && v.HouseOrCommercialType =='Commercial';
       })

    });
  }
  show_top = false;
  viewtop() {
    this.show_top = !this.show_top;
  }
  FetchRecentSearch() {
    this.service.RecentSearchGet().subscribe((res: any) => {
      this.RecentSearchArr = res;
    });
  }
  Getbuyer() {
    this.service.Get_buyer_account().subscribe((res: any) => {
      // console.log(res);
      this.buyer = res;
      this.showProfileHeader=true

    });
  }
  //alert pop
  minValue:any=5000;
  maxValue:any=100000;
  sendAlert=true;
  recAlert=false;
  showProfileHeader=false;
  check:boolean=true;
  check1:boolean=false;
  popform:any=this.fb.group({
  foodType:new FormControl(''),
  PropertyStatus: new FormControl('')
})

popOptions: Options = {
  floor: 50000,
  ceil: 100000,
  step:500,
};
property="Residential";
 Residential(){
  
  this.check=true;
  this.check1=false;
  this.property="Residential";

 }

 Commercial(){

  this.check1=true;
  this.check=false;
  this.property="Commercial";
 }
 showAlertpop=false;
 popup(){
  this.showAlertpop=!this.showAlertpop;
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

popcheck(){
  let data= {
    area:this.areaSend,
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
      this.showAlertpop=!this.showAlertpop;
      this.getAlert();
  
    })
  }else{
    this.buyerService.resend_alert(this.popid,data).subscribe((res:any)=>{
      console.log(res)
      this.showAlertpop=!this.showAlertpop;
      this.getAlert();
  
    })
  }
 
}
areaSend:any=[];
showinput2=true;
popValue:any=[];
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
  firstAlert=true;
  popid:any;
  getAlert(){
    this.buyerService.get_alert().subscribe((res:any)=>{
      console.log(res,'get alert',)
      
      
      this.popValue=res.values
      this.popid=res.data._id;

      if(res.data._id !=null){
        this.firstAlert=false;
        console.log(this.firstAlert,'first alert','inside if')
      }
      if(res.data == null){
        this.recAlert=false;
        this.sendAlert=true;
      }
      else{
        this.recAlert=true;
        this.sendAlert=false;
      }
      console.log(this.firstAlert,'first alert','in function')
    })
  }
  changeAlert(){
    this.recAlert=false;
     this.sendAlert=true;
  }
 
}

 


