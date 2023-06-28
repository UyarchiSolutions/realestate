import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-sub-host',
  templateUrl: './manage-sub-host.component.html',
  styleUrls: ['./manage-sub-host.component.css']
})
export class ManageSubHostComponent implements OnInit {

  data:any=[]
  constructor(private service:SellerService,private router:Router){
    
  }
  ngOnInit() {
   this.getAll();
  }
  getAll(){
    this.service.get_Sub_host().subscribe((res:any)=>{
      console.log(res)
      this.data=res;
    })
  }
  changeStatus(id:any,status:any){
    let data;
    if(status){
      data={
        type:'Inactive'
      }
    }
    else{
    data={
      type:'active'
    }
  }
    this.service.change_status_host(data,id).subscribe((res:any)=>{
      console.log(res)
      this.getAll();
    })
  }
  updateHost(id:any){
    let data={
      id:id,
    }
    let query = new URLSearchParams(data).toString()
    this.router.navigateByUrl('/manage-sub-host/add-sub-host?'+query)
  }
  delete(id:any){
    this.service.delete_host(id).subscribe((res:any)=>{
      this.getAll();
    })
  }
}
