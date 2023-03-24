import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private service: PostPropertyService
  ) {}
  range = 20;
  page = 0;
  formatAdd: any;
  data: any;
  type: any;
  propertType: any;
  BHKType: any;

  filter: any = this.fb.group({
    propertType: new FormControl(''),
  });

  ngOnInit(): void {
    this.arouter.queryParams.subscribe((params) => {
      this.formatAdd = params['formatAdd'];
      this.type = params['type'];
      this.propertType = params['propertType'];
      this.BHKType = params['BHKType'];
    });
    let data = {
      formatAdd: this.formatAdd,
      type: this.type,
      propertType: this.propertType,
      BHKType: this.BHKType,
    };

    console.log(data);
    this.service
      .getSellerDetails(this.page, this.range, data)
      .subscribe((res: any) => {
        console.log(res);
        this.data = res.values;
        console.log(this.data, 'data');
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
  }
  SelectedFilters: any[] = [];
  FbhkArr: any[] = [];
  proptArr: any[] = [];
  bhkArr: any[] = [
    '1 Rk',
    '1 BHK',
    '2 BHK',
    '3 BHK',
    '4+ BHK',
   
  ];
  ShowOnlyArr: any[] = [];
  FurArr: any[] = [];
  ParkArr:any[]=[];
  TentArr:any[]=[];
  PropAgeArr:any[]=[];

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
    let data = {
      formatAdd: this.formatAdd,
      type: this.type,
      propertType: this.proptArr,
      BHKType: this.FbhkArr,
      rentDetails: this.ShowOnlyArr,
      furnishing: this.FurArr,
      parking:this.ParkArr,
      rentprefer:this.TentArr,
      propAge:this.PropAgeArr
    };
    console.log(this.ShowOnlyArr);
    this.service
      .getSellerDetails(this.page, this.range, data)
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
    if(this.FbhkArr.findIndex((res:any)=>{ return res == v }) > -1){
      console.log(this.FbhkArr,'sfsdf');
      let index = this.FbhkArr.findIndex((res:any)=>{ res == v });
      this.FbhkArr.splice(index,1);
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
      console.log(index,234234)
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
    if (
      v == 'Bike' ||
      v == 'Car' ||
      v == 'Both'
    ){
      let index = this.ParkArr.indexOf(v);
      if (index > -1) {
        this.ParkArr.splice(index, 1);
      }
    }
    //tent arr
    if(
      v == 'Family' ||
      v == 'Bachelor' ||
      v == 'Company' ||
      v == 'Any'
    ) {
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
    ){
      let index = this.PropAgeArr.indexOf(v);
      if (index > -1) {
        this.PropAgeArr.splice(index, 1);
      }
    }


    let data = {
      formatAdd: this.formatAdd,
      type: this.type,
      propertType: this.proptArr,
      BHKType: this.BHKType,
      rentDetails: this.ShowOnlyArr,
      furnishing: this.FurArr,
      parking:this.ParkArr,
      rentprefer:this.TentArr,
      propAge:this.PropAgeArr
    };

    this.service
      .getSellerDetails(this.page, this.range, data)
      .subscribe((res: any) => {
        this.data = res.values;
        console.log(this.data, 'data');
      });
  }

  is_chckked(val: any, filter: any) {
    if (filter != '') {
      let index = filter.indexOf(val);

      console.log(val,filter,index)
      if (index == -1) {
       
        return false;

      } else {
       
        return true;
      }
    } else {
      return false;
    }
  }

  // is_ched(){
  //   if(this.type == 'Rent'){
  //     return true
  //   }
  // }
}
