import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-cr-property-details',
  templateUrl: './cr-property-details.component.html',
  styleUrls: ['./cr-property-details.component.css']
})
export class CrPropertyDetailsComponent {

 
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
    otfea:new FormControl(),
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
    console.log(this.isSaved);
  }
  arr: any = [];

  show() {
    this.toggleState = !this.toggleState;
  }
  select_property(e: any) {
    console.log(e);
    this.propform.get('propertytype').setValue(e);
  }
  propsub() {
   
    
    var data = {
      propertType: this.pv,
      noOfFloor: this.tfv,
      floorNo: this.ofv,
      ageOfBuilding: this.aop,
      otherFeature:this.propform.get('otfea')?.value,
      BuildedSize: this.propform.get('BuildupArea')?.value,
      facingDirection: this.fdv,
      ideaFor:this.rpv,
      discription: this.propform.get('Description')?.value,
      buildingType:this.propform.get('otfea')?.value
    };
    
    console.log(data);
    this.service.formput(this.id, data).subscribe((res: any) => {
      var postdata = {
        id: res._id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/commercial-rent-location-details?' + queryString
      );
      console.log(res);
    });
    
  
  }

  updateform() {
    this.service.formget(this.id).subscribe((res: any) => {
      this.propform.patchValue({
        propertytype: res.propertType,
        totalfloor: res.noOfFloor,
        onfloor: res.floorNo,
        AgeofProperty: res.ageOfBuilding,
        otfea:res.otherFeature,
        BuildupArea: res.BuildedSize,
        RentPreference: res.RentPrefer,
        Description: res.discription,
        facingDirection: res.facingDirection,
        
      }); console.log(res.facingDirection);
    });
  }
  
  check(a:any){
    console.log(a.target.value);
    let b =a.target.value;
    this.propform.get('otfea').setValue(b);
  }
  routetopreview(){
    console.log(this.propform.get('otfea')?.value);
    var data = {
      propertType: this.pv,
      noOfFloor: this.tfv,
      floorNo: this.ofv,
      ageOfBuilding: this.aop,
      otherFeature:this.propform.get('otfea')?.value,
      BuildedSize: this.propform.get('BuildupArea')?.value,
      facingDirection: this.fdv,
      ideaFor:this.rpv,
      discription: this.propform.get('Description')?.value,
      buildingType:this.propform.get('otfea')?.value
    };
    console.log(data);
    this.service.formput(this.id, data).subscribe((res: any) => {
      console.log('updated')
    })

    var postdata = {
      id: this.id,
    };
    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/commercial-rent-preview?' + queryString);

    this.service.formget(this.id).subscribe((res: any) => 
    {location.reload();});
    
  }
  property = ['Office Space','Co working','Shop','Show room','Other business'
              ,'Industrial shed','Godwon/Warehouse','Industrial/Building','Restaurant/Cafe']
  building= ['Apartment Type','Business park','Mall','Standalone Building','Independent shop']

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
    console.log(total,'ground');
    if (total == 'a') {
      this.tfv = 'Full Building';
    }
    if (total == 'b') {
      this.tfv = 'Lower Basement';
    }
    if (total == 'c') {
      this.tfv = 'Upper Basement';
    }
    if (total == 'd') {
      this.tfv = 'Ground Floor';
    }
     else {
      this.tfv = total + ' Floors';
    }
    this.floorarraygenerate(total);
  }

  floorarray: any = [];

  floorarraygenerate(val:any) {
    this.numarray = [];
    console.log(val);
    
    for (let i = 1; i <= val; i++) {
      this.numarray.push(i);
    }
    console.log( this.numarray )
  
  }
  ofv: any;
  
  onFloorv(a: any) {
    console.log(a,'on flor');
    if (a == 'Full Building') {
      this.tfv = 'Full Building';
    }
    if (a == 'Lower Basement') {
      this.tfv = 'Lower Basement';
    }
    if (a == 'Upper Basement') {
      this.tfv = 'Upper Basement';
    }
    if (a == 'Ground Floor') {
      this.tfv = 'Ground Floor';
    }
   else{
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

  bt: any;

  buildtype(a: any) {

    this.bt = a;
  
  }

  fdv: any;

  faceDirectv(a: any) {
    this.fdv = a;
    console.log(this.fdv);
  }
  back(count: any) {
    if (count == 0) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/commercial-rent-property?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 1) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl(
        '/commercial-rent-location-details?' + queryString
      );

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 2) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl(
        '/commercial-rent-rental-details?' + queryString
      );

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 3) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/commercial-rent-amenities?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 4) {
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/commercial-rent-gallery?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 5) {
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/commercial-rent-add-details?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {});
    }
  }
}


