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
  data:any;

  rentform:any= this.fb.group({
    ExpectedRent: new FormControl(),
    ExpectedRentNegotiable:new FormControl(),
    ExpectedDeposit:new FormControl(),
    ExpectedDepositNegotiable:new FormControl(),
    ExcludeMaintenance:new FormControl(),
    MrSq: new FormControl()

  })

  leaseform:any =this.fb.group({
    LExpectedDeposit:new FormControl(),
    LExpectedDepositNegotiable:new FormControl(),
    LExcludeMaintenance:new FormControl(),
    LMrSq: new FormControl()
  })

  constructor(private fb:FormBuilder,private arouter: ActivatedRoute,
    private service:PostPropertyService,
    private router:Router){}
  
  ngOnInit(): void {
    
    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      console.log(this.id,"this is id from sp");
      this.switch ='rent';
    });

    this.service.formget(this.id).subscribe((res:any)=>{

      this.data = res;
      if(this.data.rentDetails=='rent')
      this.rentform.patchValue({
        ExpectedRent:res.MonthlyRentFrom,
        ExpectedRentNegotiable:res.RentNegociable,
        ExpectedDeposit:res.depositeAmount,
        ExpectedDepositNegotiable:res.depositeNegociable,
        ExcludeMaintenance:res.maintainenceCost
      })
      else{
        this.leaseform.patchValue({
          
          LExpectedDeposit:res.depositeAmount,
          LExpectedDepositNegotiable:res.depositeNegociable,
          LExcludeMaintenance:res.maintainenceCost
        }) 
      }

    })

  }
  maintanceVal='Include Maintenance';

  maintance(a:any){
    this.maintanceVal=a;
    console.log(this.maintanceVal);
  }
  mainmon='';

  mainmonv(a:any){

    this.mainmon=a;
  }
  Lmainmon='';

  Lmainmonv(a:any){

    this.Lmainmon=a;
  }
  rentsub(){

    var data={
      rentDetails:this.switch,
      MonthlyRentFrom:this.rentform.get('ExpectedRent').value,
      RentNegociable:this.rentform.get('ExpectedRentNegotiable').value,
      depositeAmount:this.rentform.get('ExpectedDeposit').value,
      depositeNegociable:this.rentform.get('ExpectedDepositNegotiable').value,
      maintainenceCost:this.rentform.get('ExcludeMaintenance').value,
      squareFT:this.mainmon
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
      squareFT:this.Lmainmon
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
    if(count == 4){
      var postdata ={
        id:this.id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-gallery?' + queryString);
      this.service.formget(this.id).subscribe((res:any)=>{
      })
    }
    if(count == 5){
      var postdata ={
        id:this.id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-details?' + queryString);
      this.service.formget(this.id).subscribe((res:any)=>{
      })
    }
  }
}
