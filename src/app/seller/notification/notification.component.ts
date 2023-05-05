import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  data:any;
 constructor(private service:SellerService){

 }
  ngOnInit(): void {
    this.service.get_all_interest().subscribe((res:any)=>{
      console.log(res)
      this.data=res
    })
  }

 
}
