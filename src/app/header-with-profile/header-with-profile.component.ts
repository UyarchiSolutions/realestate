import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller/seller.service';

@Component({
  selector: 'header-with-profile',
  templateUrl: './header-with-profile.component.html',
  styleUrls: ['./header-with-profile.component.css']
})
export class HeaderWithProfileComponent implements OnInit {

 constructor(private service:SellerService){}

  data:any;
  ngOnInit(): void {
   
    this.GetuserName();
  }

  GetuserName(){
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res);
      this.data= res;
    })
  }

}
