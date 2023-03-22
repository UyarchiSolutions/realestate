import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-rr-amenities',
  templateUrl: './rr-amentites.component.html',
  styleUrls: ['./rr-amentites.component.css'],
})
export class RrAmentitesComponent implements OnInit {
  id: any;
  data:any;
  final:any;

  constructor(
    private fb: FormBuilder,
    private arouter: ActivatedRoute,
    private service: PostPropertyService,
    private router: Router
  ) {

  }
  myform:any = this.fb.group({

    furnishingStatus:new FormControl(),
    waterSupply:new FormControl(),
    bathRoomCount:new FormControl(),
    bathRoomType:new FormControl(),
    toiletType:new FormControl(),
    balconyCount:new FormControl(),
    Non_veg:new FormControl(),
    gate_Security:new FormControl(),
    parkingFacilities:new FormControl(),
    kitchen:new FormControl(),
    hall_FLoor:new FormControl(),
    bedRoom:new FormControl(),
    bathRoom:new FormControl(),
    balCony:new FormControl(),
    Amenities :new FormControl()
  })
  
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((params) => {
      console.log(params);
      this.id = params['id'];
     

     
    
    });
    this.updateform();

   
    
  }
  routerlink='residentaial-rent-amentites';
  submited=false;
  submit(){

    this.submited=true;

    var data ={
      furnishingStatus:this.fsv,
      waterSupply:this.wsv,
      bathRoomCount:this.brv,
      bathRoomType:this.btv,
      toiletType:this.ttv,
      balconyCount:this.bv,
      Non_veg:this.myform.get('Non_veg')?.value,
      gate_Security: this.myform.get('gate_Security')?.value,
      parkingFacilities:this.pv,
      kitchen:this.kv,
      hall_FLoor:this.hfv,
      bedRoom:this.bev,
      bathRoom:this.barv,
      balCony:this.balv,
      Amenities:this.SelectedAmenities,
      routeLink:this.routerlink

    }
    this.service.formput(this.id,data).subscribe((res:any)=>{

      console.log(res);
      var postdata ={
        id:res._id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-gallery?' + queryString);
      console.log(res);
     
     })
    


  }
  updateform(){

    this.service.formget(this.id).subscribe((res:any)=>{
        console.log(res,453453)
        this.data=res;
        console.log(res.final)
        this.final=res.final;
        this.SelectedAmenities= res.Amenities;
        if(res.final){
          console.log('dsfsdf')
          this.showami =true;
        }
      this.myform.patchValue({
     
        Non_veg:res.Non_veg,
       gate_Security:res.gate_Security
       
      })
    
      
    })
   
  

  }
  fsv: any;

  furstav(a: any) {
    this.fsv = a;
    console.log(this.fsv);
    this.myform.get('furnishingStatus').setValue(a);
  }
  wsv: any;

  wassupv(a: any) {
    this.wsv = a;
    console.log(this.wsv);
    this.myform.get('waterSupply').setValue(a);
  }
  brv: any;

  bathrv(a: any) {
    this.brv = a;
    console.log(this.brv);
    this.myform.get('bathRoomCount').setValue(a);
  }
  btv: any;
  bathTv(a: any) {
    this.btv = a;
    console.log(this.btv);
    this.myform.get('bathRoomType').setValue(a);
  }
  ttv: any;
  toilTv(a: any) {
    this.ttv = a;
    console.log(this.ttv);
    this.myform.get('toiletType').setValue(a);
  }
  bv: any;
  balTv(a: any) {
    this.bv = a;
    console.log(this.bv);
    this.myform.get('balconyCount').setValue(a);
  }
  pv: any;
  parkTv(a: any) {
    this.pv = a;
    console.log(this.pv);
    this.myform.get('parkingFacilities').setValue(a);
  }
  kv: any;
  floor(a: any) {
    this.kv = a;
    console.log(this.kv);
    this.myform.get('kitchen').setValue(a);
  }
  hfv: any;
  bev: any;
  barv: any;
  balv: any;
  floor1(a: any) {
    this.hfv = a;
    console.log(this.hfv);
    this.myform.get('hall_FLoor').setValue(a);
  }
  floor2(a: any) {
    this.bev = a;
  
    console.log(this.bev);
    this.myform.get('bedRoom').setValue(a);
  }
  floor3(a: any) {
    this.barv = a;
    console.log(this.barv);
    this.myform.get('bathRoom').setValue(a);
  }
  floor4(a: any) {
    this.balv = a;
    console.log(this.balv);
    this.myform.get('balCony').setValue(a);
  }
  nv:any;
  nvallowed(a:any){

    this.nv=a;
    this.myform.get('Non_veg').setValue(a);

  }
  gs:any;
  gsallowed(a:any){

    this.gs=a;
    this.myform.get('gate_Security').setValue(a);

  }
  SelectedAmenities: any = [];

  amtsub(){
    this.myform.get('Amenities').setValue(this.SelectedAmenities);
  }
  updateAmit(v: any) {
    
    if (v.target.checked) {
      var val = v.target.value;
      this.SelectedAmenities.push(val);
    } else {
      let index = this.SelectedAmenities.findIndex((res: any) => res == v.target.value);
      if (index != -1) {
        this.SelectedAmenities.splice(index, 1);
      }
    }

    console.log('updted',this.SelectedAmenities);
  }

  deleteAmit(v:any){

    let index = this.SelectedAmenities.indexOf(v);
    
    if (index > -1) {
    this.SelectedAmenities.splice(index, 1);
    

    }
    console.log('deleted',this.SelectedAmenities);
  }

  is_chckked(val:any){

      let index=this.SelectedAmenities.findIndex((a:any)=>a==val);
      if(index==-1){
        return false;
      }
      else{
        return true;
      }
  }

  Amenities:any=
    ['Club House','Badminton Court','Health Facilities','Security','Basket Ball Court'
     ,'Recreation Facilities','24Hr Backup','Play Area','WIFI','Rain Water Harvesting',
    'Swimming Pool','Broadband Internet','Maintenance Staff','Tennis Court',
  'Temple','Intercom','Gymnasium','Lift','Garden','Indoor Games','Air Conditioner',
   'Community Hall','Bank/Atm','Electricity Full','Cafeteria','Servant room',
  'Electricity Partial','Library','Gas Pipeline','House keeping','Fire safety','Park',
'Visitor Parking','Shopping center','Sewage Treatment Plant'];
   
  routetopreview(){
    var data ={
      furnishingStatus:this.fsv,
      waterSupply:this.wsv,
      bathRoomCount:this.brv,
      bathRoomType:this.btv,
      toiletType:this.ttv,
      balconyCount:this.bv,
      Non_veg:this.myform.get('Non_veg')?.value,
      gate_Security: this.myform.get('gate_Security')?.value,
      parkingFacilities:this.pv,
      kitchen:this.kv,
      hall_FLoor:this.hfv,
      bedRoom:this.bev,
      bathRoom:this.barv,
      balCony:this.balv,
      Amenities:this.SelectedAmenities,

    }
    this.service.formput(this.id,data).subscribe((res:any)=>{})
    var postdata = {
      id: this.id,
    };
    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/residentaial-rent-preview?' + queryString);

    this.service.formget(this.id).subscribe((res: any) => {
      location.reload();
    });
    
  }

  back(count: any) {
    if (count == 0) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/residential-rent?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 1) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl(
        '/residentaial-rent-location-details?' + queryString
      );

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 2) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl(
        '/residentaial-rent-rental-details?' + queryString
      );

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 3) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/residentaial-rent-amentites?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if(count == 4){
      var postdata ={
        id:this.id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-gallery?' + queryString);
      this.service.formget(this.id).subscribe((res:any)=>{
      })
    }
    if(count == 5){
      var postdata ={
        id:this.id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-details?' + queryString);
      this.service.formget(this.id).subscribe((res:any)=>{
      })
    }
  }
  showModal = -1;
  showami=false;
  amshow= false;
  show(index: number) {
    this.showModal = index;
    this.showami =true;
  }
  close() {
    this.showModal = -1;
    this.amshow=true;
  }
  // amtie: any = [
  //   {name:'Club House',issubmit:false},
  //   {name:'Batmition Cort',issubmit:false},
  //   {name:'Security', issubmit:false}
  // ]
  // amit:any=[];
  // addamit(e:any,a:any ){
    
  //   console.log(a);
  //   if (a == 'true') {
  //     var val = e;
  //     this.amit.push(val);
  //   } else {
  //     let index = this.amit.findIndex((res: any) => res == e.name);
  //     if (index != -1) {
  //       this.amit.splice(index, 1);
        
  //     }
  //   }


  // }
}


