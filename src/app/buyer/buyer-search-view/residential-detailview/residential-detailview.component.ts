import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from 'src/app/services/post-property.service';
import { BuyerService } from '../../buyer.service';
import { AgmMarker } from '@agm/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';

@Component({
  selector: 'app-residential-detailview',
  templateUrl: './residential-detailview.component.html',
  styleUrls: ['./residential-detailview.component.css'],
})
export class ResidentialDetailviewComponent implements OnInit {
  allFilter: any;
  areaArrF: any;
  showOnlyType: any;
  furType: any;
  tentType: any;
  propageType: any;
  bathType: any;
  parkType: any;
  floorType: any;
  builtMin: any;
  builtMax: any;
  rentMin: any;
  rentMax: any;
  floordata: any;
  constructor(
    private arouter: ActivatedRoute,
    private service: PostPropertyService,
    private router: Router,
    private buyerService: BuyerService,
    private spinner: NgxSpinnerService,
    private location_: Location
  ) {}
  id: any;
  data: any = [];
  images: any;
  index: any;
  page = 0;
  range = 20;
  Alldata: any;
  formatAdd: any;
  type: any;
  propertType: any;
  BHKType: any = [];
  rentDetails: any;
  furnishing: any;
  parking: any;
  rentprefer: any;
  propAge: any;
  areaArr: any;
  imageLength: any;

  hospitalIcon = './assets/images/hospital.png';
  cinemaIcon = './assets/images/cinema.png';
  hotelIcon = './assets/images/hotel.png';
  schoolIcon = './assets/images/school.png';
  transportIcon = './assets/images/transport.png';
  atmIcon = './assets/images/atm.png';
  shopIcon = './assets/images/shop.png';
  checkInterest: any;
  checkSchedule: any;
  history: any = [];
  report: any = [
    'Fake Account',
    'Price Manipulation',
    'Fake Properties listing',
    'Misleading Advertisement',
    'Rental Scam',
    'Seems Like Broker',
    'Wrong Mobile Number',
  ];

  checkSave: any;
  checkNotification: any;
  checkhome!: string;
  ngOnInit(): void {
    this.arouter.queryParamMap.subscribe((params: any) => {
      console.log(params);
      this.id = params.params['id'];
      this.checkInterest = params.params['interested'];
      this.checkSave = params.params['saved'];
      this.checkNotification = params.params['noti'];
      this.index = params.params['index'];
      this.checkhome = params.params['home'];
      //to return
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
      //console.log(this.areaArr,this.areaArr.length);
      // for(let i=0;)

      this.showOnlyType =
        params.params['rentDetails'] != null &&
        params.params['rentDetails'] != ''
          ? params.params['rentDetails'].split(',')
          : [];
      this.furType =
        params.params['furnishing'] != null && params.params['furnishing'] != ''
          ? params.params['furnishing'].split(',')
          : [];
      this.tentType =
        params.params['rentprefer'] != null && params.params['rentprefer'] != ''
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
      this.floordata =
        params.params['floor'] != null && params.params['floor'] != ''
          ? params.params['floor'].split(',')
          : [];
      this.range = params.params['range'];
      this.builtMin = params.params['buildupfrom'];
      this.builtMax = params.params['buildupto'];
      this.rentMin = params.params['priceFrom'];
      this.rentMax = params.params['priceTo'];
      this.page = params.params['page'];
    });
    this.index = Number(this.index);

    this.page = Number(this.page);
    this.range = Number(this.range);

    // if(this.page){
    //   this.index = this.page+1 * this.range
    // }
    this.get_buyer();
    console.log(this.checkInterest, 'interest');
    console.log(this.checkSave, 'checkSave');
    console.log(this.checkNotification, 'checkNotification');
    console.log(this.checkhome, 'checkhome');
    if (this.checkInterest) {
      this.get_interst();
    }
    if (this.checkSave) {
      this.get_save();
    }
    if (this.checkNotification) {
      this.get_post(this.id);
    }
    if (this.checkhome) {
      this.GetDataForFilter();
    }
  }

  TotalData: any;
  GetDataForFilter() {
    let Data = {
      HouseOrCommercialType: 'Residential',
      type: 'Rent',
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
      floor: this.floordata,
      index: this.index,
    };
    console.log(Data);
    this.service
      .getSellerDetails2(
        this.page,
        this.range,
        Data,
        this.floordata,
        this.areaArr
      )
      .subscribe((res: any) => {
        console.log(res, 'data from backend');
        this.id = res.nextData._id;
        this.images = res.nextData.image;
        this.TotalData = res.values.length;
        this.get_post(this.id);
        // this.data = res.nextData;
        // this.images = res.nextData.image;
        // this.TotalData = res.values.length;
        // this.lat = this.data.lat;
        // this.long = this.data.long;
        // this.imageLength = this.data.image.length;
        // this.get_landmarks_forbuyer('School');
        // if(this.data.users){
        //   console.log('ok correct')
        // }
        // else{
        //   this.service.userStatusCheck(this.data._id).subscribe((res:any)=>{
        //     console.log('changed viewed')
        //   })
        // }
        // this.interestV= this.data.users.status=='Intrested'?  true : false;
        // this.saveV=this.data.WhishList.indexOf(this.buyerId) > -1 ? true:false;
        // console.log(this.saveV,'save v')
        // console.log(this.data);
      });
  }
  buyerId: any;
  get_buyer() {
    this.buyerService.myAcount().subscribe((res: any) => {
      this.buyerId = res._id;
      console.log(this.buyerId, 'buyerid');
    });
  }
  get_interst() {
    let type = 'Rent';
    let ctype = 'Residential';
    console.log('interst working');
    this.buyerService
      .get_interest_new(type, ctype, this.page, this.range, this.index)
      .subscribe((res: any) => {
        this.get_post(res.nextData._id);
        this.TotalData = res.total;
      });
  }
  get_save() {
    let type = 'Rent';
    let ctype = 'Residential';
    console.log('interst working');
    this.buyerService
      .get_save_new(type, ctype, this.page, this.range, this.index)
      .subscribe((res: any) => {
        this.get_post(res.nextData._id);
        this.TotalData = res.total;
      });
  }
  imgSliderCheker: any;
  imgslider(a: any) {
    this.imgSliderCheker = a;
  }
  imgSLnonw() {
    this.imgSliderCheker = '';
  }

  relation: any;
  get_post(id: any) {
    this.service.formget1(id).subscribe((res: any) => {
      console.log(res, res.intrest, 'formget');
      this.relation = res.relation;
      this.data = res.values;
      this.interestV = res.intrest;
      this.saveV = res.savedStatus;
      this.showRes = res.show;
      this.lat = this.data.lat;
      this.long = this.data.long;
      this.history = res.relation;
      this.imageLength = this.data.image.length;
      if (this.relation == null) {
        this.service.userStatusCheck(this.data._id).subscribe((res: any) => {
          console.log('changed viewed');
        });
      } else {
        console.log('ok');
      }
      this.get_landmarks_forbuyer('School');
    });
  }
  lat: any;
  long: any;
  landmarks: any = [];
  LMlat_long: any = [];
  icon: any = '';
  radius = 2000;
  get_landmarks_forbuyer(landmak: any) {
    this.place = landmak;
    this.landmarks = [];
    this.LMlat_long = [];
    // console.log('empty',this.landmarks,this.LMlat_long)

    if (this.LMlat_long == '') {
      this.icon = landmak == 'theater' ? this.cinemaIcon : this.icon;
      this.icon = landmak == 'Restaurant' ? this.hotelIcon : this.icon;
      this.icon = landmak == 'Hospital' ? this.hospitalIcon : this.icon;
      this.icon = landmak == 'School' ? this.schoolIcon : this.icon;
      this.icon = landmak == 'Transportation' ? this.transportIcon : this.icon;
      this.icon = landmak == 'atm' ? this.atmIcon : this.icon;
      this.icon = landmak == 'Grocery' ? this.shopIcon : this.icon;

      // console.log('inside if',this.landmarks,this.LMlat_long);
      if(landmak == 'Transportation'){

        this.buyerService
        .get_landmarks(this.lat, this.long, this.radius, 'bus')
        .subscribe((res: any) => {
          this.LMlat_long = [];
          this.landmarks = [];
          this.landmarks = res.results;
          for (let i = 0; i < 4; i++) {
            this.LMlat_long.push({
              lat: this.landmarks[i].geometry.location.lat,
              long: this.landmarks[i].geometry.location.lng,
              icon: this.landmarks[i].icon,
              name: this.landmarks[i].name,
              add: this.landmarks[i].vicinity,
            });
          }
        })
        this.buyerService
        .get_landmarks(this.lat, this.long, this.radius, 'Metro')
        .subscribe((res: any) => {
          this.landmarks = [];
          this.landmarks = res.results;
          for (let i = 0; i < 4; i++) {
            this.LMlat_long.push({
              lat: this.landmarks[i].geometry.location.lat,
              long: this.landmarks[i].geometry.location.lng,
              icon: this.landmarks[i].icon,
              name: this.landmarks[i].name,
              add: this.landmarks[i].vicinity,
            });
          }
        })
        console.log(this.LMlat_long,'fina lat long')
      }
      else{
        this.buyerService
        .get_landmarks(this.lat, this.long, this.radius, this.place)
        .subscribe((res: any) => {
          this.LMlat_long = [];
          this.landmarks = [];
          this.landmarks = res.results;
          console.log(res, this.landmarks, 'from landmaks');
          for (let i = 0; i < 8; i++) {
            this.LMlat_long.push({
              lat: this.landmarks[i].geometry.location.lat,
              long: this.landmarks[i].geometry.location.lng,
              icon: this.landmarks[i].icon,
              name: this.landmarks[i].name,
              add: this.landmarks[i].vicinity,
            });
          }
          // console.log(this.LMlat_long,'lat,long');
        });
      }
    
    }
  }

  next() {
    this.index = this.index + 1;
    if (this.index > this.TotalData - 1) {
      this.index = 0;
    }
    if (this.checkInterest) {
      this.get_interst();
    }
    if (this.checkSave) {
      this.get_save();
    }
    if (this.checkhome) {
      this.GetDataForFilter();
    }
    this.imageLength = '';
  }
  previous() {
    this.index = this.index - 1;
    if (this.index == -1) {
      this.index = this.TotalData - 1;
    }

    if (this.checkInterest) {
      this.get_interst();
    }
    if (this.checkSave) {
      this.get_save();
    }
    if (this.checkhome) {
      this.GetDataForFilter();
    }
    this.imageLength = '';
  }
  backToSearch() {
    window.history.back();
  }

  interestV: any;
  interest(id: any) {
    this.service.interest(id).subscribe((res: any) => {
      if (this.checkInterest) {
        this.get_interst();
      }
      if (this.checkSave) {
        this.get_save();
      }
      if (this.checkhome) {
        this.GetDataForFilter();
      }else{
        this.get_post(this.id)
      }
    });
  }
  saveV: any;
  place = 'hospital';
  save(id: any) {
    this.service.save(id).subscribe((res: any) => {
      if (this.checkInterest) {
        this.get_interst();
      }
      if (this.checkSave) {
        this.get_save();
      }
      if (this.checkhome) {
        this.GetDataForFilter();
      }
    });
  }
  showRes = true;
  sendResponse(res: any) {
    this.buyerService.send_schedule_res(this.id, res).subscribe((res: any) => {
      console.log(res);
      this.showRes = false;
    });
  }
  calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): any {
    return this.buyerService.calculateDistance(lat1, lon1, lat2, lon2);
  }
  infoWindowOpen = false;
  showcount: any;
  openInfoWindow(v: any) {
    this.showcount = v;
  }
  closeInfoWindow() {
    this.showcount = -1;
  }
  reason: any;
  des: any;
  reportProp(click: HTMLButtonElement) {
    console.log(this.reason, this.des);
    let data = {
      propertyId: this.id,
      reason: this.reason,
      description: this.des,
    };
    console.log(data);
    this.buyerService.report_prop(data).subscribe((res: any) => {
      console.log(res);
      click.click();
    });
  }
}
