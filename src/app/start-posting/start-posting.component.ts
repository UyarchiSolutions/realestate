import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators } from '@angular/forms';
import { PostPropertyService } from '../services/post-property.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-start-posting',
  templateUrl: './start-posting.component.html',
  styleUrls: ['./start-posting.component.css']
})
export class StartPostingComponent implements OnInit {
  myAddres!: string; 

  
  data!:any;
  submitted: boolean= false;

 firstform: any = this.fb.group({
   type : new FormControl('',Validators.required)
})
  
  

constructor(private fb:FormBuilder, private service:PostPropertyService,
  private router: Router) {
  
}  


ngOnInit(): void {
  this.UnsubmittedForm();
}



check:boolean=true;
check1:boolean=false;
property="Residential";
 Residential(){
  
  this.check=true;
  this.check1=false;
  this.property="Residential";

 }

 Commercial(){

  this.check1=true;
  this.check=false;
  this.property="Commercial";
 }



 checkVal:any;
 popupShow=false;
 strpost(){


  
  this.submitted = true;

  console.log(this.submitted);

  if( this.checkVal ){
    this.popupShow=true;

  }

  if(this.firstform.valid && !this.checkVal){


  var data ={
    HouseOrCommercialType:this.property,
    Type:this.firstform.get('type')?.value
    
  }
  console.log(data);
  

  this.service.fpost(data).subscribe((res:any)=>{
    console.log('response got',res);
    if(this.property == 'Residential' && this.firstform.get('type')?.value == 'Rent'){ 

    
    var postdata ={
      id:res._id
    }

    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/start-posting/residential-rent?' + queryString); }
    
    if( this.property == 'Residential' && this.firstform.get('type')?.value == 'Sale'){
      var postdata ={
        id:res._id
      }
  
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/residential-sale-property?' + queryString);
    }
    if( this.property == 'Commercial' && this.firstform.get('type')?.value == 'Rent'){
      var postdata ={
        id:res._id
      }
  
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/commercial-rent-property?' + queryString);
    }
    if( this.property == 'Commercial' && this.firstform.get('type')?.value == 'Sale'){
      var postdata ={
        id:res._id
      }
  
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/commercial-sale-property?' + queryString);
    }

    })

    }
  }
  page=0;
  range=100;
  form:any;
  find=false;
  findpopup=true;
  checkroute=false;
  UnsubmittedForm(){

  
    this.service.getDraft().subscribe((res:any)=>{
   
      this.data=res;
      this.checkVal=res.routeLink;
   if(res.routeLink){
    this.checkroute=true
   }
      console.log(this.data);
      

    })
    console.log(' not getting value');
  }
  route(){
   
    this.router.navigateByUrl(`/${this.data.routeLink}?id=${this.data._id}` );
  }
  routeForPop(){
    this.checkVal='';
    this.popupShow=false;
    this.checkroute=false;

    this.router.navigateByUrl(`/${this.data.routeLink}?id=${this.data._id}` );
  }
  confirmRoute=true;

  draftContinue(){
    
    this.service.deleteDraft().subscribe((res:any)=>{
      console.log(res)
      this.strpost();
    });
    this.confirmRoute=false;
   
    this.checkVal='';
    this.popupShow=false;
    this.checkroute=false;

    
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