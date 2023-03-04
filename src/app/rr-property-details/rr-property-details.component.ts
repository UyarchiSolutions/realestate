import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-rr-property-details',
  templateUrl: './rr-property-details.component.html',
  styleUrls: ['./rr-property-details.component.css']
})
export class RrPropertyDetailsComponent  implements OnInit{

  numarray: any=[];
  id! :any;
  
  propform:any = this.fb.group({
  
    BuildupArea : new FormControl('',Validators.required),
    Description : new FormControl('',Validators.required)
   
  });

  constructor
  (private fb:FormBuilder,private arouter: ActivatedRoute,
    private service:PostPropertyService,
    private router:Router){


  }
  toggleState = false;
  ngOnInit(): void {

    this.createnumfloor();
    console.log(this.numarray);
   
    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      console.log(this.id,"this is id from sp");
      this.updateform();
    }
  );

  }
  show(){
    this.toggleState = !this.toggleState
  }
  select_property(e:any){
    console.log(e)
    this.propform.get('propertytype').setValue(e)
  

  }
  propsub(){
    var data={
      propertType:this.pv,
      noOfFloor:this.tfv,
      floorNo:this.ofv,
      ageOfBuilding:this.aop,
      BHKType:this.bhkv,
      BuildedSize:this.propform.get('BuildupArea')?.value,
      buildingDirection:this.fdv,
      RentPrefer:this.rpv,
      discription:this.propform.get('Description')?.value
     }
     console.log(data);
     this.service.formput(this.id,data).subscribe((res:any)=>{

      var postdata ={
        id:res._id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-location-details?' + queryString);
      console.log(res);
     })

  }
  createnumfloor(){

    for (var i = 1; i <= 99; i++) {
      this.numarray.push(i);
   }
   
  }
  updateform(){

    this.service.formget(this.id).subscribe((res:any)=>{

      this.propform.patchValue({
        propertytype:res.propertType,
        totalfloor:res.noOfFloor,
        onfloor:res.floorNo,
        AgeofProperty:res.ageOfBuilding,
        BHKType:res.BHKType,
        BuildupArea:res.BuildedSize,
        RentPreference:res.RentPrefer,
        Description:res.discription,
        FacingDirection:res.buildingDirection
      })
    })

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
  nave:boolean=false;
  nav(){
    
    this.nave=!this.nave;
  }

  pv:any;
  propertyv(a:any){
    this.pv = a;
    console.log(this.pv);
  }

  tfv:any;
  totalfloorforon!:any;

  groundFloorv(a:any,total:any){

    this.tfv = a;
    this.totalfloorforon = total;
    console.log(this.tfv,this.totalfloorforon);

    
    this.floorarraygenerate();
   console.log(this.floorarray);

   
  }

  floorarray: any=[];

  floorarraygenerate(){

      
    for (var i = 1; i <= this.totalfloorforon; i++) {
      this.floorarray.push(i);
   }
  }
  ofv:any;
  onFloorv(a:any){

    this.ofv = a;
    console.log(this.ofv);
   
  }
  aop:any;
  ageofpropv(a:any){

    this.aop =a;
    console.log(this.aop);
  }

  bhkv:any;

  bhktyev(a:any){

    this.bhkv =a;
    console.log(this.bhkv);
  }
  rpv:any;

  rentprefv(a:any){

    this.rpv =a;
    console.log(this.rpv);
  }

  fdv:any;

  faceDirectv(a:any){

    this.fdv =a;
    console.log(this.fdv);
  }

}
