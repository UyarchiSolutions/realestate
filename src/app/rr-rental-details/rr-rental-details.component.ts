import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-rr-rental-details',
  templateUrl: './rr-rental-details.component.html',
  styleUrls: ['./rr-rental-details.component.css']
})
export class RrRentalDetailsComponent implements OnInit{
 
  formSubmitted = false;
  id:any;
  data:any;

  rentform:any= this.fb.group({
    ExpectedRent: new FormControl('',Validators.required),
    ExpectedRentNegotiable:new FormControl(),
    ExpectedDeposit:new FormControl('',Validators.required),
    ExpectedDepositNegotiable:new FormControl(),
   
    MrSq: new FormControl()

  })

  leaseform:any =this.fb.group({
    LExpectedDeposit:new FormControl('',Validators.required),
    LExpectedDepositNegotiable:new FormControl(),
 
    LMrSq: new FormControl()
  })

  constructor(private fb:FormBuilder,private arouter: ActivatedRoute,
    private service:PostPropertyService,
    private router:Router){}
    
    switch='rent';
    submitted=false;
    routerlink='/start-posting/residentaial-rent-rental-details';
  ngOnInit(): void {

    
    console.log(this.switch);
   
    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      console.log(this.id,"this is id from sp");
      
    });

  
    this.service.formget(this.id).subscribe((res:any)=>{

      this.data=res;

      console.log(res);
   
      if(this.data.rentDetails=='rent'){
        this.switch= this.data.rentDetails;
        if(this.data.MaintenanceStatus){
          this.maintance(this.data.MaintenanceStatus);
          this.maintanceVal= this.data.MaintenanceStatus;
          this.mainmon=res.squareFT; 
          this.rentform.patchValue({
            ExpectedRent:res.MonthlyRentFrom,
            ExpectedRentNegotiable:res.RentNegociable=='true'?true:null,
            ExpectedDeposit:res.depositeAmount,
            ExpectedDepositNegotiable:res.depositeNegociable=='true'?true:null,
            ExcludeMaintenance:res.maintainenceCost,
            routeLink:this.routerlink,
            sqft:res.squareFT
            
          });
        }
        else{ this.rentform.patchValue({
          ExpectedRent:res.MonthlyRentFrom,
          ExpectedRentNegotiable:res.RentNegociable=='true'?true:null,
          ExpectedDeposit:res.depositeAmount,
          ExpectedDepositNegotiable:res.depositeNegociable=='true'?true:null,
          ExcludeMaintenance:res.maintainenceCost,
          routeLink:this.routerlink
          
        });}
     
      console.log('value patched',this.rentform.value) ;
     
     }

      if(this.data.rentDetails=='lease'){
        this.switch= this.data.rentDetails;
        if(this.data.MaintenanceStatus){
          this.Lmaintance(this.data.MaintenanceStatus);
          this.LmaintanceVal= this.data.MaintenanceStatus; 
          this.leaseform.patchValue({
          
            LExpectedDeposit:res.MonthlyRentFrom,
            LExpectedDepositNegotiable:res.depositeNegociable=='true'?true:null,
            LExcludeMaintenance:res.maintainenceCost,
            sqft:res.squareFT
          }); 
        }
        else{
          this.leaseform.patchValue({
            LExpectedDeposit:res.MonthlyRentFrom,
            LExpectedDepositNegotiable:res.depositeNegociable=='true'?true:null,
            routeLink:this.routerlink
          }); 
         
        }
 
      }
      
    })
  console.log(this.switch,'end')
  }

  maintanceVal='Include Maintenance';

  maintance(a:any){
    console.log(this.maintanceVal);
    this.maintanceVal=a;

    if(this.maintanceVal=='Exclude Maintenance'){
      this.rentform.addControl('ExcludeMaintenance', new FormControl('', [Validators.required,]));
      this.rentform.addControl('sqft', new FormControl('', [Validators.required,]));
    }else{
      this.rentform.removeControl('ExcludeMaintenance');
      this.rentform.removeControl('sqft');
    }
  }
  Lmaintance(a:any){
 
    this.LmaintanceVal=a;

    if(this.LmaintanceVal=='Exclude Maintenance'){
      this.leaseform.addControl('LExcludeMaintenance', new FormControl('', [Validators.required,]));
      this.leaseform.addControl('sqft', new FormControl('', [Validators.required,]));
    }else{
      this.leaseform.removeControl('LExcludeMaintenance');
      this.leaseform.removeControl('sqft');
    }
  }
  LmaintanceVal='Include Maintenance';


  mainmon:any;

  mainmonv(a:any){
    this.rentform.patchValue({
      sqft:a
    })
    this.mainmon=a;
  }
  Lmainmon:any;

  Lmainmonv(a:any){
    this.leaseform.patchValue({
      sqft:a
    })
    this.Lmainmon=a;
  }
  Checkdata:any=[];
  rentsub(){

    this.submitted=true;
    if(this.rentform.valid){
      if(this.maintanceVal=='Exclude Maintenance'){
    this.Checkdata={
      rentDetails:this.switch,
      MonthlyRentFrom:this.rentform.get('ExpectedRent').value,
      RentNegociable:this.rentform.get('ExpectedRentNegotiable').value,
      depositeAmount:this.rentform.get('ExpectedDeposit').value,
      depositeNegociable:this.rentform.get('ExpectedDepositNegotiable').value,
      maintainenceCost:this.rentform.get('ExcludeMaintenance').value,
      squareFT:this.rentform.get('sqft').value,
      MaintenanceStatus:this.maintanceVal,
    }}
    else{
      this.Checkdata={
        rentDetails:this.switch,
        MonthlyRentFrom:this.rentform.get('ExpectedRent').value,
        RentNegociable:this.rentform.get('ExpectedRentNegotiable').value,
        depositeAmount:this.rentform.get('ExpectedDeposit').value,
        depositeNegociable:this.rentform.get('ExpectedDepositNegotiable').value,
        MaintenanceStatus:this.maintanceVal,
    }
   }
   if(this.rentform.valid){
    this.service.formput(this.id,this.Checkdata).subscribe((res:any)=>{
      console.log(res);
      
      var postdata ={
        id:res._id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/residentaial-rent-amentites?' + queryString);
      console.log(res);
     
    })
  }
   }
    console.log(this.Checkdata,'rentsub');
  
    
  }
  
  submittedL=false
  leasesub(){
    
    this.submittedL=true;
    if(this.leaseform.valid){
      if(this.LmaintanceVal=='Exclude Maintenance'){
    this.Checkdata={

      rentDetails:this.switch,
      MonthlyRentFrom:this.leaseform.get('LExpectedDeposit').value,
      depositeNegociable:this.leaseform.get('LExpectedDepositNegotiable').value,
      maintainenceCost:this.leaseform.get('LExcludeMaintenance').value,
      squareFT:this.leaseform.get('sqft').value,
      MaintenanceStatus:this.LmaintanceVal,
    }
    console.log(this.Checkdata);}
    else{
      this.Checkdata={

        rentDetails:this.switch,
        MonthlyRentFrom:this.leaseform.get('LExpectedDeposit').value,
        depositeNegociable:this.leaseform.get('LExpectedDepositNegotiable').value,
        MaintenanceStatus:this.LmaintanceVal,
      }
    }
    if(this.leaseform.valid){
      this.service.formput(this.id,this.Checkdata).subscribe((res:any)=>{
        console.log(res);
        var postdata ={
          id:res._id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/start-posting/residentaial-rent-amentites?' + queryString);
        console.log(res);
        this.formSubmitted=true;
      })
  
    }
  
  }
  }
 
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
  routetopreview(){
    this.submitted=true
         if(this.switch == 'rent' && this.rentform.valid)  {
          if(this.maintanceVal=='Exclude Maintenance'){
            this.Checkdata={
              rentDetails:this.switch,
              MonthlyRentFrom:this.rentform.get('ExpectedRent').value,
              RentNegociable:this.rentform.get('ExpectedRentNegotiable').value,
              depositeAmount:this.rentform.get('ExpectedDeposit').value,
              depositeNegociable:this.rentform.get('ExpectedDepositNegotiable').value,
              maintainenceCost:this.rentform.get('ExcludeMaintenance').value,
              squareFT:this.mainmon,
              MaintenanceStatus:this.maintanceVal,
            }}
            else{
              this.Checkdata={
                rentDetails:this.switch,
                MonthlyRentFrom:this.rentform.get('ExpectedRent').value,
                RentNegociable:this.rentform.get('ExpectedRentNegotiable').value,
                depositeAmount:this.rentform.get('ExpectedDeposit').value,
                depositeNegociable:this.rentform.get('ExpectedDepositNegotiable').value,
                MaintenanceStatus:this.maintanceVal,
            }
           }
          console.log(this.Checkdata,4564,this.rentform.value)
          this.service.formput(this.id,this.Checkdata).subscribe((res:any)=>{
            var queryString = new URLSearchParams(postdata).toString();
            this.router.navigateByUrl('/start-posting/residentaial-rent-preview?' + queryString);
          });
         }  
         if(this.switch == 'lease' && this.leaseform.valid){
          if(this.LmaintanceVal=='Exclude Maintenance'){
            this.Checkdata={
        
              rentDetails:this.switch,
              MonthlyRentFrom:this.leaseform.get('LExpectedDeposit').value,
              depositeNegociable:this.leaseform.get('LExpectedDepositNegotiable').value,
              maintainenceCost:this.leaseform.get('LExcludeMaintenance').value,
              squareFT:this.Lmainmon,
              MaintenanceStatus:this.LmaintanceVal,
            }
            console.log(this.Checkdata);}
            else{
              this.Checkdata={
        
                rentDetails:this.switch,
                MonthlyRentFrom:this.leaseform.get('LExpectedDeposit').value,
                depositeNegociable:this.leaseform.get('LExpectedDepositNegotiable').value,
                MaintenanceStatus:this.LmaintanceVal,
              }
            }
          
          this.service.formput(this.id,this.Checkdata).subscribe((res:any)=>{
            var queryString = new URLSearchParams(postdata).toString();
            this.router.navigateByUrl('/start-posting/residentaial-rent-preview?' + queryString);
          });
         }

    var postdata = {
      id: this.id,
    };
 
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
