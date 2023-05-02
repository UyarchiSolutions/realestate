import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-streams',
  templateUrl: './my-streams.component.html',
  styleUrls: ['./my-streams.component.css']
})
export class MyStreamsComponent implements OnInit {
  constructor(private service:SellerService,private router:Router) {}
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
  editStream(id:any){
    let data={
      id:id
    }
    let query = new URLSearchParams(data).toString()
    this.router.navigateByUrl('/my-streams/my-add-stream?'+ query)
  }
  assignHost(id:any){
    let data={
      id:id
    }
    let query = new URLSearchParams(data).toString()
    this.router.navigateByUrl('/my-streams/assign-host?'+ query)
  }

}
