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
    propertytype : new FormControl('',Validators.required),
    totalfloor : new FormControl('',Validators.required),
    onfloor : new FormControl('',Validators.required),
    AgeofProperty : new FormControl('',Validators.required),
    BHKType : new FormControl('',Validators.required),
    BuildupArea : new FormControl('',Validators.required),
    RentPreference : new FormControl('',Validators.required),
    FacingDirection : new FormControl('',Validators.required),
    Description : new FormControl('',Validators.required)
   
  });

  constructor
  (private fb:FormBuilder,private arouter: ActivatedRoute,
    private service:PostPropertyService,
    private router:Router){


  }

  ngOnInit(): void {

    this.createnumfloor();
    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      console.log(this.id,"this is id from sp");
      this.updateform();
    }
  );

  }
  propsub(){
    var data={
      propertType:this.propform.get('propertytype')?.value,
      noOfFloor:this.propform.get('totalfloor')?.value,
      floorNo:this.propform.get('onfloor')?.value,
      ageOfBuilding:this.propform.get('AgeofProperty')?.value,
      BHKType:this.propform.get('BHKType')?.value,
      BuildedSize:this.propform.get('BuildupArea')?.value,
      buildingDirection:this.propform.get('FacingDirection')?.value,
      RentPrefer:this.propform.get('RentPreference')?.value,
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
  }

}
