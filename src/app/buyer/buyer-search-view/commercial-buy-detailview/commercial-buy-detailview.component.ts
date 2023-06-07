import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PostPropertyService } from 'src/app/services/post-property.service';
import { BuyerService } from '../../buyer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-commercial-buy-detailview',
  templateUrl: './commercial-buy-detailview.component.html',
  styleUrls: ['./commercial-buy-detailview.component.css']
})
export class CommercialBuyDetailviewComponent implements OnInit {
  
 

    allFilter: any;
    constructor(private arouter:ActivatedRoute, private service: PostPropertyService, private router: Router
      ,private buyerService:BuyerService,private spinner: NgxSpinnerService
      ,private location_:Location){
  
    }
    id:any;
    data:any;
    index:any;
    page=0;
    range=20;
    Alldata:any;
    formatAdd:any;
    type: any;
     propertType: any;
     BHKType: any;
     rentDetails: any;
     furnishing: any;
     parking: any;
     rentprefer: any;
     propAge:any;
    areaArr:any;
     buildArr:any;
     amtArr:any;

     areaArrF: any;
     showOnlyType: any;
     furType: any;
     tentType: any;
     propageType: any;
     bathType: any;
     parkType: any;
     buildType: any;
     amtType: any;
     floorType: any;
     builtMin: any;
     builtMax: any;
     rentMin: any;
     rentMax: any;
     floordata: any;
     totalval: any;
     images: any;
     TotalData: any;
         
 hospitalIcon='./assets/images/hospital.png';
 cinemaIcon='./assets/images/cinema.png';
   hotelIcon='./assets/images/hotel.png';
   schoolIcon='./assets/images/school.png';
   transportIcon='./assets/images/transport.png';
  atmIcon='./assets/images/atm.png';
 shopIcon='./assets/images/shop.png';
 checkInterest:any;    
 history:any=[];
 imageLength:any;
 ngOnInit(): void {
      
  this.arouter.queryParamMap.subscribe((params: any) => {
    //console.log(params.params.formatAdd)
    if (params.params.formatAdd != null) {
      console.log(params);
      this.index = params.params['index'];
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
          this.buildType =
          params.params['buildingType'] != null && params.params['buildingType'] != ''
            ? params.params['buildingType'].split(',')
            : [];
        this.amtType =
          params.params['amenities'] != null && params.params['amenities'] != ''
            ? params.params['amenities'].split(',')
            : [];
            this.floorType =
            params.params['floor'] != null && params.params['floor'] != ''
              ? params.params['floor'].split(',')
              : [];
              this.range = params.params['range'];
              this.builtMin = params.params['buildupfrom'];
              this.builtMax = params.params['buildupto'];
              this.rentMin = params.params['priceFrom'];
              this.rentMax = params.params['priceTo'];
              this.page = params.params['page']
 } });
 this.index = Number(this.index);
 this.page = Number(this.page);
 this.range=Number(this.range);

 this.get_buyer()
 this.GetDataForFilter();
 

}
    get_post(id:any){
      this.service.formget1(id).subscribe((res:any)=>{
        console.log(res,res.intrest,'formget');
        this.data=res.values;
        this.interestV=res.intrest;
        this.saveV=res.savedStatus;
        this.showRes=res.show;
        this.lat=this.data.lat;
        this.long=this.data.long;
        this.history=res.relation;
         this.imageLength=this.data.image.length
        console.log(this.lat,'lat,',this.long,'long')
        this.get_landmarks_forbuyer('School');
      })
    }
    lat:any;
    long:any;
    landmarks:any=[];
    LMlat_long:any=[];
    icon:any='';
    radius=2000;
    get_landmarks_forbuyer(landmak:any){
      this.place=landmak
      this.landmarks=[];
      this.LMlat_long=[];
      console.log('empty',this.landmarks,this.LMlat_long)
      
      if(this.LMlat_long==''){
  
      this.icon= landmak =='Cinema' ? this.cinemaIcon:this.icon;
      this.icon= landmak=='Restaurant'?this.hotelIcon:this.icon;
      this.icon= landmak=='Hospital'?this.hospitalIcon:this.icon;
      this.icon= landmak=='School'?this.schoolIcon:this.icon;
      this.icon= landmak=='Transportation'?this.transportIcon:this.icon;
      this.icon= landmak=='atm'?this.atmIcon:this.icon;
      this.icon= landmak=='Grocery'?this.shopIcon:this.icon;
  
      console.log('inside if',this.landmarks,this.LMlat_long);
      this.buyerService.get_landmarks(this.lat,this.long,this.radius,this.place).subscribe((res:any)=>{
        this.LMlat_long=[];
        this.landmarks=[];
        this.landmarks=res.results;
        console.log(res,this.landmarks,'from landmaks');
        for(let i=0;i< this.landmarks.length;i++){
         
        
          this.LMlat_long.push({lat:this.landmarks[i].geometry.location.lat
            ,long:this.landmarks[i].geometry.location.lng,icon:this.landmarks[i].icon});
          
        
        }
        console.log(this.LMlat_long,'lat,long');
       
      })}
    }
  
    next() {
      this.index = this.index + 1;
      if (this.index > this.TotalData - 1) {
        this.index = 0;
      }
      this.GetDataForFilter();
      this.imageLength = '';
    }
    previous() {
      this.index = this.index - 1;
      if (this.index == -1) {
        this.index = this.TotalData - 1;
      }
  
      this.GetDataForFilter();
      this.imageLength = '';
    }
    GetDataForFilter() {
      let  Data = {
    
          HouseOrCommercialType:'Commercial',
          type: 'Sale',
          index:this.index,
          propertType: this.propertType,
          BHKType: this.BHKType,
          rentDetails: this.showOnlyType,
          furnishing: this.furType,
          parking: this.parkType,
          rentprefer: this.tentType,
          propAge: this.propageType,
          bathroom: this.bathType,
          buildingType:this.buildType,
          amenities:this.amtType,
          buildupfrom: this.builtMin,
          buildupto: this.builtMax,
          priceFrom: this.rentMin,
          priceTo: this.rentMax,
          floor:this.floordata,
          finish:true,
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

            this.id=res.nextData._id
            this.images = res.nextData.image;
            this.TotalData = res.values.length;
            this.get_post(this.id);
            // this.imageLength = this.data.image.length;
         
            // this.get_landmarks_forbuyer('School');
            // if(this.data.users){
            //   console.log('ok correct')
            //   this.interestV= this.data.users.status=='Intrested'?  true : false;
            // }
            // else{
            //   this.service.userStatusCheck(this.data._id).subscribe((res:any)=>{
            //     console.log('changed viewed')
            //     this.interestV= this.data.users.status=='Intrested'?  true : false;
            //   })
            // }
            
            // this.saveV=this.data.WhishList.indexOf(this.buyerId) > -1 ? true:false;
            // console.log(this.saveV,'save v')
            // console.log(this.data);
          
          });
     
       
      }
    backToSearch(){
      this.location_.back();
      // let sendData = {
      //   formatAdd: this.formatAdd,
      //   type: this.type,
      //   propertType: this.propertType,
      //   BHKType: this.BHKType,
      //   rentDetails: this.rentDetails,
      //   furnishing: this.furnishing,
      //   parking: this.parking,
      //   rentprefer: this.rentprefer,
      //   propAge: this.propAge,
      //   area:this.areaArr,
      //   buildingType:this.buildArr,
      //   amenities:this.amtArr
      // };
      // console.log(sendData,'data back to home')
      // const query = new URLSearchParams(sendData).toString();
      // this.router.navigateByUrl('/buyer-commercial-buy-view?'+ query);
    }
    buyerId:any;
    get_buyer(){
      this.buyerService.myAcount().subscribe((res:any)=>{
        this.buyerId = res._id;
        console.log(this.buyerId,'buyerid')
      })
    }
    
    interestV:any;
    interest(id:any){
     
      this.service.interest(id).subscribe((res:any)=>{
        console.log(res,'give interest');
       this.GetDataForFilter()
      });
    }
    saveV:any;
    save(id:any){
  
      this.service.save(id).subscribe((res:any)=>{
        console.log(res,'save');
       this.GetDataForFilter()
      })
    }
   
    
    place='hospital';
    showRes=true;
    sendResponse(res:any){
     this.buyerService.send_schedule_res(this.id,res).subscribe((res:any)=>{
       console.log(res)
       this.showRes=false
     })
    }
  
  }

