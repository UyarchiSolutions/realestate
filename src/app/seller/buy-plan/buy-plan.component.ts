import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-plan',
  templateUrl: './buy-plan.component.html',
  styleUrls: ['./buy-plan.component.css']
})
export class BuyPlanComponent implements OnInit {
  constructor(private service:SellerService,private router:Router) {}
  ngOnInit(): void {
   this.getPlans()
  }
  data:any=[];
  getPlans(){
    this.service.get_All_Plan().subscribe((res:any)=>{
      console.log(res)
      this.data=res
    })
  }
  Ddata:any=[];
  showDetails=false;
  details(i:any){
    this.Ddata=this.data[i];
    console.log(this.Ddata)
    this.showDetails=true;
  }
  purchase_Plan(id:any){
    let data={
      planId:id
    }
    this.service.purchase_plan(data).subscribe((res:any)=>{
      console.log(res)

    })
  }
  back(){
    this.router.navigateByUrl('my-plans')
  }
}
