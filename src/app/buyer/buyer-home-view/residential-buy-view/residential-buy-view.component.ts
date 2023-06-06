import { Options } from '@angular-slider/ngx-slider/options';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from 'src/app/services/post-property.service';
import { BuyerService } from '../../buyer.service';
import { Address } from 'ng-google-places-autocomplete';
import { Cookie } from 'ng2-cookies';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-residential-buy-view',
  templateUrl: './residential-buy-view.component.html',
  styleUrls: ['./residential-buy-view.component.css'],
})
export class ResidentialBuyViewComponent implements OnInit {
  buyer: any;
  showRecentSer: any;
  constructor(
    private arouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: PostPropertyService,
    private buyerService: BuyerService,
    private toastr: ToastrService
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
  ageType: any = [];

  ageArr: any = [];
  SelectedFilters: any = [];
  FbhkArr: any = [];
  proptArr: any = [];
  bhkArr: any = ['1 Rk', '1 BHK', '2 BHK', '3 BHK', '4+ BHK'];
  bathArr: any = ['1 Bathroom', '2 Bathroom', '3 Bathroom', '4+ Bathroom'];
  FbathArr: any = [];
  newBath: any = [];
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

  floorType: any = [];
  floorShow: any = [];
  ffloor: any = [];
  floorArr: any = [
    'Ground Floor',
    '1 to 3 Floor',
    '4 to 7 Floor',
    '8 to 12 Floor',
    '13+ Floor',
  ];
  floorDataArr: any = ['0', '1-3', '4-7', '8-12', '13'];
  notLogin: any;

  areaArrF: any = [];

  options1: Options = {
    floor: 5000,
    ceil: 1000000,
    step: 500,
  };
  options2: Options = {
    floor: 0,
    ceil: 50000,
    step: 500,
  };

  filter: any = this.fb.group({
    propertType: new FormControl(''),
    buildupFrom: new FormControl(0),
    buildupTo: new FormControl(10000),
    priceFrom: new FormControl(0),
    priceTo: new FormControl(10000000),
    search: new FormControl(),
    price: new FormControl([0, 10000000]),
  });
  rentMin: any = 5000;
  rentMax: any = 1000000;
  builtMin: any = 0;
  builtMax: any = 50000;

  ngOnInit(): void {
    this.Getbuyer();

    this.FetchRecentSearch();
    this.showRecentSer = this.service.findCookie();
    this.notLogin = this.service.findCookie();
    this.arouter.queryParamMap.subscribe((params: any) => {
      ////consolele.log(params.params.formatAdd)
      console.log(params,params.params);
      this.showTab(params['show']);
     
        //consolele.log(params);
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
            ? params.params['area'].split('+')
            : [];
        this.areaArrF =
          params.params['area'] != null && params.params['area'] != ''
            ? params.params['area']
            : [];
          
        ////consolele.log(this.areaArr,this.areaArr.length);
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
        this.ageType =
          params.params['ageOfBuilding'] != null &&
          params.params['ageOfBuilding'] != ''
            ? params.params['ageOfBuilding'].split(',')
            : [];
        this.floorType =
          params.params['floor'] != null && params.params['floor'] != ''
            ? params.params['floor'].split(',')
            : [];

        if (!(this.BHKType == '' && this.BHKType == null)) {
          this.BHKType.forEach((a: any) => {
            this.BhkTypeShow.push(this.bhkArr[a]);
            // //consolele.log(this.BhkTypeShow,'final bhk',this.bhkArr[a])
          });
        }
        if (!(this.bathType == '' && this.bathType == null)) {
          this.bathType.forEach((a: any) => {
            this.bathtypeShow.push(this.bathArr[a - 1]);
            // //consolele.log(this.bathType,'final bath',this.bathArr[a])
          });
        }
        if (!(this.floorType == '' && this.floorType == null)) {
          this.floorShow = [];
          this.floorType.forEach((a: any) => {
            let index = this.floorDataArr.indexOf(a);
            this.floorShow.push(this.floorArr[index]);
          });
          console.log(this.floorShow, 'floorshow');
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
          ...this.ageType,
          ...this.floorShow,
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
        this.newBath = this.bathtypeShow;
        this.ageArr = this.ageType;
        this.floordata = this.floorType;
     
        // //consolele.log(this.proptArr,'proppt arry',this.propertType)

        this.SelectedFilters = this.SelectedFilters.filter((e: any) => e != '');
     
        if (this.areaArr.length >= 3) {
          this.showInput = false;
          // //consolele.log(this.showInput, 'inpout show');
      
        console.log('checjing route');
       
      }
    });
    this.GetDataForFilter();
    console.log(this.areaArrF,'area')
    this.getAlert();
  } sendArea(){
    switch(this.areaArr.length){
      case 1:
      this.areaF = this.areaArr[0]
      break;
      case 2:
        this.areaF = this.areaArr[0]+'+'+this.areaArr[1]
        break;
      case 3:
      this.areaF = this.areaArr[0]+'+'+this.areaArr[1]+'+'+this.areaArr[2];
      break;
    }

  }
  toResBuy() {
    this.sendArea();
    let data={
      area:this.areaF
    }
    console.log(data);
    const query = new URLSearchParams(data).toString();
    this.router.navigateByUrl('/buyer-residential-buy-view?'+ query);
  }
  toComRent() {
    this.sendArea();
    let data={
      area:this.areaF
    }
    console.log(data);
    const query = new URLSearchParams(data).toString();
    this.router.navigateByUrl('/buyer-commercial-rent-view?'+ query);
  }
  toComBuy() {
    this.sendArea();
    let data={
      area:this.areaF
    }
    console.log(data);
    const query = new URLSearchParams(data).toString();
    this.router.navigateByUrl('/buyer-commercial-buy-view?'+ query);
  }
  toResRent() {
    this.sendArea();
    let data={
      area:this.areaF
    }
    console.log(this.data);
    const query = new URLSearchParams(data).toString();
    this.router.navigateByUrl('/buyer-residential-rent-view?'+ query);
  }
  showInput = true;
  nextPage = false;
  sendData: any;
  totalval: any;
  sendDataBOOL = true;
  GetDataForFilter() {
    let Data = {
      HouseOrCommercialType: 'Residential',
      type: 'Sale',
      propertType: this.propertType,
      BHKType: this.BHKType,
      rentDetails: this.showOnlyType,
      furnishing: this.furType,
      parking: this.parkType,
      rentprefer: this.tentType,
      propAge: this.propageType,
      bathroom: this.bathType,
      buildupfrom: this.builtMin,
      buildupto: this.builtMax,
      priceFrom: this.rentMin,
      priceTo: this.rentMax,
      ageOfBuilding: this.ageArr,
      floor: this.floordata,
      finish: true,
    };
    //consolele.log(Data);
    this.service
      .getSellerDetails2(
        this.page,
        this.range,
        Data,
        this.floordata,
        this.areaArr
      )
      .subscribe((res: any) => {
        //consolele.log(res, 'data from backend');
        this.data = res.values;
        this.totalval = res.total;
        this.nextPage = res.next;
        if (this.totalval > 10) {
          this.showPag_rag = true;
        }
        ////consolele.log(this.data, 'data');

        if (this.page == 0) {
          let page = res.total / (this.page + 1);

          ////consolele.log(res.total, 'range', this.range);

          this.displaycount = Math.ceil(page / this.range);

          ////consolele.log(page, 'dc', this.page + 1);
        }
        this.sendDataBOOL = false;
      });
    // //consolele.log(this.sendData, 'updated');
    this.bathtypeShow = [];
    this.BhkTypeShow = [];
  }
  showPag_rag = false;

  onChange(e: any) {
    this.type = e.target.value;
  }
  floordata: any = { arr: [] };
  FloorArr: any = [];

  updateFilter(v: any, position: any) {
    position = position.toString();
    let value = v.target.value;
    console.log(v.target.value, position, 'selected', value);
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

    ////consolele.log('updted', this.SelectedFilters);
    //prop arr

    if (
      v.target.value == 'Gated Community' ||
      v.target.value == 'Individual House/Villa' ||
      v.target.value == 'Apartment'
    ) {
      if (this.proptArr.findIndex((res: any) => res == v.target.value) == -1) {
        this.proptArr.push(v.target.value);
        ////consolele.log(this.proptArr, 'proparr, update filter');
      } else {
        let index = this.proptArr.findIndex(
          (res: any) => res == v.target.value
        );

        this.proptArr.splice(index, 1);
        ////consolele.log('prop removed', this.proptArr);
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
        ////consolele.log(this.BhkCountArr,'bhk count')
        ////consolele.log(this.FbhkArr, 'final bhk arr');
      } else {
        let index = this.FbhkArr.findIndex((res: any) => res == v.target.value);

        this.FbhkArr.splice(index, 1);
        this.BhkCountArr.splice(index, 1);
        ////consolele.log(this.BhkCountArr,'bhk count')
        ////consolele.log('f bhk removed', this.FbhkArr);
      }
    }
    //bathroom arr

    if (
      v.target.value == '1 Bathroom' ||
      v.target.value == '2 Bathroom' ||
      v.target.value == '3 Bathroom' ||
      v.target.value == '4+ Bathroom'
    ) {
      if (this.newBath.findIndex((res: any) => res == v.target.value) == -1) {
        this.newBath.push(v.target.value);

        this.bathCountArr.push(position);
        console.log(this.newBath, this.bathCountArr, 'bath update');
      } else {
        let index = this.newBath.findIndex((res: any) => res == v.target.value);
        this.bathCountArr.splice(index, 1);
        this.newBath.splice(index, 1);
        console.log(this.newBath, position, this.bathCountArr, 'remove');
      }
    }
    //show only
    if (v.target.value == 'rent' || v.target.value == 'lease') {
      ////consolele.log('inside rebt r lease', this.SelectedFilters.findIndex((res: any) => res == v.target.value) );
      let i = this.ShowOnlyArr.findIndex((res: any) => res == v.target.value);
      if (i == -1) {
        this.ShowOnlyArr.push(v.target.value);
        ////consolele.log(this.ShowOnlyArr, 'if');
      } else {
        this.ShowOnlyArr.splice(i, 1);
        ////consolele.log(this.ShowOnlyArr, 'else');
      }
    }
    //furnished
    if (
      v.target.value == 'Fully Furnished' ||
      v.target.value == 'Semi Furnished' ||
      v.target.value == 'UnFurnished'
    ) {
      let i = this.FurArr.findIndex((res: any) => res == v.target.value);
      //consolele.log(i,this.FurArr.findIndex((res: any) => res == v.target.value),v.target.value,this.FurArr)
      if (i == -1) {
        this.FurArr.push(v.target.value);
        //consolele.log(this.FurArr, 'if');
        //consolele.log(this.SelectedFilters,'selected filter')
      } else {
        this.FurArr.splice(i, 1);
        //consolele.log(this.FurArr, 'else');
        //consolele.log(this.SelectedFilters,'selected filter',i)
      }
    }
    //park arr
    if (
      v.target.value == 'Bike' ||
      v.target.value == 'Car' ||
      v.target.value == 'Both'
    ) {
      let i = this.ParkArr.findIndex((res: any) => res == v.target.value);
      if (i == -1) {
        this.ParkArr.push(v.target.value);
        ////consolele.log(this.ParkArr, 'if');
      } else {
        this.ParkArr.splice(i, 1);
        ////consolele.log(this.ParkArr, 'else');
      }
    }
    //propstat arr
    if (v.target.value == 'Under Construction' || v.target.value == 'Ready') {
      let i = this.ageArr.findIndex((res: any) => res == v.target.value);
      if (i == -1) {
        this.ageArr.push(v.target.value);
        ////consolele.log(this.ageArr, 'if');
      } else {
        this.ageArr.splice(i, 1);
        ////consolele.log(this.ParkArr, 'else');
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
        ////consolele.log(this.TentArr);
      } else {
        this.TentArr.splice(i, 1);
        ////consolele.log(this.TentArr);
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
        ////consolele.log(this.PropAgeArr);
      } else {
        this.PropAgeArr.splice(i, 1);
        ////consolele.log(this.PropAgeArr);
      }
    }
    //floor arr
    if (
      v.target.value == 'Ground Floor' ||
      v.target.value == '1 to 3 Floor' ||
      v.target.value == '4 to 7 Floor' ||
      v.target.value == '8 to 12 Floor' ||
      v.target.value == '13+ Floor'
    ) {
      let i = this.ffloor.indexOf(v.target.value);
      console.log(i);
      if (i == -1) {
        this.ffloor.push(v.target.value);
        let index = this.floorArr.indexOf(v.target.value);
        this.floordata.push(this.floorDataArr[index]);

        console.log('floor', this.ffloor, 'floor data', this.floordata);
      } else {
        let index = this.ffloor.indexOf(v.target.value);
        this.ffloor.splice(index, 1);
        this.floordata.splice(index, 1);

        console.log(
          'floor',
          this.ffloor,
          'floor data',
          this.floordata,
          'remove'
        );
      }
    }
    //data to api
    this.assignToSaveData();
    ////consolele.log(this.ShowOnlyArr);
    let query = new URLSearchParams(this.sendData).toString();
    this.router.navigateByUrl('/buyer-residential-buy-view?' + query);
  }
  
  areaF: any;
  assignToSaveData() {
    switch (this.areaArr.length) {
      case 1:
        this.areaF = this.areaArr[0];
        break;
      case 2:
        this.areaF = this.areaArr[0] + '+' + this.areaArr[1];
        break;
      case 3:
        this.areaF =
          this.areaArr[0] + '+' + this.areaArr[1] + '+' + this.areaArr[2];
        break;
    }
    this.sendData = {
      formatAdd: this.formatAdd,
      area: this.areaF,
      type: this.type,
      propertType: this.proptArr,
      BHKType: this.BhkCountArr,
      rentDetails: this.ShowOnlyArr,
      furnishing: this.FurArr,
      parking: this.ParkArr,
      rentprefer: this.TentArr,
      propAge: this.PropAgeArr,
      bathroom: this.bathCountArr,
      ageOfBuilding: this.ageArr,
      buildupfrom: this.builtMin,
      buildupto: this.builtMax,
      priceFrom: this.rentMin,
      priceTo: this.rentMax,
      floor: this.floordata,
    };
  }
  deleteFilter(v: any) {
    let index = this.SelectedFilters.findIndex((res: any) => res == v);

    if (index > -1) {
      this.SelectedFilters.splice(index, 1);
    }
    //consolele.log(v)
    //consolele.log('deleted', this.SelectedFilters);

    //bhk arr
    if (
      this.FbhkArr.findIndex((res: any) => {
        return res == v;
      }) > -1
    ) {
      ////consolele.log(this.FbhkArr, 'sfsdf');
      let index = this.FbhkArr.findIndex((res: any) => {
        res == v;
      });
      this.FbhkArr.splice(index, 1);
      this.BhkCountArr.splice(index, 1);
    }
    //bath arr
    if (
      v == '1 Bathroom' ||
      v == '2 Bathroom' ||
      v == '3 Bathroom' ||
      v == '4+ Bathroom'
    ) {
      ////consolele.log(this.FbathArr, 'sfsdf');
      let index = this.newBath.findIndex((res: any) => res == v);
      this.bathCountArr.splice(index, 1);
      this.newBath.splice(index, 1);
      console.log(this.newBath, this.bathCountArr, 'remove');
    }

    //prop arr
    if (v == 'Gated Community' || 'Individual House/Villa' || 'Apartment') {
      let index = this.proptArr.findIndex((res: any) => {
        res == v;
      });
      let i = this.proptArr.indexOf(v);
      //consolele.log(this.proptArr,v,index,i)
      if (i > -1) {
        this.proptArr.splice(i, 1);
      }
    }
    //show only arr
    if (v == 'rent' || 'lease') {
      let index = this.ShowOnlyArr.findIndex((res: any) => res == v);
      ////consolele.log(index, 234234);
      if (index > -1) {
        this.ShowOnlyArr.splice(index, 1);
      }
    }
    //fur arr
    if (v == 'Fully Furnished' || 'Semi Furnished' || 'UnFurnished') {
      let index = this.FurArr.findIndex((res: any) => res == v);
      if (index > -1) {
        this.FurArr.splice(index, 1);
      }
      // //consolele.log(this.FurArr)
    }
    // park arr
    if (v == 'Bike' || v == 'Car' || v == 'Both') {
      let index = this.ParkArr.findIndex((res: any) => {
        res == v;
      });
      let i = this.ParkArr.indexOf(v);

      if (i > -1) {
        this.ParkArr.splice(i, 1);
      }
    }
    // park arr
    if (v == 'Under Construction' || v == 'Ready') {
      let index = this.ageArr.findIndex((res: any) => {
        res == v;
      });
      let i = this.ageArr.indexOf(v);

      if (i > -1) {
        this.ageArr.splice(i, 1);
      }
    }
    //tent arr
    if (v == 'Family' || v == 'Bachelor' || v == 'Company' || v == 'Any') {
      let index = this.TentArr.indexOf(v);

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
    if (
      v == 'Ground Floor' ||
      v == '1 to 3 Floor' ||
      v == '4 to 7 Floor' ||
      v == '8 to 12 Floor' ||
      v == '13+ Floor'
    ) {
      let index = this.ffloor.indexOf(v);
      this.ffloor.splice(index, 1);
      this.floordata.splice(index, 1);

      console.log('floor', this.ffloor, 'floor data', this.floordata, 'remove');
    }
    this.assignToSaveData();
    let query = new URLSearchParams(this.sendData).toString();
    this.router.navigateByUrl('/buyer-residential-buy-view?' + query);
  }

  is_chckked(val: any, filter: any) {
    // //consolele.log(val,filter)
    if (filter != '') {
      let index = filter.findIndex((res: any) => {
        res == val;
      });
      let i = filter.indexOf(val);
      // //consolele.log(index,'find index','is cheked',i,'indexof')
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

  changeRent(input: any) {
    this.rentMin = input.value;

    this.assignToSaveData();
    let query = new URLSearchParams(this.sendData).toString();
    this.router.navigateByUrl('/buyer-residential-buy-view?' + query);
  }
  changeRent1(input: any) {
    this.rentMax = input.value;
    this.assignToSaveData();
    let query = new URLSearchParams(this.sendData).toString();
    this.router.navigateByUrl('/buyer-residential-buy-view?' + query);
  }
  Rentchange() {
    console.log('change');
    this.assignToSaveData();
    let query = new URLSearchParams(this.sendData).toString();
    this.router.navigateByUrl('/buyer-residential-buy-view?' + query);
  }
  changeBuilt(input: any) {
    this.builtMin = input.value;

    this.assignToSaveData();
    let query = new URLSearchParams(this.sendData).toString();
    this.router.navigateByUrl('/buyer-residential-buy-view?' + query);
  }
  changeBuilt1(input: any) {
    this.assignToSaveData();
    let query = new URLSearchParams(this.sendData).toString();
    this.router.navigateByUrl('/buyer-residential-buy-view?' + query);
  }
  Builtchange() {
    console.log('change');
    this.assignToSaveData();
    let query = new URLSearchParams(this.sendData).toString();
    this.router.navigateByUrl('/buyer-residential-buy-view?' + query);
  }
  handleAddressChange(address: Address, input: any) {
    ////consolele.log(input.value);
    console.log(input.value);
    console.log(address);
    this.formatAdd = input.value;

    let Showvalue = input.value;

    if (address.formatted_address) {
      this.areaArr.push(Showvalue);
    } else {
      this.toastr.error('Fill the field', 'Please Select correct location!', {
        positionClass: 'toast-bottom-center',
      });
    }
    if (this.areaArr.length >= 3) {
      this.showInput = false;
      console.log(this.showInput, 'inpout show');
    }
    this.Address = address.address_components;
    console.log(this.areaArr, 'area arr in the function');
    this.filter.get('search').reset();
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
      //consolele.log(res, 'recent search');
    });
  }
  submitAddress() {
    this.sendRecentSearch();
    this.assignToSaveData();
    let query = new URLSearchParams(this.sendData).toString();

    this.router.navigateByUrl('/buyer-residential-buy-view?' + query);
  }
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  checkCookie: any;

  GetDataBYId(id: any, i: any) {
    //consolele.log(i)
    this.checkCookie = this.service.findCookie();
    if (this.checkCookie) {
      this.service.userStatusCheck(id).subscribe((res: any) => {
        //consolele.log(res, 'view res');

        switch (this.areaArr.length) {
          case 1:
            this.areaF = this.areaArr[0];
            break;
          case 2:
            this.areaF = this.areaArr[0] + '+' + this.areaArr[1];
            break;
          case 3:
            this.areaF =
              this.areaArr[0] + '+' + this.areaArr[1] + '+' + this.areaArr[2];
            break;
        }
        let data = {
          index: i,
          formatAdd: this.formatAdd,
          area: this.areaF,
          type: this.type,
          propertType: this.proptArr,
          BHKType: this.BhkCountArr,
          rentDetails: this.ShowOnlyArr,
          furnishing: this.FurArr,
          parking: this.ParkArr,
          rentprefer: this.TentArr,
          propAge: this.PropAgeArr,
          bathroom: this.bathCountArr,
          buildupfrom: this.builtMin,
          buildupto: this.builtMax,
          priceFrom: this.rentMin,
          priceTo: this.rentMax,
          floor: this.floordata,
          ageOfBuilding: this.ageArr,
          range: String(this.range),
          page: String(this.page),
        };

        const query = new URLSearchParams(data).toString();
        this.router.navigateByUrl(
          '/buyer-residential-buy-search-view?' + query
        );
      });
    } else {
      ////consolele.log('route to login')
      this.router.navigateByUrl('buyerLogin');
    }
  }
  GetRecentSearch(index: any) {
    let v = this.RecentSearchArr[index];
    //consolele.log(v, 'get recent search', this.RecentSearchArr[index].buildupto);

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
      .getSellerDetails(this.page, this.range, v, this.floordata)
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

    ////consolele.log(this.range, 'inside set range');

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
    this.floordata = [];
    this.ffloor = [];

    this.assignToSaveData();

    this.service
      .getSellerDetails(this.page, this.range, this.sendData, this.floordata)
      .subscribe((res: any) => {
        this.data = res.values;
        ////consolele.log(this.data, 'data');
      });
  }
  removeArea(i: any) {
    ////consolele.log(i);
    this.areaArr.splice(i, 1);
    if (!(this.areaArr.length >= 3)) {
      this.showInput = true;
      //consolele.log(this.showInput, 'inpout show');
    }

    ////consolele.log(this.areaArr,'area arry');
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
  nofiShow = false;
  showTab(tab: any) {
    console.log('tab choose');
    if (tab == 'post') {
      this.postshow = true;
      this.interestShow = false;
      this.saveShow = false;
      this.alertShow = false;
      this.nofiShow = false;
    }
    if (tab == 'interest') {
      this.postshow = false;
      this.interestShow = true;
      this.saveShow = false;
      this.alertShow = false;
      this.nofiShow = false;
    }
    if (tab == 'save') {
      this.postshow = false;
      this.interestShow = false;
      this.saveShow = true;
      this.alertShow = false;
      this.nofiShow = false;
    }
    if (tab == 'alert') {
      this.postshow = false;
      this.interestShow = false;
      this.saveShow = false;
      this.alertShow = true;
      this.nofiShow = false;
    }
    if (tab == 'nofi') {
      this.postshow = false;
      this.interestShow = false;
      this.saveShow = false;
      this.alertShow = false;
      this.nofiShow = true;
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
  ResiRent: any = [];
  ResiBuy: any = [];
  CommRent: any = [];
  CommBuy: any = [];

  Get_all_interest() {
    this.buyerService.getAll_Interested().subscribe((res: any) => {
      //consolele.log(res,'all interest')
      this.AllInterested = res;
      this.ResiRent = this.AllInterested.filter((v: any) => {
        return v.Type == 'Rent' && v.HouseOrCommercialType == 'Residential';
      });
      this.ResiBuy = this.AllInterested.filter((v: any) => {
        return v.Type == 'Sale' && v.HouseOrCommercialType == 'Residential';
      });
      this.CommRent = this.AllInterested.filter((v: any) => {
        return v.Type == 'Rent' && v.HouseOrCommercialType == 'Commercial';
      });
      this.CommBuy = this.AllInterested.filter((v: any) => {
        return v.Type == 'Sale' && v.HouseOrCommercialType == 'Commercial';
      });
    });
  }
  AllSaved: any;
  ResiRentS: any = [];
  ResiBuyS: any = [];
  CommRentS: any = [];
  CommBuyS: any = [];

  Get_all_saved() {
    this.buyerService.getAll_saved().subscribe((res: any) => {
      //consolele.log(res,'all saved')
      this.AllSaved = res;
      this.ResiRentS = this.AllSaved.filter((v: any) => {
        return v.Type == 'Rent' && v.HouseOrCommercialType == 'Residential';
      });
      this.ResiBuyS = this.AllSaved.filter((v: any) => {
        return v.Type == 'Sale' && v.HouseOrCommercialType == 'Residential';
      });
      this.CommRentS = this.AllSaved.filter((v: any) => {
        return v.Type == 'Rent' && v.HouseOrCommercialType == 'Commercial';
      });
      this.CommBuyS = this.AllSaved.filter((v: any) => {
        return v.Type == 'Sale' && v.HouseOrCommercialType == 'Commercial';
      });
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
      // //consolele.log(res);
      this.buyer = res;
      this.showProfileHeader = true;
    });
  }
  //alert pop
  minValue: any = 5000;
  maxValue: any = 100000;
  sendAlert = true;
  recAlert = false;
  showProfileHeader = false;
  check: boolean = true;
  check1: boolean = false;

  myform: any = this.fb.group({
    type: new FormControl(''),
  });

  popform: any = this.fb.group({
    foodType: new FormControl(''),
    PropertyStatus: new FormControl(''),
  });

  popOptions: Options = {
    floor: 5000,
    ceil: 100000,
    step: 500,
  };
  BuildupOptions: Options = {
    floor: 500,
    ceil: 10000,
    step: 500,
  };
  property = 'Residential';
  Residential() {
    this.check = true;
    this.check1 = false;
    this.property = 'Residential';
  }

  Commercial() {
    this.check1 = true;
    this.check = false;
    this.property = 'Commercial';
  }
  showAlertpop = false;

  ResiRentpop = false;
  ResiSalepop = false;
  CommRentpop = false;
  CommSalepop = false;

  popup() {
    //consolele.log(this.property,this.myform.get('type')?.value)

    if (
      this.property == 'Residential' &&
      this.myform.get('type')?.value == 'Rent'
    ) {
      this.ResiRentpop = true;
    }
    if (
      this.property == 'Residential' &&
      this.myform.get('type')?.value == 'Buy'
    ) {
      this.ResiSalepop = true;
    }
    if (
      this.property == 'Commercial' &&
      this.myform.get('type')?.value == 'Rent'
    ) {
      this.CommRentpop = true;
    }
    if (
      this.property == 'Commercial' &&
      this.myform.get('type')?.value == 'Buy'
    ) {
      this.CommSalepop = true;
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
  areaP: any;
  addressP: any;
  propertyTypeP: any;
  BhkTypeP: any;
  amountFromP: any;
  amountToP: any;
  parkingP: any;
  propertyStatusP: any;
  shftingDateP: any;

  areaPArr: any = [];
  propertyTypePArr: any = [];
  BhkTypePPArr: any = [];
  parkingPArr: any = [];
  propertyStatusPArr: any = [];
  shftingDatePPArr: any = [];

  planToBuy: any = [];
  CommProperty: any = [];
  CommBuildType: any = [];
  amenities: any = [];
  BuildminValue: any = 500;
  BuildmaxValue: any = 10000;

  update_pop_filter(v: any, arr: any) {
    if (v.target.checked) {
      arr.push(v.target.value);
      //consolele.log(arr)
    } else {
      let index = arr.indexOf(v.target.value);
      arr.splice(index, 1);
      //consolele.log(arr)
    }
  }
  letType: any;
  popcheck() {
    if (
      this.property == 'Residential' &&
      this.myform.get('type')?.value == 'Rent'
    ) {
      let data = {
        area: this.areaSend,
        ResOrCom: this.property,
        type: 'Rent',
        // address:this.areaPArr,
        amountFrom: this.minValue,
        amountTo: this.maxValue,
        propertyType: this.propertyTypePArr,
        BhkType: this.BhkTypePPArr,
        parking: this.parkingPArr,
        shftingDate: this.shftingDatePPArr,
        furnish: this.propertyStatusPArr,
        foodType: this.popform.get('foodType')?.value,
        PropertyStatus: this.popform.get('PropertyStatus')?.value,
      };
      //consolele.log(data,'data');
      if (this.firstAlert) {
        this.buyerService.send_alert(data).subscribe((res: any) => {
          //consolele.log(res)
          this.ResiRentpop = false;
          this.getAlert();
          this.empty();
          this.letType = 'Rent';
        });
      } else {
        this.buyerService
          .resend_alert(this.popid, data)
          .subscribe((res: any) => {
            //consolele.log(res)
            this.ResiRentpop = false;
            this.getAlert();
            this.empty();
            this.letType = 'Rent';
          });
      }
    }
    if (
      this.property == 'Residential' &&
      this.myform.get('type')?.value == 'Buy'
    ) {
      let data = {
        area: this.areaSend,
        // address:this.areaPArr,
        ResOrCom: this.property,
        type: 'Sale',
        amountFrom: this.minValue,
        amountTo: this.maxValue,
        propertyType: this.propertyTypePArr,
        BhkType: this.BhkTypePPArr,
        parking: this.parkingPArr,
        planToBuy: this.planToBuy,
        furnish: this.propertyStatusPArr,
        PropertyStatus: this.popform.get('PropertyStatus')?.value,
      };
      //consolele.log(data,'data');
      if (this.firstAlert) {
        this.buyerService.send_alert(data).subscribe((res: any) => {
          //consolele.log(res)

          this.getAlert();
          this.empty();
          this.letType = 'Buy';
          this.ResiSalepop = false;
        });
      } else {
        this.buyerService
          .resend_alert(this.popid, data)
          .subscribe((res: any) => {
            //consolele.log(res)
            this.getAlert();
            this.empty();
            this.letType = 'Buy';
            this.ResiSalepop = false;
          });
      }
    }
    if (
      this.property == 'Commercial' &&
      this.myform.get('type')?.value == 'Rent'
    ) {
      let data = {
        area: this.areaSend,
        ResOrCom: this.property,
        type: 'Rent',
        // address:this.areaPArr,
        amountFrom: this.minValue,
        amountTo: this.maxValue,
        propertyType: this.CommProperty,
        buildtype: this.CommBuildType,
        parking: this.parkingPArr,
        shftingDate: this.shftingDatePPArr,
        furnish: this.propertyStatusPArr,
        amenities: this.amenities,
        buildFrom: this.BuildminValue,
        buildTo: this.BuildmaxValue,
      };
      //consolele.log(data,'data');
      if (this.firstAlert) {
        this.buyerService.send_alert(data).subscribe((res: any) => {
          //consolele.log(res)

          this.getAlert();
          this.empty();
          this.letType = 'Rent';
          this.CommRentpop = false;
        });
      } else {
        this.buyerService
          .resend_alert(this.popid, data)
          .subscribe((res: any) => {
            //consolele.log(res)

            this.getAlert();
            this.empty();
            this.letType = 'Rent';
            this.CommRentpop = false;
          });
      }
    }
    if (
      this.property == 'Commercial' &&
      this.myform.get('type')?.value == 'Buy'
    ) {
      let data = {
        area: this.areaSend,
        ResOrCom: this.property,
        type: 'Sale',
        // address:this.areaPArr,
        amountFrom: this.minValue,
        amountTo: this.maxValue,
        propertyType: this.CommProperty,
        buildtype: this.CommBuildType,
        parking: this.parkingPArr,
        planToBuy: this.planToBuy,
        furnish: this.propertyStatusPArr,
        amenities: this.amenities,
        buildFrom: this.BuildminValue,
        buildTo: this.BuildmaxValue,
      };
      //consolele.log(data,'data');
      if (this.firstAlert) {
        this.buyerService.send_alert(data).subscribe((res: any) => {
          //consolele.log(res)

          this.getAlert();
          this.empty();
          this.letType = 'Buy';
          this.CommSalepop = false;
        });
      } else {
        this.buyerService
          .resend_alert(this.popid, data)
          .subscribe((res: any) => {
            //consolele.log(res)

            this.getAlert();
            this.empty();
            this.letType = 'Buy';
            this.CommSalepop = false;
          });
      }
    }
  }
  empty() {
    this.propertyTypePArr = [];
    this.BhkTypePPArr = [];
    this.CommProperty = [];
    this.CommBuildType = [];
    this.parkingPArr = [];
    this.propertyStatusPArr = [];
    this.amenities = [];
    this.shftingDatePPArr = [];
    this.areaSend = [];
    this.CommProperty = [];
    this.CommBuildType = [];
  }

  areaSend: any = [];
  showinput2 = true;
  popValue: any = [];
  alertaddress(address: Address, input: any) {
    ////consolele.log(input.value);

    this.areaPArr.push(input.value);
    if (this.areaPArr.length >= 3) {
      this.showinput2 = false;
      //consolele.log(this.showinput2, 'showinput2 show');
    }
    this.latitude = address.geometry.location.lat();
    this.longtitude = address.geometry.location.lng();
    this.service
      .getAddress(this.latitude, this.longtitude)
      .subscribe((res: any) => {
        this.Address = res[0].address_components;
        let area = this.Address.find((component: any) => {
          if (component.types.includes('locality')) {
            return component.types.includes('locality');
          }
          if (component.types.includes('sublocality_level_1')) {
            return component.types.includes('sublocality_level_1');
          }
        }).long_name;
        //consolele.log(area);
        this.areaSend.push(area);
      });
  }

  removeArea2(i: any) {
    ////consolele.log(i);
    this.areaPArr.splice(i, 1);
    if (!(this.areaPArr.length >= 3)) {
      this.showinput2 = true;
      //consolele.log(this.showinput2, 'showinput2 show');
    }
  }
  getRentRange1(v: any) {
    this.maxValue = v.value;
  }
  getRentRange(v: any) {
    this.minValue = v.value;
  }
  getBuiltRange(v: any) {
    this.BuildminValue = v.value;
  }
  getBuiltRange1(v: any) {
    this.BuildmaxValue = v.value;
  }

  firstAlert = true;
  popid: any;
  getAlert() {
    this.buyerService.get_alert().subscribe((res: any) => {
      //consolele.log(res,'get alert',)

      this.popValue = res.values;
      this.popid = res.data._id;
      this.property = res.data.ResOrCom;
      this.letType = res.data.type;

      if (res.data._id != null) {
        this.firstAlert = false;
        //consolele.log(this.firstAlert,'first alert','inside if')
      }
      if (res.data == null) {
        this.recAlert = false;
        this.sendAlert = true;
      } else {
        this.recAlert = true;
        this.sendAlert = false;
      }
      //consolele.log(this.firstAlert,'first alert','in function')
    });
  }
  changeAlert() {
    this.recAlert = false;
    this.sendAlert = true;
  }
}
