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
    ExcludeMaintenance:new FormControl(),
    MrSq: new FormControl()

  })

  leaseform:any =this.fb.group({
    LExpectedDeposit:new FormControl('',Validators.required),
    LExpectedDepositNegotiable:new FormControl(),
    LExcludeMaintenance:new FormControl(),
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
      this.rentform.patchValue({
        ExpectedRent:res.MonthlyRentFrom,
        ExpectedRentNegotiable:res.RentNegociable=='true'?true:null,
        ExpectedDeposit:res.depositeAmount,
        ExpectedDepositNegotiable:res.depositeNegociable=='true'?true:null,
        ExcludeMaintenance:res.maintainenceCost,
        routeLink:this.routerlink
        
        
      });
      console.log('value patched',this.rentform.value) ;
      this.switch= this.data.rentDetails;
      this.maintanceVal= this.data.MaintenanceStatus;
      this.mainmon=res.squareFT; }

      if(this.data.rentDetails=='lease'){
        this.leaseform.patchValue({
          
          LExpectedDeposit:res.depositeAmount,
          LExpectedDepositNegotiable:res.depositeNegociable=='true'?true:null,
          LExcludeMaintenance:res.maintainenceCost,
          routeLink:this.routerlink
        }); 
        
        this.LmaintanceVal= this.data.MaintenanceStatus; 
      this.switch= this.data.rentDetails;
      this.Lmainmon=res.squareFT;}
      
    })
  console.log(this.switch,'end')
  }

  maintanceVal='Include Maintenance';

  maintance(a:any){
    this.maintanceVal=a;
    console.log(this.maintanceVal);
  }
  LmaintanceVal='Include Maintenance';

  Lmaintance(a:any){
    this.LmaintanceVal=a;
    console.log(this.maintanceVal);
  }
  mainmon='';

  mainmonv(a:any){

    this.mainmon=a;
  }
  Lmainmon:any;

  Lmainmonv(a:any){

    this.Lmainmon=a;
  }
  rentsub(){

    this.submitted=true;
    if(this.rentform.valid){
    var data={
      rentDetails:this.switch,
      MonthlyRentFrom:this.rentform.get('ExpectedRent').value,
      RentNegociable:this.rentform.get('ExpectedRentNegotiable').value,
      depositeAmount:this.rentform.get('ExpectedDeposit').value,
      depositeNegociable:this.rentform.get('ExpectedDepositNegotiable').value,
      maintainenceCost:this.rentform.get('ExcludeMaintenance').value,
      squareFT:this.mainmon,
      MaintenanceStatus:this.maintanceVal,
    }
    console.log(data,'rentsub');
    
    this.service.formput(this.id,data).subscribe((res:any)=>{
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
  submittedL=false
  leasesub(){
    
    this.submittedL=true;
    if(this.leaseform.valid){
    var data={

      rentDetails:this.switch,
      MonthlyRentFrom:this.leaseform.get('LExpectedDeposit').value,
      depositeNegociable:this.leaseform.get('LExpectedDepositNegotiable').value,
      maintainenceCost:this.leaseform.get('LExcludeMaintenance').value,
      squareFT:this.Lmainmon,
      MaintenanceStatus:this.LmaintanceVal,
    }
    console.log(data);
    this.service.formput(this.id,data).subscribe((res:any)=>{
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

         if(this.switch == 'rent')  {
          var data={
            rentDetails:this.switch,
            MonthlyRentFrom:this.rentform.get('ExpectedRent').value,
            RentNegociable:this.rentform.get('ExpectedRentNegotiable').value,
            depositeAmount:this.rentform.get('ExpectedDeposit').value,
            depositeNegociable:this.rentform.get('ExpectedDepositNegotiable').value,
            maintainenceCost:this.rentform.get('ExcludeMaintenance').value,
            squareFT:this.mainmon,
            MaintenanceStatus:this.maintanceVal,
          }
          console.log(data,4564,this.rentform.value)
          this.service.formput(this.id,data).subscribe((res:any)=>{
            var queryString = new URLSearchParams(postdata).toString();
            this.router.navigateByUrl('/start-posting/residentaial-rent-preview?' + queryString);
          });
         }  
         if(this.switch == 'lease'){
          var ldata={

            rentDetails:this.switch,
            MonthlyRentFrom:this.leaseform.get('LExpectedDeposit').value,
            depositeNegociable:this.leaseform.get('LExpectedDepositNegotiable').value,
            maintainenceCost:this.leaseform.get('LExcludeMaintenance').value,
            squareFT:this.Lmainmon,
            MaintenanceStatus:this.LmaintanceVal,
          }
          console.log(ldata);
          this.service.formput(this.id,ldata).subscribe((res:any)=>{
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
