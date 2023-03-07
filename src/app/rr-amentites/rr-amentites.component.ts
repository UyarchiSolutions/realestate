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
      console.log(this.id, 'this is id from  rd');

      this.updateform();
    });

    
  }
  submited=false;
  submit(){

    this.submited=true;

    var data ={
      furnishingStatus:this.myform.get('furnishingStatus')?.value,
      waterSupply:this.myform.get('waterSupply')?.value,
      bathRoomCount:this.myform.get('bathRoomCount')?.value,
      bathRoomType:this.myform.get('bathRoomType')?.value,
      toiletType:this.myform.get('toiletType')?.value,
      balconyCount:this.myform.get('balconyCount')?.value,
      Non_veg:this.myform.get('Non_veg')?.value,
      gate_Security:this.myform.get('gate_Security')?.value,
      parkingFacilities:this.myform.get('parkingFacilities')?.value,
      kitchen:this.myform.get('kitchen')?.value,
      hall_FLoor:this.myform.get('hall_FLoor')?.value,
      bedRoom:this.myform.get('bedRoom')?.value,
      bathRoom:this.myform.get('bathRoom')?.value,
      balCony:this.myform.get('balCony')?.value,
      Amenities:this.myform.get('Amenities')?.value,

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
        console.log(res.furnishingStatus,'value patched');

      this.myform.patchValue({
        furnishingStatus:res.furnishingStatus,
        waterSupply:res.waterSupply,
        bathRoomCount:res.bathRoomCount,
        bathRoomType:res.bathRoomType,
        toiletType:res.toiletType,
        balconyCount:res.balconyCount,
        Non_veg:res.Non_veg,
       gate_Security:res.gate_Security,
      parkingFacilities:res.parkingFacilities,
      kitchen:res.kitchen,
      hall_FLoor:res.hall_FLoor,
      bedRoom:res.bedRoom,
      bathRoom:res.bathRoom,
      balCony:res.balCony,
      Amenities:res.Amenities 

      })
      console.log(this.myform.value,"working fine")
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

  checked = false;
  checked1 = false;
  checked2 = false;
  checked3 = false;
  checked4 = false;
  checked5 = false;
  checked6 = false;
  checked7 = false;
  checked8 = false;
  checked9 = false;
  checked10 = false;
  checked11 = false;
  checked12 = false;
  checked13 = false;
  checked14 = false;
  checked15 = false;
  checked16 = false;
  checked17 = false;
  checked18 = false;
  checked19 = false;
  checked20 = false;
  checked21 = false;
  checked22 = false;
  checked23 = false;
  checked24 = false;
  checked25 = false;
  checked26 = false;
  checked27 = false;
  checked28 = false;
  checked29 = false;
  checked30 = false;
  checked31 = false;
  checked32 = false;
  checked33 = false;

  amenities: any = [];

  amtsub(){
    this.myform.get('Amenities').setValue(this.amenities);
  }
  updateAmit(v: any) {
    

    if (v.target.checked) {
      var val = v.target.value;
      this.amenities.push(val);
    } else {
      let index = this.amenities.findIndex((res: any) => res == v.target.value);
      if (index != -1) {
        this.amenities.splice(index, 1);
        
      }
    }

    console.log('updted',this.amenities);
  }
  deleteAmit(v:any){

    let index = this.amenities.indexOf(v);
    
    if (index > -1) {
    this.amenities.splice(index, 1);
    

    }
    console.log('deleted',this.amenities);
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
  }
  showModal = -1;

  show(index: number) {
    this.showModal = index;
  }
  close() {
    this.showModal = -1;
  }
  
}


