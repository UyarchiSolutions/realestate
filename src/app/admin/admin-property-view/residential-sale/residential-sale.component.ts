import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-residential-sale',
  templateUrl: './residential-sale.component.html',
  styleUrls: ['./residential-sale.component.css']
})
export class ResidentialSaleComponent {



  constructor(
    private arouter: ActivatedRoute,
    private service: AdminService,
    private router: Router,
  
    ) {}
  id: any;
  data: any=[]
  images: any;
 
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

  checkSave:any
  checkNotification:any;
  checkhome!:string;
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((params: any) => {
    this.id=params['id']
    });
  this.get_post(this.id) 
 
    
  }

  TotalData: any;
 

 
  imgSliderCheker: any;
  imgslider(a: any) {
    this.imgSliderCheker = a;
  }
  imgSLnonw() {
    this.imgSliderCheker = '';
  }


  get_post(id:any){
    this.service.get_property(id).subscribe((res:any)=>{
      console.log(res,res.intrest,'formget');
      this.data=res;
      
      this.lat=this.data.lat;
      this.long=this.data.long;
     
       this.imageLength=this.data.image.length
    
      this.get_landmarks_forbuyer('School');
    })
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
      this.icon = landmak == 'Cinema' ? this.cinemaIcon : this.icon;
      this.icon = landmak == 'Restaurant' ? this.hotelIcon : this.icon;
      this.icon = landmak == 'Hospital' ? this.hospitalIcon : this.icon;
      this.icon = landmak == 'School' ? this.schoolIcon : this.icon;
      this.icon = landmak == 'Transportation' ? this.transportIcon : this.icon;
      this.icon = landmak == 'atm' ? this.atmIcon : this.icon;
      this.icon = landmak == 'Grocery' ? this.shopIcon : this.icon;

      // console.log('inside if',this.landmarks,this.LMlat_long);
      this.service
        .get_landmarks(this.lat, this.long, this.radius, this.place)
        .subscribe((res: any) => {
          this.LMlat_long = [];
          this.landmarks = [];
          this.landmarks = res.results;
          // console.log(res,this.landmarks,'from landmaks');
          for (let i = 0; i < this.landmarks.length; i++) {
            this.LMlat_long.push({lat:this.landmarks[i].geometry.location.lat
              ,long:this.landmarks[i].geometry.location.lng,icon:this.landmarks[i].icon
            ,name:this.landmarks[i].name,add:this.landmarks[i].vicinity
          });
          }
          // console.log(this.LMlat_long,'lat,long');
        });
    }
  }


  backToSearch() {
    window.history.back();
   
    
  }


  saveV: any;
  place = 'hospital';

  calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): any {
   return  this.service.calculateDistance(lat1,lon1,lat2,lon2)
  }
  infoWindowOpen = false;
  showcount:any;
  openInfoWindow(v:any) {
   this.showcount =v
  }
  closeInfoWindow(){
    this.showcount=-1
  }

  }
