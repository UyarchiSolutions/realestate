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
  
}

options: any = {
    componentRestrictions: { country: 'IN' }
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
    Type:this.firstform.get('type')?.value,
    formatedAddress:this.data
  }
  

  this.service.fpost(data).subscribe((res:any)=>{
    console.log('response got',res);
    if(this.property == 'Residential' && this.firstform.get('type')?.value == 'rent'){ 

    
    var postdata ={
      id:res._id
    }

    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/residential-rent?' + queryString); }
    
    if( this.property == 'Residential' && this.firstform.get('type')?.value == 'sale'){
      var postdata ={
        id:res._id
      }
  
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residential-sale-property?' + queryString);
    }

    })

    }
  }
}