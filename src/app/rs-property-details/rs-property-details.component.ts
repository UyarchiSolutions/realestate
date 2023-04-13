import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-rs-property-details',
  templateUrl: './rs-property-details.component.html',
  styleUrls: ['./rs-property-details.component.css']
})
export class RsPropertyDetailsComponent implements OnInit {

  numarray: any = [];
  id!: any;
  toggleState = false;
  myarray: any = [];
  data:any;
  submitted= false;
  isSaved=false;

  propsform: any = this.fb.group({
    BuildupArea: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
    UDSlandsize: new FormControl('', Validators.required),
  });

  constructor(
    private fb: FormBuilder,
    private arouter: ActivatedRoute,
    private service: PostPropertyService,
    private router: Router
  ) {}
 


  ngOnInit(): void {
    for (let i = 1; i < 99; i++) {
      this.myarray.push(i);
    
    }

    this.arouter.queryParams.subscribe((params) => {

      this.id = params['id'];
      console.log(this.id, 'this is id from start posting');

      this.updateform();
    });
    
    this.service.formget(this.id).subscribe((res:any)=>{

      this.data=res;
    })
    console.log(this.isSaved);
  }
  arr: any = [];

  show() {
    this.toggleState = !this.toggleState;
  }
  select_property(e: any) {
    console.log(e);
    this.propsform.get('propertytype').setValue(e);
  }
  routerlink='residential-sale-property';
  propsub() {
    
    this.submitted = this.data.propertType !=  null ? false : true;

    // this.submitted = true;
    var Checkdata = {
      propertType: this.pv,
      noOfFloor: this.tfv,
      floorNo: this.ofv,
      ageOfBuilding: this.aop,
      BHKType: this.bhkv,
      BuildedSize: this.propsform.get('BuildupArea')?.value,
      facingDirection: this.fdv,
      ownerType:this.ost,
      landSize:this.propsform.get('UDSlandsize')?.value,
     
    };
    console.log(Checkdata)
    if(this.allKeysHaveValue(Checkdata) || this.data.propertType !=  null ){ 
    var data = {
      propertType: this.pv,
      noOfFloor: this.tfv,
      floorNo: this.ofv,
      ageOfBuilding: this.aop,
      BHKType: this.bhkv,
      BuildedSize: this.propsform.get('BuildupArea')?.value,
      facingDirection: this.fdv,
      discription: this.propsform.get('Description')?.value,
      ownerType:this.ost,
      landSize:this.propsform.get('UDSlandsize')?.value,
      routeLink:this.routerlink,
      BhkCount:this.BhkCount,
      floorCount:this.FloorCount
    };
    
    console.log(data);
    console.log('will upload ')
    this.service.formput(this.id, data).subscribe((res: any) => {

    
      var postdata = {
        id: res._id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/residential-sale-location-details?' + queryString
      );
      console.log(res);
    });
  
  }
  
  
  }
  allKeysHaveValue(obj: any) {
    const keys = Object.keys(obj);
    let allKeysHaveValue = true;

    keys.forEach((key) => {
    if (!obj.hasOwnProperty(key) || !obj[key]) {
      console.log(obj.hasOwnProperty(key),obj[key])
      allKeysHaveValue = false;
    }
  });
  console.log(allKeysHaveValue);
  return allKeysHaveValue;
  
}

  updateform() {
    this.service.formget(this.id).subscribe((res: any) => {
      this.propsform.patchValue({
        propertytype: res.propertType,
        totalfloor: res.noOfFloor,
        onfloor: res.floorNo,
        AgeofProperty: res.ageOfBuilding,
        BHKType: res.BHKType,
        BuildupArea: res.BuildedSize,
        RentPreference: res.RentPrefer,
        Description: res.discription,
        facingDirection: res.facingDirection,
        UDSlandsize:res.landSize,
      }); console.log(res.facingDirection);
    });
  }
  switchbutton(){
    this.isSaved= true;
  }
  routetopreview(){
    var data = {
      propertType: this.pv,
      noOfFloor: this.tfv,
      floorNo: this.ofv,
      ageOfBuilding: this.aop,
      BHKType: this.bhkv,
      BuildedSize: this.propsform.get('BuildupArea')?.value,
      facingDirection: this.fdv,
      RentPrefer: this.rpv,
      discription: this.propsform.get('Description')?.value,
      BhkCount:this.BhkCount,
      floorCount:this.FloorCount
    };
    console.log(data);
    this.service.formput(this.id, data).subscribe((res: any) => {
      console.log('updated')
    })

    var postdata = {
      id: this.id,
    };
    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/residential-sale-preview?' + queryString);

    this.service.formget(this.id).subscribe((res: any) => 
    {location.reload();});
    
  }

  nave: boolean = false;
  nav() {
    this.nave = !this.nave;
  }

  pv:any;
  propertyv(a: any) {
    this.pv = a;
    console.log(this.pv);
  }
  ost:any;
  ownerShipv(a:any){
    this.ost=a;
    
  }

  tfv: any;
  totalfloorforon!: any;

  groundFloorv(total: any) {
    if (total == 0) {
      this.tfv = 'Ground Floor';
    } else {
      this.tfv = total + ' Floors';
    }
    this.floorarraygenerate(total);
  }

  floorarray: any = [];

  floorarraygenerate(val:any) {
    this.numarray = [];
    for (let i = 1; i <= val; i++) {
      this.numarray.push(i);
    }
    console.log( this.numarray )
  }

  ofv: any;
  FloorCount:any;

  onFloorv(a: any,count:any) {
    if ('Groud Floor') {
      this.ofv = 'Ground Floor';
      this.FloorCount=count;
    }
 if (a != 'Groud Floor'){
    this.ofv = a + ' Floors';
    this.FloorCount=count;
    console.log(this.ofv);
 }
  }
  aop: any;
  ageofpropv(a: any) {
    this.aop = a;
    console.log(this.aop);
  }

  bhkv: any;
  BhkCount:any;
  bhktyev(a: any,count:any) {
    this.bhkv = a;
    console.log(this.bhkv);
    this.BhkCount = count;
  }
  rpv: any;

  rentprefv(a: any) {
    this.rpv = a;
    console.log(this.rpv);
  }

  fdv: any;

  faceDirectv(a: any) {
    this.fdv = a;
    console.log(this.fdv);
  }
  back(count:any){
    if(count == 0){
      var data ={
       id:this.id
     }
     var queryString = new URLSearchParams(data).toString();
     this.router.navigateByUrl('/residential-sale-property?' + queryString);

     this.service.formget(this.id).subscribe((res:any)=>{
     

     })
    }
    if(count == 1){
      var data ={
       id:this.id
     }
     var queryString = new URLSearchParams(data).toString();
     this.router.navigateByUrl('/residential-sale-location-details?' + queryString);

     this.service.formget(this.id).subscribe((res:any)=>{
     })
    }
    if(count == 2){
      var data ={
       id:this.id
     }
     var queryString = new URLSearchParams(data).toString();
     this.router.navigateByUrl('/residential-sale-price-details?' + queryString);

     this.service.formget(this.id).subscribe((res:any)=>{
     })
    }
    if(count == 3){
      var data ={
       id:this.id
     }
     var queryString = new URLSearchParams(data).toString();
     this.router.navigateByUrl('/residential-sale-amentites?' + queryString);

     this.service.formget(this.id).subscribe((res:any)=>{
     })
    }
    if(count == 4){
      var postdata ={
        id:this.id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residential-sale-gallery?' + queryString);
      this.service.formget(this.id).subscribe((res:any)=>{
      })
    }
    if(count == 5){
      var postdata ={
        id:this.id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residential-sale-add-details?' + queryString);
      this.service.formget(this.id).subscribe((res:any)=>{
      })
    }
  }
}


