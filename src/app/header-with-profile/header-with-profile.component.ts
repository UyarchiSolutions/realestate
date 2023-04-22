import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller/seller.service';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';

@Component({
  selector: 'header-with-profile',
  templateUrl: './header-with-profile.component.html',
  styleUrls: ['./header-with-profile.component.css']
})
export class HeaderWithProfileComponent implements OnInit {


 constructor(private service:SellerService,private router:Router){}

  data:any=[];
  ngOnInit(): void {
   
    this.GetuserName();
  }

  GetuserName(){
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res);
      this.data= res;
    })
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
  routeAccount(){
    this.router.navigateByUrl('/my-account')
  }
}
