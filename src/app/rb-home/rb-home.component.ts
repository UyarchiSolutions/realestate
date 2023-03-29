import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'ng-google-places-autocomplete';
import { Cookie } from 'ng2-cookies';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-rb-home',
  templateUrl: './rb-home.component.html',
  styleUrls: ['./rb-home.component.css'],
})
export class RbHomeComponent implements OnInit {
  constructor(
    private arouter: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private service: PostPropertyService,
    
  ) {}
  range = 10;
  page = 0;
  displaycount = 0;

  pagetotal = 0;
  totalcount = 0;
  areaArr:any=[];
  formatAdd: any='';
  data: any;
  type: any;
  propertType: any;
  BHKType: any;

  filter: any = this.fb.group({
    propertType: new FormControl(''),
  });

  ngOnInit(): void {
   
    this.arouter.queryParamMap.subscribe((params:any) => {
      console.log(params.params.formatAdd)
      if( params.params.formatAdd != null ){
      console.log(params,656767);
      this.formatAdd =params.params.formatAdd;
      this.type =params.params['type'];
      this.propertType = params.params['propertType'];
      this.BHKType = params.params['BHKType'];
      this.areaArr =  params.params['area'];
      
      this.ShowOnlyArr=params.params['rentDetails'] !=null && params.params['rentDetails'] !='' ? params.params['rentDetails'].split(',') :[];
      this.FurArr=params.params['furnishing'];
      this.ParkArr=params.params['rentprefer'];
      this.PropAgeArr=params.params['PropAgeArr'];
      // this.areaArr =this.areaArr.split(',');
      console.log(this.areaArr)
      this.GetDataForFilter();
        console.log(this.ShowOnlyArr,23423423)
      }
    });
    if (this.propertType) {
      this.SelectedFilters.push(this.propertType);
      this.proptArr.push(this.propertType);
    }
    if (this.BHKType) {
      this.SelectedFilters.push(this.BHKType);
      this.FbhkArr.push(this.BHKType);
      console.log(this.FbhkArr, this.SelectedFilters);
    }
    // this.areaArr=this.service.GAreaArr
    console.log('sdfsf,ng oninit')
  }
  sendData: any;
  sendDataBOOL = true;
  GetDataForFilter() {
    console.log('in get data');
    if (this.sendDataBOOL) {
      this.sendData = {
        formatAdd: this.formatAdd,
        type: this.type,
        propertType: this.propertType,
        BHKType: this.BHKType,
      };
    } else {
      this.sendData = {
        formatAdd: this.formatAdd,
        type: this.type,
        propertType: this.proptArr,
        BHKType: this.BHKType,
        rentDetails: this.ShowOnlyArr,
        furnishing: this.FurArr,
        parking: this.ParkArr,
        rentprefer: this.TentArr,
        propAge: this.PropAgeArr,
      };
    }

    console.log(this.sendData,'senddatabool',this.sendDataBOOL);
    this.service
      .getSellerDetails(this.page, this.range, this.sendData)
      .subscribe((res: any) => {
        console.log(res);
        this.data = res.values;
        console.log(this.data, 'data');

        if (this.page == 0) {
          let page = res.total / (this.page + 1);

          console.log(res.total, 'range', this.range);

          this.displaycount = Math.ceil(page / this.range);

          console.log(page, 'dc', this.page + 1);
        }
        this.sendDataBOOL = false;
      });
  }
  SelectedFilters: any = [];
  FbhkArr: any = [];
  proptArr: any = [];
  bhkArr: any = ['1 Rk', '1 BHK', '2 BHK', '3 BHK', '4+ BHK'];
  ShowOnlyArr: any = [];
  FurArr: any = [];
  ParkArr: any = [];
  TentArr: any = [];
  PropAgeArr: any = [];
  RecentSearchArr: any = [];
  dommy: any = [];
  LoopItArr: any = [];
  onChange(e:any){
    this.type = e.target.value;
  }
  updateFilter(v: any) {
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

    console.log('updted', this.SelectedFilters);
    //prop arr

    if (
      v.target.value == 'Gated Community' ||
      v.target.value == 'Individual House/Villa' ||
      v.target.value == 'Apartment'
    ) {
      if (this.proptArr.findIndex((res: any) => res == v.target.value) == -1) {
        this.proptArr.push(v.target.value);
        console.log(this.proptArr, 'proparr, update filter');
      } else {
        let index = this.proptArr.findIndex(
          (res: any) => res == v.target.value
        );

        this.proptArr.splice(index, 1);
        console.log('prop removed', this.proptArr);
      }
    }

    //bhk arr
    if (
      this.bhkArr.findIndex((res: any) => {
        return res == v.target.value;
      }) != -1
    ) {
      if (
        this.FbhkArr.findIndex((res: any) => {
          return res == v.target.value;
        }) == -1
      ) {
        this.FbhkArr.push(v.target.value);
        console.log(this.FbhkArr, 'final bhk arr');
      } else {
        let index = this.FbhkArr.findIndex((res: any) => res == v.target.value);

        this.FbhkArr.splice(index, 1);
        console.log('f bhk removed', this.FbhkArr);
      }
    }
    //show only
    if (v.target.value == 'rent' || v.target.value == 'lease') {
      console.log(
        'inside rebt r lease',
        this.SelectedFilters.findIndex((res: any) => res == v.target.value)
      );
      let i = this.SelectedFilters.findIndex(
        (res: any) => res == v.target.value
      );
      if (i != -1) {
        this.ShowOnlyArr.push(v.target.value);
        console.log(this.ShowOnlyArr, 'if');
      } else {
        this.ShowOnlyArr.splice(i, 1);
        console.log(this.ShowOnlyArr, 'else');
      }
    }
    //furnished
    if (
      v.target.value == 'Fully Furnished' ||
      v.target.value == 'Semi Furnished' ||
      v.target.value == 'UnFurnished'
    ) {
      let i = this.SelectedFilters.findIndex(
        (res: any) => res == v.target.value
      );
      if (i != -1) {
        this.FurArr.push(v.target.value);
        console.log(this.FurArr, 'if');
      } else {
        this.FurArr.splice(i, 1);
        console.log(this.FurArr, 'else');
      }
    }
    //park arr
    if (
      v.target.value == 'Bike' ||
      v.target.value == 'Car' ||
      v.target.value == 'Both'
    ) {
      let i = this.SelectedFilters.findIndex(
        (res: any) => res == v.target.value
      );
      if (i != -1) {
        this.ParkArr.push(v.target.value);
        console.log(this.ParkArr, 'if');
      } else {
        this.ParkArr.splice(i, 1);
        console.log(this.ParkArr, 'else');
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
        console.log(this.TentArr);
      } else {
        this.TentArr.splice(i, 1);
        console.log(this.TentArr);
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
        console.log(this.PropAgeArr);
      } else {
        this.PropAgeArr.splice(i, 1);
        console.log(this.PropAgeArr);
      }
    }
    //data to api
    this.sendData = {
      formatAdd: this.formatAdd,
      type: this.type,
      propertType: this.proptArr,
      BHKType: this.FbhkArr,
      rentDetails: this.ShowOnlyArr,
      furnishing: this.FurArr,
      parking: this.ParkArr,
      rentprefer: this.TentArr,
      propAge: this.PropAgeArr,
    };
    console.log(this.ShowOnlyArr);
    this.service
      .getSellerDetails(this.page, this.range, this.sendData)
      .subscribe((res: any) => {
        this.data = res.values;
        console.log(this.data, 'data');
      });
  }

  deleteFilter(v: any) {
    let index = this.SelectedFilters.indexOf(v);

    if (index > -1) {
      this.SelectedFilters.splice(index, 1);
    }
    console.log('deleted', this.SelectedFilters);

    //bhk arr
    if (
      this.FbhkArr.findIndex((res: any) => {
        return res == v;
      }) > -1
    ) {
      console.log(this.FbhkArr, 'sfsdf');
      let index = this.FbhkArr.findIndex((res: any) => {
        res == v;
      });
      this.FbhkArr.splice(index, 1);
    }

    //prop arr
    if (v == 'Gated Community' || 'Individual House/Villa' || 'Apartment') {
      let index = this.proptArr.indexOf(v);
      if (index > -1) {
        this.proptArr.splice(index, 1);
      }
    }
    //show only arr
    if (v == 'rent' || 'lease') {
      let index = this.ShowOnlyArr.indexOf(v);
      console.log(index, 234234);
      if (index > -1) {
        this.ShowOnlyArr.splice(index, 1);
      }
    }
    //fur arr
    if (v == 'Fully Furnished' || 'Semi Furnished' || 'UnFurnished') {
      let index = this.FurArr.indexOf(v);
      if (index > -1) {
        this.FurArr.splice(index, 1);
      }
    }
    // park arr
    if (v == 'Bike' || v == 'Car' || v == 'Both') {
      let index = this.ParkArr.indexOf(v);
      if (index > -1) {
        this.ParkArr.splice(index, 1);
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
      let index = this.PropAgeArr.indexOf(v);
      if (index > -1) {
        this.PropAgeArr.splice(index, 1);
      }
    }

    this.sendData = {
      formatAdd: this.formatAdd,
      type: this.type,
      propertType: this.proptArr,
      BHKType: this.FbhkArr,
      rentDetails: this.ShowOnlyArr,
      furnishing: this.FurArr,
      parking: this.ParkArr,
      rentprefer: this.TentArr,
      propAge: this.PropAgeArr,
    };

    this.service
      .getSellerDetails(this.page, this.range, this.sendData)
      .subscribe((res: any) => {
        this.data = res.values;
        console.log(this.data, 'data');
      });
  }

  is_chckked(val: any, filter: any) {
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
  latitude: any;
  Address:any=[];
  longtitude: any;
  area: any;
  city: any;
  handleAddressChange(address: Address, input: any) {
    console.log(input.value);
    this.formatAdd = input.value;

     this.latitude = address.geometry.location.lat();
     this.longtitude = address.geometry.location.lng();

     this.service.getAddress(this.latitude, this.longtitude).subscribe((res: any) => {
      console.log(res)

   

    this.Address = res[0].address_components;
    console.log(this.Address)

    console.log( res
      ,'zxczc',input.value)

      let area = this.Address.find((component:any) =>{
        if( component.types.includes('locality')){

          console.log(component.types.includes('locality'),'locality');

        return component.types.includes('locality')}

        if( component.types.includes('sublocality_level_1')){

          console.log(component.types.includes('sublocality_level_1'),'sublocality_level_1');

        return component.types.includes('sublocality_level_1')}

      }
      ).long_name;
      console.log(area);
      this.areaArr.push(area);

    //  let city = this.Address.find((component:any) => component.types.includes('administrative_area_level_3')).long_name;
    //   console.log(city);
    //   this.city= city;

      })
      // input.value = '';
  }
  submitAddress() {
    const formatAdd = this.formatAdd;
    const type = this.type;
    const propertType = this.proptArr;
    const BHKType = this.FbhkArr;
    const rentDetails = this.ShowOnlyArr;
    const furnishing = this.FurArr;
    const parking = this.ParkArr;
    const rentprefer = this.TentArr;
    const propAge = this.PropAgeArr;
    this.sendData = {
      formatAdd: formatAdd,
      type: type,
      propertType: propertType,
      BHKType: BHKType,
      rentDetails: rentDetails,
      furnishing: furnishing,
      parking: parking,
      rentprefer: rentprefer,
      propAge: propAge,
    };
    const sendData: any = {
      formatAdd: formatAdd,
      type: type,
      propertType:[...propertType],
      BHKType: [...BHKType],
      rentDetails: [...rentDetails],
      furnishing:[...furnishing],
      parking: [...parking],
      rentprefer: [...rentprefer],
      propAge: [...propAge],
      selected:[...this.SelectedFilters]
    };
    console.log(this.FbhkArr,'bhk')

  this.RecentSearchArr.push(sendData);

    console.log( 'recent search array', this.RecentSearchArr);
    console.log(this.sendData);
    this.service
      .getSellerDetails(this.page, this.range, this.sendData)
      .subscribe((res: any) => {
        console.log(res);
        this.data = res.values;
        console.log(this.data, 'data');

        if (this.page == 0) {
          let page = res.total / (this.page + 1);

          console.log(res.total, 'range', this.range);

          this.displaycount = Math.ceil(page / this.range);

          console.log(page, 'dc', this.page + 1);
        }
        this.sendDataBOOL = false;
      });
  }
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  checkCookie:any;

  GetDataBYId(id: any,i:any) {


    this.checkCookie= this.service.findCookie();    
    if(  this.checkCookie){
    this.service.userStatusCheck(id).subscribe((res:any)=>{
      console.log(res);
      
      let oneid={
        id:id,
        index:i,
        formatAdd: this.formatAdd,
        type: this.type,
        propertType: this.proptArr,
        BHKType: this.FbhkArr,
        rentDetails: this.ShowOnlyArr,
        furnishing: this.FurArr,
        parking: this.ParkArr,
        rentprefer: this.TentArr,
        propAge: this.PropAgeArr,

      }
   
    this.service.Alldata=this.sendData;
   
    const query = new URLSearchParams(oneid).toString();
    this.router.navigateByUrl('/buyer-residential-rent-search-view?'+ query);
    })
  }
  else{
     console.log('route to login')
    this.router.navigateByUrl('buyerLogin')
  }

        
  }
  GetRecentSearch(index: any) {
   
   

    console.log(this.RecentSearchArr[index], 'recent get by index',index);

    let v = this.RecentSearchArr[index];

    this.SelectedFilters = this.RecentSearchArr[index].selected;
    this.proptArr = this.RecentSearchArr[index].propertType;
    this.FbhkArr =this.RecentSearchArr[index].BHKType;
    this.ShowOnlyArr=this.RecentSearchArr[index].rentDetails;
    this.FurArr=this.RecentSearchArr[index].furnishing;
    this.ParkArr=this.RecentSearchArr[index].parking;
    this.TentArr=this.RecentSearchArr[index].rentprefer;
    this.PropAgeArr=this.RecentSearchArr[index].propAge;
    this.formatAdd=this.RecentSearchArr[index].formatAdd;
    
    console.log(
      this.RecentSearchArr[index].SelectedFilters,
      'filter of reacent', this.SelectedFilters);

    this.service
      .getSellerDetails(this.page, this.range, v)
      .subscribe((res: any) => {
        console.log(res);
        this.data = res.values;
        console.log(this.data, 'data');
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

    console.log(this.range, 'inside set range');

    this.GetDataForFilter();
  }
  emptyArr: any[] = [];

  refineFilters() {
    this.SelectedFilters = this.emptyArr;
    this.FbhkArr = [''];
    this.proptArr = [''];
    this.ShowOnlyArr = [''];
    this.FurArr = [''];
    this.ParkArr = [''];
    this.TentArr = [''];
    this.PropAgeArr = [''];

    this.sendData = {
      formatAdd: this.formatAdd,
      type: this.type,
      propertType: this.proptArr,
      BHKType: this.FbhkArr,
      rentDetails: this.ShowOnlyArr,
      furnishing: this.FurArr,
      parking: this.ParkArr,
      rentprefer: this.TentArr,
      propAge: this.PropAgeArr,
    };
    console.log(this.SelectedFilters);
    this.service
      .getSellerDetails(this.page, this.range, this.sendData)
      .subscribe((res: any) => {
        this.data = res.values;
        console.log(this.data, 'data');
      });
  }
  removeArea(i:any){
    console.log(i);
    this.areaArr.splice(i,1);
    console.log('area removed',this.areaArr.indexOf(i),'index');
    console.log(this.areaArr,'area arry');
    this.service.GAreaArr = this.areaArr;
  }
  logOut(){
    sessionStorage.clear();
    localStorage.clear();
    Cookie.delete('buyer');
   
    this.router.navigateByUrl('/');
  }
}
