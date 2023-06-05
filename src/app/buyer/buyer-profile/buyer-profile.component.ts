import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {
  data:any=[]
  constructor(private router:Router, private service:BuyerService){

  }
  ngOnInit(): void {
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    })
  }
  toEdit(){
    this.router.navigate(['/buyer-profile-edit']);
  }
}
