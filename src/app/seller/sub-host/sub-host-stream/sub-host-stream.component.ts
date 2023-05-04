import { Component, OnInit } from '@angular/core';
import { SubHostService } from '../sub-host.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-host-stream',
  templateUrl: './sub-host-stream.component.html',
  styleUrls: ['./sub-host-stream.component.css']
})
export class SubHostStreamComponent implements OnInit {

  constructor(private service:SubHostService,private router:Router){

  }
  data:any;
  ngOnInit(): void {
   this.service.get_all_streams().subscribe((res:any)=>{
    console.log(res)
    this.data= res;
   })
  }
  routeToview(id:any){
    console.log(id)
    let data={
      id:id,
    }
    let query= new URLSearchParams(data).toString()
    this.router.navigateByUrl('/sub-host-view?'+query)
  }
  
}
