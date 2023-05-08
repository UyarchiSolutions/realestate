import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  data:any;
 constructor(private service:SellerService,private router:Router){

 }
  ngOnInit(): void {
    this.service.get_all_interest().subscribe((res:any)=>{
      console.log(res)
      this.data=res
    })
  }
  routetoInterest(id:any){
    let data={
      id:id
    }
    let query = new URLSearchParams(data).toString()
    this.router.navigateByUrl('/interest-post?'+query)
  }

 
}
