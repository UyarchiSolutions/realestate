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
host2role:any;
host3role:any;
chat_need:any;
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
      this.chat_need=res.Chat_Needed
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
    this.service.get_single_host(this.host2).subscribe((res:any)=>{
      console.log(res)
      this.host2role=res.role
    })
    
  }
  threeHost(e:any){
    this.host3=e.target.value
    console.log(e.target.value)
    this.service.get_single_host(this.host3).subscribe((res:any)=>{
      console.log(res)
      this.host3role=res.role
    })
  }
  submit(){
    let data={
      chat:this.chatName,
      chat_need:this.chat_need,
      allot_host_1:this.host1,
      allot_host_2:this.host2,
      allot_host_3:this.host3,
      hostRole2:this.host2role,
      hostRole3:this.host3role,
    }
    this.service.update_stream(this.id,data).subscribe((res:any)=>{
      console.log(res)
      this.router.navigateByUrl('/my-streams')
    })
  }
}
