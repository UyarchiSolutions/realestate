import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostPropertyService } from 'src/app/services/post-property.service';

@Component({
  selector: 'seller-footer',
  templateUrl: './seller-footer.component.html',
  styleUrls: ['./seller-footer.component.css']
})
export class SellerFooterComponent implements OnInit {

  constructor(private router:Router,private service:PostPropertyService){

  }
  ngOnInit(): void {
    this.prof()
  }
  enqform:any=new FormGroup({
    Name:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phoneNumber: new FormControl('',[Validators.required,Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
    Enquiry:new FormControl('',Validators.required)
  })
  submitted:boolean=false
  data:any[]=[]
  sendEnq(){
    this.submitted=true
    if(this.enqform.valid){
      this.service.send_enquiry(this.enqform.value).subscribe((res:any)=>{
        console.log(res,'enq res')
        this.submitted=false
        this.check()
      })
    }
  }
  strpost(Rtype:any,type:any){
  
  
    var data ={
      HouseOrCommercialType:Rtype,
      Type:type
      
    }
    console.log(data);
    
  
    this.service.fpost(data).subscribe((res:any)=>{
      console.log('response got',res);
      if(Rtype== 'Residential' && type == 'Rent'){ 
  
      
      var postdata ={
        id:res._id
      }
  
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/residential-rent?' + queryString); }
      
      if( Rtype== 'Residential' && type == 'Sale'){
        var postdata ={
          id:res._id
        }
    
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/start-posting/residential-sale-property?' + queryString);
      }
      if( Rtype== 'Commercial' && type == 'Rent'){
        var postdata ={
          id:res._id
        }
    
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/start-posting/commercial-rent-property?' + queryString);
      }
      if( Rtype== 'Commercial' && type == 'Sale'){
        var postdata ={
          id:res._id
        }
    
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/start-posting/commercial-sale-property?' + queryString);
      }
  
      })
  
      }

      ok=false
      check(){
        console.log('checking',this.ok)
        this.ok=!this.ok
      }
      prof(){
        this.service.myAcount().subscribe((res:any)=>{
          console.log(res)
          this.data=res
          this.enqform.patchValue({
            Name:res.userName,
            email:res.email,
            phoneNumber:res.mobile
          })
        })
      }

    }

