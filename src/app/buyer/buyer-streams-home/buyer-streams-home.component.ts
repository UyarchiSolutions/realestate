import { Component, OnInit } from '@angular/core';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyer-streams-home',
  templateUrl: './buyer-streams-home.component.html',
  styleUrls: ['./buyer-streams-home.component.css']
})
export class BuyerStreamsHomeComponent implements OnInit {

  data:any;
  constructor(private service:BuyerService){
    
  }
  ngOnInit(): void {
    this.getStreams()
  }
  getStreams(){
    this.service.get_all_streams().subscribe((res:any)=>{
      console.log(res)
      this.data=res;
    })
  }
}
