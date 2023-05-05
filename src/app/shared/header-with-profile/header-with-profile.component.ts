import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { BuyerService } from 'src/app/buyer/buyer.service';

@Component({
  selector: 'buyer-header-profile',
  templateUrl: './header-with-profile.component.html',
  styleUrls: ['./header-with-profile.component.css']
})
export class HeaderWithProfileComponent implements OnInit {

  constructor(private router:Router,private service:BuyerService) {}
  buyer:any=[];
  ngOnInit(): void {
  this.Getbuyer()
  }
  logOut() {
    sessionStorage.clear();
    localStorage.clear();
    Cookie.delete('buyer');

    this.router.navigateByUrl('/');
  }
  changepassword() {
    this.router.navigateByUrl('/changepassword-buyer');
  }
  Getbuyer() {
    this.service.Get_buyer_account().subscribe((res: any) => {
      console.log(res);
      this.buyer = res;
    });
  }
  homepage(){
    window.history.back()
  }

}
