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

  property!:any;
  data!:any;

 firstform: any = this.fb.group({
   type : new FormControl('',Validators.required)
})
  
  

constructor(private fb:FormBuilder, private service:PostPropertyService,
  private router: Router) {
  
}  


ngOnInit(): void {
  
}

onAddressChange(address: Address) {
   this.data = address.formatted_address
  

}

options: any = {
    componentRestrictions: { country: 'IN' }
  }

 Residential(){
  
  this.property="Residential";

 }
 Commercial(){
  this.property="Commercial";
 }

 strpost(){

  var val= this.firstform.value;

  console.log("first data uploaded"); 
  var data ={
    HouseOrCommercialType:this.property,
    Type:this.firstform.get('type')?.value,
    formatedAddress:this.data
  }
  console.log(data);

  this.service.fpost(data).subscribe((res:any)=>{
    console.log('response got',res);
    if(this.property = 'Residential' && this.firstform.get('type')?.value == 'rent'){ 

    
    var postdata ={
      id:res._id
    }
    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl('/residential-rent?' + queryString);
    console.log("recevied by backend")
    }
  })

 }
}