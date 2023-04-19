import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-seller-owner',
  templateUrl: './manage-seller-owner.component.html',
  styleUrls: ['./manage-seller-owner.component.css']
})
export class ManageSellerOwnerComponent implements OnInit {

  constructor( private adminService:AdminService){

  }
  ngOnInit(): void {
    this.getAll()
  }
  type:any='Seller';
  range=10;
  page=0;
  role:any='';
  totalpage:any;
  data:any=[];
  getAll(){
    this.adminService.get_All_user(this.type,this.range,this.page,this.role).subscribe((res:any)=>{
      console.log(res)
      this.data=res.endUsers;
    
      console.log(this.data)
      this.totalpage=res.total
    })
  }
  setRole(a:any){
    this.role=a;
    this.getAll();
  }
  changeActive(id:any,active:any){

    if(active){
      this.adminService.de_active_user(id).subscribe((res:any)=>{
        console.log(res)
        this.getAll()
      })
    }
    else{
      this.adminService.re_active_user(id).subscribe((res:any)=>{
        console.log(res)
        this.getAll()
      })
    }
 
  }
  
}