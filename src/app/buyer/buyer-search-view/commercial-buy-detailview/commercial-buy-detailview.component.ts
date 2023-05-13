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
         
          hospitalIcon='./assets/images/hospital.png';
          cinemaIcon='./assets/images/cinema.png';
          hotelIcon='./assets/images/hotel.png';
          schoolIcon='./assets/images/school.png';
          transportIcon='./assets/images/transport.png';
          atmIcon='./assets/images/atm.png';
          shopIcon='./assets/images/shop.png';
          checkInterest:any;    
  
    ngOnInit(): void {
      
      this.arouter.queryParams.subscribe((params) => {
        console.log(params);
        this.id = params['id'];
        this.index=params['index'];
        this.checkInterest=params['interested'];
        //to return
        this.formatAdd=params['formatAdd'];
        this.type=params['type'];
        this.BHKType=params['BHKType'];
        this.rentDetails=params['rentDetails'];
        this.furnishing=params['furnishing'];
        this.parking=params['parking'];
        this.rentprefer=params['rentprefer'];
        this.propAge=params['propAge'];
        this.propertType=params['propertType'];
        this.buildArr=params['buildingType']
        this.amtArr=params['amenities']
        this.areaArr=params['area']
      });
      this.index =Number(this.index) ;
   
  
      this.allFilter =this.service.Alldata;
  
      console.log(this.allFilter,'All filters');
  
      this.Alldata=this.service.get_ALLres();
  
      console.log(this.Alldata,'All data');
      this.service.formget1(this.id).subscribe((res:any)=>{
        console.log(res,res.intrest,'formget');
        this.data=res.values;
        this.interestV=res.intrest;
        this.saveV=res.savedStatus;
        this.lat=this.data.lat;
        this.long=this.data.long;
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
  
    next(){
      this.index= this.index+1;
      console.log(this.index);
      console.log(this.Alldata,this.Alldata.length)
      if(this.index+1 > this.Alldata.length ){
       
        this.index = 0;
      }
      console.log(this.index,'after if');
      this.id = this.Alldata[this.index]._id;
      
      this.service.formget1(this.id).subscribe((res:any)=>{
        console.log(res);
        this.data=res.values;
      })
    }
    previous(){
      
      this.index= this.index - 1;
      console.log(this.index);
      if(this.index == -1){
        let length = this.Alldata.length - 1
        this.index = length
      }
      console.log(this.index,'after if');
      this.id = this.Alldata[this.index]._id;
      this.service.formget1(this.id).subscribe((res:any)=>{
        console.log(res);
        this.data=res.values;
      })
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
    
    interestV:any;
    interest(id:any){
     
      this.service.interest(id).subscribe((res:any)=>{
        console.log(res);
       
      });
      this.service.formget1(this.id).subscribe((res:any)=>{
        console.log(res,res.intrest);
        this.data=res.values;
        this.interestV=res.intrest;
      })
  
    }
    saveV:any;
    save(id:any){
  
      this.service.save(id).subscribe((res:any)=>{
        console.log(res,'save');
      })
      this.service.formget1(this.id).subscribe((res:any)=>{
        console.log(res,res.intrest);
        this.data=res.values;
        this.saveV=res.savedStatus;
      })
      
    }
   
    
    place='hospital';
  
  }

