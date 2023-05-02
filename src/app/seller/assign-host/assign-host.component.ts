import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from '../seller.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-assign-host',
  templateUrl: './assign-host.component.html',
  styleUrls: ['./assign-host.component.css']
})
export class AssignHostComponent implements OnInit {
constructor(private router:Router,private arouter:ActivatedRoute
  ,private service:SellerService,private fb:FormBuilder){

}
id:any;
name:any;
date:any;
time:any;
chatHost:any=[]
streamHost:any=[]
chatName:any;
streamName:any;
planId:any;
noOfHost:any;
sellerId:any;
host1:any;
host2:any;
host3:any;
form:any=this.fb.group({
  chat:new FormControl(''),

})
  ngOnInit(): void {
     this.arouter.queryParams.subscribe((res:any)=>{
    this.id=res['id']
    console.log(this.id)
   })
   this.getStream()
   this. getSeller()
   this.service.get_chat_host().subscribe((res:any)=>{
    console.log(res,'chat')
    this.chatHost=res
   })
   this.service.get_stream_host().subscribe((res:any)=>{
    console.log(res,'stream')
    this.streamHost=res
   })

  }
  getStream(){
    this.service.get_single_stream(this.id).subscribe((res:any)=>{
      console.log(res)
      this.name=res.streamName;
      this.date=res.streamingDate;
      this.time=res.streamingDate_time;
      this.planId=res.planId;
      this.getPlan();
    })
  }
  getPlan(){
    this.service.get_single_plan(this.planId).subscribe((res:any)=>{
    
      this.noOfHost=res.no_of_host_per_Stream;
      console.log(res,this.noOfHost)
    })
  }
  getSeller(){
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res,'seller')
      this.sellerId=res._id
    })
  }
  chatHostF(e:any){
    console.log(e.target.value)
    this.chatName=e.target.value
  }
  primaryHost(e:any){
    this.host1=e.target.value
    console.log(e.target.value)
  }
  secHost(e:any){
    this.host2=e.target.value
    console.log(e.target.value)
  }
  threeHost(e:any){
    this.host3=e.target.value
    console.log(e.target.value)
  }
  submit(){
    let data={
      chat_need:this.chatName,
      allot_host_1:this.host1,
      allot_host_2:this.host2,
      allot_host_3:this.host3,
    }
    this.service.update_stream(this.id,data).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
