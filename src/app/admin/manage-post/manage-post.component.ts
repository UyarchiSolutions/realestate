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
  showProp:any;
  area='';
  totalpage:any;
  totalPageCount:any;
  GetAll(){
    this.adminService.get_All_post(this.status,this.page,this.range,this.comOrRes,this.type,this.area).subscribe((res:any)=>{
      console.log(res)
      this.data=res.values;
      this.totalpage=res.total;
      if(this.page == 0){
        this.totalPageCount = Math.ceil(this.totalpage/this.range)
        console.log(this.totalPageCount)
      }

    })
  }
  sendType(a:any,show:any){
    switch(a){
      case 1:
        this.type='Rent';
        this.comOrRes='Commercial';
        break;
      case 2:
          this.type='Sale';
          this.comOrRes='Commercial';
          break;
      case 3:
          this.type='Rent';
          this.comOrRes='Residential';
          break;
      case 4:
          this.type='Sale';
          this.comOrRes='Residential';
          break;
    }
    this.showProp=show;
    this.GetAll();
  }
  changeStatus(id:any,active:any){
    let data;
    console.log(id);
    if(active){
      data={
        status:'inactive'
    }
    }else{
  
    data={
      status:'active'
    }
    }

    this.adminService.change_staus_post(id,data).subscribe((res:any)=>{
      console.log(res)
      this.GetAll();
    })
  }
  search(a:any){
    console.log(a.value)
    this.area= a.value;
    this.GetAll();
  }
  remove(id:any){
    this.adminService.remove_post(id).subscribe((res:any)=>{
      console.log(res)
    })
  }
  sortStatus(a:any){
    if(a == 'active'){
      this.status=true;
    }
    else{
      this.status=false;
    }
    this.GetAll();

  }
  pagination(v:any){
    if(v=='-1'){
      this.page= this.page -1;
    }
    if(v=='+1'){
      this.page= this.page +1;
    }
    this.GetAll();
  }
}
