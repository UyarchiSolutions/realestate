import { Component, OnInit } from '@angular/core';
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
    }

