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
  type:any=null;
  range=10;
  page=0;
  totalpage:any;
  data:any=[];
  getAll(){
    this.adminService.get_Owner_seller(this.type,this.range,this.page).subscribe((res:any)=>{
      console.log(res)
      this.data=res.endUsers;
      this.data = this.data.filter((res:any)=> {return res.Type == 'Seller' && res.verified == true})
      console.log(this.data)
      this.totalpage=res.total
    })
  }
  
}
