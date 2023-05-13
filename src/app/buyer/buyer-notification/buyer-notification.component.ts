import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'buyer-notification',
  templateUrl: './buyer-notification.component.html',
  styleUrls: ['./buyer-notification.component.css']
})
export class BuyerNotificationComponent implements OnInit {
  constructor(private buyerService:BuyerService ) { }
  nofi:any=[];
  ngOnInit(): void {
    this.get_all_notification();
  }
  get_all_notification(){
    this.buyerService.get_all_notification().subscribe((res:any)=>{
      console.log(res,'notification');
      this.nofi=res;
    })
  }
}
