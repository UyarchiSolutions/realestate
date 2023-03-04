import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-rr-amenities',
  templateUrl: './rr-amentites.component.html',
  styleUrls: ['./rr-amentites.component.css']
})
export class RrAmentitesComponent implements OnInit {

  id:any;

  constructor(private fb:FormBuilder,private arouter: ActivatedRoute,
    private service:PostPropertyService,
    private router:Router){

  }
  ngOnInit(): void {
    
    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      console.log(this.id,"this is id from  rd");
      
    });

  }
  fsv:any;

  furstav(a:any){

    this.fsv = a;
    console.log(this.fsv);
  }
  wsv:any;

  wassupv(a:any){

    this.wsv = a;
    console.log(this.wsv);
  }
  brv:any;

  bathrv(a:any){

    this.brv = a;
    console.log(this.brv);
  }
  btv:any;
  bathTv(a:any){

    this.btv = a;
    console.log(this.btv);
  }
  ttv:any;
  toilTv(a:any){

    this.ttv = a;
    console.log(this.ttv);
  }
  bv:any;
  balTv(a:any){

    this.bv = a;
    console.log(this.bv);
  }
  pv:any;
  parkTv(a:any){

    this.pv = a;
    console.log(this.pv);
  }
  kv:any;
  floor(a:any){

    this.kv = a;
    console.log(this.kv);
  }
  hfv:any;
  bev:any;
  barv:any;
  balv:any;
    floor1(a:any){

    this.hfv = a;
    console.log(this.hfv);
  }
    floor2(a:any){

    this.bev = a;
    console.log(this.bev);
  }
    floor3(a:any){

    this.barv = a;
    console.log(this.barv);
  }
    floor4(a:any){

    this.balv = a;
    console.log(this.balv);
  }

  back(count:any){
    if(count == 0){
      var data ={
       id:this.id
     }
     var queryString = new URLSearchParams(data).toString();
     this.router.navigateByUrl('/residential-rent?' + queryString);

     this.service.formget(this.id).subscribe((res:any)=>{
     

     })
    }
    if(count == 1){
      var data ={
       id:this.id
     }
     var queryString = new URLSearchParams(data).toString();
     this.router.navigateByUrl('/residentaial-rent-location-details?' + queryString);

     this.service.formget(this.id).subscribe((res:any)=>{
     })
    }
    if(count == 2){
      var data ={
       id:this.id
     }
     var queryString = new URLSearchParams(data).toString();
     this.router.navigateByUrl('/residentaial-rent-rental-details?' + queryString);

     this.service.formget(this.id).subscribe((res:any)=>{
     })
    }
    if(count == 3){
      var data ={
       id:this.id
     }
     var queryString = new URLSearchParams(data).toString();
     this.router.navigateByUrl('/residentaial-rent-amentites?' + queryString);

     this.service.formget(this.id).subscribe((res:any)=>{
     })
    }
  }
  showModal=-1;

  show(index: number){
    this.showModal=index;
  }
  close(){
    this.showModal=-1;
  }

}
