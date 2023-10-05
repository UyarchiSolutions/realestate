import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-rr-property-details',
  templateUrl: './rr-property-details.component.html',
  styleUrls: ['./rr-property-details.component.css'],
})
export class RrPropertyDetailsComponent implements OnInit {
  numarray: any = [];
  id!: any;
  toggleState = false;
  myarray: any = [];
  data:any=[];
  submitted= false;
  isSaved=false;
  isDropdownOpen: boolean = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  propform: any = this.fb.group({
    BuildupArea: new FormControl('', Validators.required),
    Description: new FormControl(''),
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
      console.log(params);
      this.id = params['id'];
      console.log(this.id, 'this is id from sp');
      this.updateform();
    });
    
    this.service.formget(this.id).subscribe((res:any)=>{

      this.data=res;
    })


  }
  arr: any = [];

  show() {
    this.toggleState = !this.toggleState;
  }
  select_property(e: any) {
    console.log(e);
    this.propform.get('propertytype').setValue(e);
  }
  routerlink ='/start-posting/residential-rent';
  propsub() {
    
    this.pv= this.pv==null ? this.data.propertType : this.pv;
    this.tfv= this.tfv==null ? this.data.noOfFloor : this.tfv;
    this.ofv =this.ofv==null? this.data.floorNo : this.ofv;
    this.aop=  this.aop==null? this.data.ageOfBuilding : this.aop;
    this.bhkv = this.bhkv==null? this.data.BHKType : this.bhkv;
    this.fdv=  this.fdv==null ? this.data.facingDirection : this.fdv;
    this.rpv= this.rpv==null ? this.data.RentPrefer : this.rpv;



    this.submitted = true;
    var Checkdata = {
      propertType: this.pv,
      noOfFloor: this.tfv,
      floorNo: this.ofv,
      ageOfBuilding: this.aop,
      BHKType: this.bhkv,
      BuildedSize: this.propform.get('BuildupArea')?.value ,
      facingDirection: this.fdv ,
      RentPrefer: this.rpv,
      routeLink:this.routerlink
    };
    console.log(Checkdata,'patch waiting')
    
   if(this.allKeysHaveValue(Checkdata) ){ 
   
    console.log(Checkdata,'uploaded');

    var data = {
      propertType: this.pv,
      noOfFloor: this.tfv,
      floorNo: this.ofv,
      ageOfBuilding: this.aop,
      BHKType: this.bhkv,
      BuildedSize: this.propform.get('BuildupArea')?.value,
      facingDirection: this.fdv,
      RentPrefer: this.rpv,
      discription: this.propform.get('Description')?.value,
      routeLink:this.routerlink,
      BhkCount:this.BhkCount,
      floorCount:this.FloorCount
    };

    this.service.formput(this.id, data).subscribe((res: any) => {
      var postdata = {
        id: res._id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/start-posting/residentaial-rent-location-details?' + queryString
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
      this.pv= res.propertType,
      this.tfv= res.noOfFloor,
      this.ofv= res.floorNo,
      this.aop=res.ageOfBuilding,
      this.bhkv= res.BHKType,
      this.rpv= res.RentPrefer,
      this.fdv= res.facingDirection,
      this.propform.patchValue({
       
        BuildupArea: res.BuildedSize,
        
        Description: res.discription,
        
      }); console.log(res.facingDirection);
    });
  }

  routetopreview(){
   
    this.submitted = true;
    var Checkdata = {
      propertType: this.pv,
      noOfFloor: this.tfv,
      floorNo: this.ofv,
      ageOfBuilding: this.aop,
      BHKType: this.bhkv,
      BuildedSize: this.propform.get('BuildupArea')?.value ,
      facingDirection: this.fdv ,
      RentPrefer: this.rpv,
      routeLink:this.routerlink
    };
    console.log(Checkdata,'patch waiting')
    
   if(this.allKeysHaveValue(Checkdata) ){ 
    var data = {
      propertType: this.pv,
      noOfFloor: this.tfv,
      floorNo: this.ofv,
      ageOfBuilding: this.aop,
      BHKType: this.bhkv,
      BuildedSize: this.propform.get('BuildupArea')?.value,
      facingDirection: this.fdv,
      RentPrefer: this.rpv,
      discription: this.propform.get('Description')?.value,
      BhkCount:this.BhkCount,
      floorCount:this.FloorCount
    };
    console.log(data);
    this.service.formput(this.id, data).subscribe((res: any) => {
      this.submitted = false;
      console.log('updated')
    })

    var postdata = {
      id: this.id,
    };
    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/start-posting/residentaial-rent-preview?' + queryString);

    this.service.formget(this.id).subscribe((res: any) => 
    {location.reload();});
   }
  }
  back(count: any) {
    if (count == 0) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/start-posting/residential-rent?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 1) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl(
        '/start-posting/residentaial-rent-location-details?' + queryString
      );

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 2) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl(
        '/start-posting/residentaial-rent-rental-details?' + queryString
      );

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 3) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/start-posting/residentaial-rent-amentites?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 4) {
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/residentaial-rent-gallery?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 5) {
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/residentaial-rent-details?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {});
    }
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

  tfv: any;
  totalfloorforon!: any;

  groundFloorv(total: any) {
    this.ofv=null
    
    if(typeof(total) == 'number') {
      this.tfv = total + ' Floors';
    }else{
      this.tfv = total;
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
   this.toggleDropdown()
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
  routeToProp(){
    this.router.navigateByUrl('/owner')
  }
  changeps(){
    this.router.navigateByUrl('/changepassword-seller')
  }
  logOut(){
    sessionStorage.clear();
    localStorage.clear();
    Cookie.delete('tokens');
    this.router.navigateByUrl('/');
  }
}
