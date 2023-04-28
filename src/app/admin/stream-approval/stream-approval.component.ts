import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/seller/seller.service';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stream-approval',
  templateUrl: './stream-approval.component.html',
  styleUrls: ['./stream-approval.component.css']
})
export class StreamApprovalComponent implements OnInit{

  constructor(private service:AdminService,
    private router:Router){

  }
  ngOnInit(): void {
   this.getAll();
  }
  data:any=[];
  getAll(){
    this.service.get_All_stream().subscribe((res:any)=>{
      console.log(res)
      this.data=res;
    })
  }
  changeActive(id:any){
    let data = {
      type : 'approve'
    }
    this.service.change_status_stream(id,data).subscribe((res:any)=>{
      console.log(res)
      this.getAll()
    })
  }
  changeCancel(id:any){
    let data = {
      type : 'cancel'
    }
    this.service.change_status_stream(id,data).subscribe((res:any)=>{
      console.log(res)
      this.getAll()
    })
  }
  viewStream(id:any){
    console.log(id);
    let data={
      id:id
    }
    let query = new URLSearchParams(data).toString()
    this.router.navigateByUrl('/admin/stream-approval/stream-view?'+query)
  }
}
