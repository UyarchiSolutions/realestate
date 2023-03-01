import { Component, OnInit } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { FormControl,FormBuilder, Validators } from '@angular/forms';
import { StartPostingService } from '../services/start-posting.service';

@Component({
  selector: 'app-start-posting',
  templateUrl: './start-posting.component.html',
  styleUrls: ['./start-posting.component.css']
})
export class StartPostingComponent implements OnInit {
  myAddres!: string; 
  addressForm: any;
  latitude: any;
  longtitude: any;
  property!:any;
  firstform: any = this.fb.group({
    type : new FormControl('',Validators.required)
  })
  
 

constructor(private fb:FormBuilder, private service:StartPostingService) {
  
}  


ngOnInit(): void {
  
}

handleAddressChange(address: Address) {
    this.myAddres = address.formatted_address
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

  console.log("first data uploaded");
  this.service.fpost(this.property,this.firstform.value);

 }
}