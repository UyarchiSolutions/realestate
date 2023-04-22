import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-cs-property-details',
  templateUrl: './cs-property-details.component.html',
  styleUrls: ['./cs-property-details.component.css']
})
export class CsPropertyDetailsComponent {
 
   
    numarray: any = [];
    id!: any;
    toggleState = false;
    myarray: any = [];
    data:any;
   
    isSaved=false;
  
    propform: any = this.fb.group({
      BuildupArea: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required),
      otfea:new FormControl(),
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
    routerlink='/start-posting/commercial-sale-property';
    submitted=false;
    propsub() {
     
      this.submitted = this.data.propertType !=  null ? false : true;
      var Checkdata = {
        propertType: this.pv,
        noOfFloor: this.tfv,
        floorNo: this.ofv,
        ageOfBuilding: this.aop,
        otherFeature:this.propform.get('otfea')?.value,
        BuildedSize: this.propform.get('BuildupArea')?.value,
        facingDirection: this.fdv,
        ideaFor:this.rpv,
        ownerType:this.ost,
        
        buildingType:this.bt,
        landSize:this.propform.get('UDSlandsize')?.value,
        routeLink:this.routerlink
      };

      if(this.allKeysHaveValue(Checkdata) || this.data.propertType ){ 

      var data = {
        propertType: this.pv,
        noOfFloor: this.tfv,
        floorNo: this.ofv,
        ageOfBuilding: this.aop,
        otherFeature:this.propform.get('otfea')?.value,
        BuildedSize: this.propform.get('BuildupArea')?.value,
        facingDirection: this.fdv,
        ideaFor:this.rpv,
        ownerType:this.ost,
        discription: this.propform.get('Description')?.value,
        buildingType:this.bt,
        landSize:this.propform.get('UDSlandsize')?.value,
        routeLink:this.routerlink
      };
      
      console.log(data);
      console.log('updated')
      this.service.formput(this.id, data).subscribe((res: any) => {
        var postdata = {
          id: res._id,
        };
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl(
          '/start-posting/commercial-sale-location-details?' + queryString
        );
        console.log(res);
      });
    } 
    
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
          UDSlandsize:res.landSize
          
        }); console.log(res.facingDirection);
      });
    }
    otherFeature:any;
    check(a:any){
      console.log(a.target.value);
      let b =a.target.value;
      this.otherFeature=b;
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
        ownerType:this.ost,
        discription: this.propform.get('Description')?.value,
        buildingType:this.bt,
        landSize:this.propform.get('UDSlandsize')?.value
      };
      console.log(data);
      this.service.formput(this.id, data).subscribe((res: any) => {
        console.log('updated')
      })
  
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/commercial-sale-preview?' + queryString);
  
      this.service.formget(this.id).subscribe((res: any) => 
      {location.reload();});
      
    }
    property = ['Office Space','Co working','Shop','Show room','Other business'
                ,'Industrial shed','Godown/Warehouse','Industrial/Building','Restaurant/Cafe']
    building= ['Apartment Type','Business park','Mall','Standalone Building','Independent shop']
    selectedBuid:any=[];
    loopBuilding(a:any){
      
      let index= this.property.indexOf(a);
  
      console.log(index);
  
      if(index <= 4){
        this.selectedBuid = this.building;
        console.log(this.selectedBuid,index <= 4);
      }
      if(index >= 5 && index <= 7){
        this.selectedBuid=['Standalone Building'];
        console.log(this.selectedBuid,index >= 5 && index <= 7);
      }
      if(index == 8){
        
        this.selectedBuid=['Business park','Mall','Standalone Building','Independent shop'];
        console.log(this.selectedBuid,index = 8);
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
      this.loopBuilding(a);
    }
  
    tfv: any;
    totalfloorforon!: any;
  
    groundFloorv(total: any) {
      console.log(total,'ground');
      if (total == 'Full Building') {
        this.tfv = 'Full Building';
        console.log('1 st')
      }
      if (total == 'Lower Basement') {
        this.tfv = 'Lower Basement';
      }
      if (total == 'Upper Basement') {
        this.tfv = 'Upper Basement';
      }
      if (total == '0') {
        this.tfv = 'Ground Floor';
      }
    
     
    }
    numberFloorv(total: any){
  
      this.tfv = total + ' Floors';
      console.log('number',total);
      this.floorarraygenerate(total);
    }
    numFloorv(a: any){
  
      this.ofv = a + ' Floors';
      console.log('number',a);
      
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
      console.log(a,'on flor value ');
      if (a == 'Full Building') {
        this.ofv = 'Full Building';
      }
      if (a == 'Lower Basement') {
        this.ofv = 'Lower Basement';
      }
      if (a == 'Upper Basement') {
        this.ofv = 'Upper Basement';
      }
      if (a == 'Ground Floor') {
        this.ofv = 'Ground Floor';
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
    ost:any;
    ownerShipv(a:any){
      this.ost=a;
      
    }
    back(count: any) {
      if (count == 0) {
        var data = {
          id: this.id,
        };
        var queryString = new URLSearchParams(data).toString();
        this.router.navigateByUrl('/start-posting/commercial-sale-property?' + queryString);
  
        this.service.formget(this.id).subscribe((res: any) => {});
      }
      if (count == 1) {
        var data = {
          id: this.id,
        };
        var queryString = new URLSearchParams(data).toString();
        this.router.navigateByUrl(
          '/start-posting/commercial-sale-location-details?' + queryString
        );
  
        this.service.formget(this.id).subscribe((res: any) => {});
      }
      if (count == 2) {
        var data = {
          id: this.id,
        };
        var queryString = new URLSearchParams(data).toString();
        this.router.navigateByUrl(
          '/start-posting/commercial-sale-price-details?' + queryString
        );
  
        this.service.formget(this.id).subscribe((res: any) => {});
      }
      if (count == 3) {
        var data = {
          id: this.id,
        };
        var queryString = new URLSearchParams(data).toString();
        this.router.navigateByUrl('/start-posting/commercial-sale-amenities?' + queryString);
  
        this.service.formget(this.id).subscribe((res: any) => {});
      }
      if (count == 4) {
        var postdata = {
          id: this.id,
        };
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/start-posting/commercial-sale-gallery?' + queryString);
        this.service.formget(this.id).subscribe((res: any) => {});
      }
      if (count == 5) {
        var postdata = {
          id: this.id,
        };
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/start-posting/commercial-sale-add-details?' + queryString);
        this.service.formget(this.id).subscribe((res: any) => {});
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
  }
  
  
  

