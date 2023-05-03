import { Component, OnInit } from '@angular/core';
import { SubHostService } from '../sub-host.service';

@Component({
  selector: 'app-sub-host-stream',
  templateUrl: './sub-host-stream.component.html',
  styleUrls: ['./sub-host-stream.component.css']
})
export class SubHostStreamComponent implements OnInit {

  constructor(private service:SubHostService){

  }
  data:any;
  ngOnInit(): void {
   this.service.get_all_streams().subscribe((res:any)=>{
    console.log(res)
    this.data= res;
   })
  }
  
}
