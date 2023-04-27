import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-my-streams',
  templateUrl: './my-streams.component.html',
  styleUrls: ['./my-streams.component.css']
})
export class MyStreamsComponent implements OnInit {
  constructor(private service:SellerService) {}
  ngOnInit(): void {
   this.getAll()
  }
  data:any=[];
  getAll(){
    this.service.get_all_stream().subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    })
  }

}
