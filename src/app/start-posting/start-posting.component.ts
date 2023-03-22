import { Component, OnInit } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { FormControl,FormBuilder, Validators } from '@angular/forms';
import { PostPropertyService } from '../services/post-property.service';
import { Router } from '@angular/router';

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



 
 strpost(){


  
  this.submitted = true;

  console.log(this.submitted);
  if(this.firstform.valid){


  var data ={
    HouseOrCommercialType:this.property,
    Type:this.firstform.get('type')?.value
    
  }
  

  this.service.fpost(data).subscribe((res:any)=>{
    console.log('response got',res);
    if(this.property == 'Residential' && this.firstform.get('type')?.value == 'Rent'){ 

    
    var postdata ={
      id:res._id
    }

    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/residential-rent?' + queryString); }
    
    if( this.property == 'Residential' && this.firstform.get('type')?.value == 'Sale'){
      var postdata ={
        id:res._id
      }
  
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residential-sale-property?' + queryString);
    }
    if( this.property == 'Commercial' && this.firstform.get('type')?.value == 'Rent'){
      var postdata ={
        id:res._id
      }
  
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/commercial-rent-property?' + queryString);
    }
    if( this.property == 'Commercial' && this.firstform.get('type')?.value == 'Sale'){
      var postdata ={
        id:res._id
      }
  
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/commercial-sale-property?' + queryString);
    }

    })

    }
  }
  page=0;
  range=100;
  form:any;
  find=false;
  UnsubmittedForm(){

    this.service.getOwnerData(this.page,this.range,this.find).subscribe((res:any)=>{
    
      this.data=res.values;
      console.log(this.data);
      
     this.form = this.data[0];
     console.log(this.form);

    })
  }
  route(){
   
    this.router.navigateByUrl(`/${this.form.routeLink}?id=${this.form._id}` );
  }
}