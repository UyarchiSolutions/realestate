import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrls: ['./manage-post.component.css']
})
export class ManagePostComponent implements OnInit {

  constructor(private adminService:AdminService){

  }
  ngOnInit(): void {
   this.GetAll()
  }
  data:any=[];
  page=0;
  range=10;
  status:any='';
  type='';
  comOrRes='';
  GetAll(){
    this.adminService.get_All_post(this.status,this.page,this.range,this.comOrRes,this.type).subscribe((res:any)=>{
      console.log(res)
      this.data=res.values;
    })
  }
}
