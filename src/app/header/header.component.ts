import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BuyerService } from '../buyer/buyer.service';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
