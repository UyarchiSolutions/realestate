import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  constructor( private router:Router,private service:SellerService){

  }
  data:any=[];
  ngOnInit(){
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res);
      this.data= res;
    })
  }
  editAccount(){
    this.router.navigateByUrl('/edit-account')
  }
}
