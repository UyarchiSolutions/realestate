import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-rr-rental-details',
  templateUrl: './rr-rental-details.component.html',
  styleUrls: ['./rr-rental-details.component.css']
})
export class RrRentalDetailsComponent implements OnInit{
 

  id:any;

  rentform:any= this.fb.group({
    ExpectedRent: new FormControl(),
    ExpectedRentNegotiable:new FormControl(),
    ExpectedDeposit:new FormControl(),
    ExpectedDepositNegotiable:new FormControl(),
    ExcludeMaintenance:new FormControl(),
    MrSq: new FormBuilder()

  })

  leaseform:any =this.fb.group({
    LExpectedDeposit:new FormControl(),
    LExpectedDepositNegotiable:new FormControl(),
    LExcludeMaintenance:new FormControl(),
    LMrSq: new FormBuilder()
  })

  constructor(private fb:FormBuilder,private arouter: ActivatedRoute,
    private service:PostPropertyService,
    private router:Router){}
  
  ngOnInit(): void {
    
    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      console.log(this.id,"this is id from sp");
      
    });

    
  }
  maintanceVal:any;
  maintance(a:any){
    this.maintanceVal=a;
    console.log(this.maintanceVal);

  }
  rentsub(){

    var data={
      rentDetails:this.switch,
      MonthlyRentFrom:this.rentform.get('ExpectedRent').value,
      RentNegociable:this.rentform.get('ExpectedRentNegotiable').value,
      depositeAmount:this.rentform.get('ExpectedDeposit').value,
      depositeNegociable:this.rentform.get('ExpectedDepositNegotiable').value,
      maintainenceCost:this.rentform.get('ExcludeMaintenance').value,
      squareFT:this.rentform.get('MrSq').value
    }
    this.service.formput(this.id,data).subscribe((res:any)=>{
      console.log(res);
      
      var postdata ={
        id:res._id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-amentites?' + queryString);
      console.log(res);
    })

  }

  leasesub(){
    
    var data={

      rentDetails:this.switch,
      depositeAmount:this.leaseform.get('LExpectedDeposit').value,
      depositeNegociable:this.leaseform.get('LExpectedDepositNegotiable').value,
      maintainenceCost:this.leaseform.get('LExcludeMaintenance').value,
      squareFT:this.leaseform.get('LMrSq').value
    }
    console.log(data);
    this.service.formput(this.id,data).subscribe((res:any)=>{
      console.log(res);
      var postdata ={
        id:res._id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-amentites?' + queryString);
      console.log(res);
    })


  }
  switch:any='rent';
  check:boolean=true;
  check1:boolean=false;
  rent(){
    this.switch='rent';
    this.check = true;
    this.check1= false;
  }
  lease(){
    this.switch='lease';
    this.check = false;
    this.check1= true;
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
}
