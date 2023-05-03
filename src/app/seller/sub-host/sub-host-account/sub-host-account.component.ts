import { Component, OnInit } from '@angular/core';
import { SubHostService } from '../sub-host.service';

@Component({
  selector: 'app-sub-host-account',
  templateUrl: './sub-host-account.component.html',
  styleUrls: ['./sub-host-account.component.css']
})
export class SubHostAccountComponent implements OnInit {
  constructor(private service:SubHostService){

  }
  data:any=[]
  ngOnInit(): void {
    this.service.sub_host_details().subscribe((res:any)=>{
      this.data=res;
      console.log(res)
    })
  }

}
