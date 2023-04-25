import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-my-plans',
  templateUrl: './my-plans.component.html',
  styleUrls: ['./my-plans.component.css']
})
export class MyPlansComponent implements OnInit{

  constructor(private service: SellerService){

  }
  ngOnInit(): void {
   this.getAll()
  }
  data:any=[]
  getAll(){
    this.service.get_purchase_plan().subscribe((res:any)=>{
      console.log(res)
      this.data= res
    })
  }
  
}
