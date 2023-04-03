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
  data:any;
  submitted= false;
  isSaved=false;

  propform: any = this.fb.group({
    BuildupArea: new FormControl('', Validators.required),
    Description: new FormControl('', Validators.required),
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
  routerlink ='residential-rent';
  propsub() {
    
    this.submitted = true;
    var Checkdata = {
      propertType: this.pv,
      noOfFloor: this.tfv,
      floorNo: this.ofv,
      ageOfBuilding: this.aop,
      BHKType: this.bhkv,
      BuildedSize: this.propform.get('BuildupArea')?.value,
      facingDirection: this.fdv,
      RentPrefer: this.rpv,
      routeLink:this.routerlink
    };
    
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
      routeLink:this.routerlink
    };

    this.service.formput(this.id, data).subscribe((res: any) => {
      var postdata = {
        id: res._id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/residentaial-rent-location-details?' + queryString
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
      this.propform.patchValue({
        propertytype: res.propertType,
        totalfloor: res.noOfFloor,
        onfloor: res.floorNo,
        AgeofProperty: res.ageOfBuilding,
        BHKType: res.BHKType,
        BuildupArea: res.BuildedSize,
        RentPreference: res.RentPrefer,
        Description: res.discription,
        facingDirection: res.facingDirection,
      }); console.log(res.facingDirection);
    });
  }

  routetopreview(){
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
    };
    console.log(data);
    this.service.formput(this.id, data).subscribe((res: any) => {
      console.log('updated')
    })

    var postdata = {
      id: this.id,
    };
    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/residentaial-rent-preview?' + queryString);

    this.service.formget(this.id).subscribe((res: any) => 
    {location.reload();});
    
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
    if (count == 4) {
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-gallery?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 5) {
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-details?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {});
    }
  }
  nave: boolean = false;
  nav() {
    this.nave = !this.nave;
  }

  pv='';
  propertyv(a: any) {
    this.pv = a;
    console.log(this.pv);
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
  
  onFloorv(a: any) {
    if ('Groud Floor') {
      this.ofv = 'Ground Floor';
    
    }
 if (a != 'Groud Floor'){
    this.ofv = a + ' Floors';
    console.log(this.ofv);
 }
  }
  aop: any;
  ageofpropv(a: any) {
    this.aop = a;
    console.log(this.aop);
  }

  bhkv: any;

  bhktyev(a: any) {
    this.bhkv = a;
    console.log(this.bhkv);
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
