import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-plan',
  templateUrl: './manage-plan.component.html',
  styleUrls: ['./manage-plan.component.css']
})
export class ManagePlanComponent implements OnInit {

  constructor(private service:AdminService){

  }
  ngOnInit(): void {
   this.getAllPlans()
  
  }
  data:any=[];
  range=10;
  page=0;
  totalpage=0;
  getAllPlans(){
    this.service.get_All_Plan(this.page,this.range).subscribe((res:any)=>{
      console.log(res)
      this.data=res.values;
      this.totalpage=res.total;
    })
  }
  change_staus(id:any,status:any){
    let data;
    if(status){
      data={
        type :'inactive'
    }
    }
    else{
      data={
        type :'active'
      }
    }
    this.service.change_status_plan(id,data).subscribe((res:any)=>{
      console.log(res)
      this.getAllPlans()
    })
  }
}
