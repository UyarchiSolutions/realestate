import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';
import { Cookie } from 'ng2-cookies';
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-property-post',
  templateUrl: './property-post.component.html',
  styleUrls: ['./property-post.component.css']
})
export class PropertyPostComponent implements OnInit {

  constructor(private arouter:ActivatedRoute,private service: PostPropertyService,private router:Router,private fb:FormBuilder){

  }
  propId:any;
  user:any=[];
  add:any;
  GetuserName(){
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res);
      this.user= res;
    })
  }
  id:any;
  mindate:any
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.id=params['id']
      this.add=params['add']
    
    })
    console.log(this.id)
    this.get_all_interst();
    this.GetuserName();

    this.currentDate.setTime(this.currentDate.getTime() + this.oneDayInMillis);
    this.mindate = this.currentDate.toISOString().substring(0, 10);
    
  }
  currentDate: Date = new Date();
  oneDayInMillis: number = 24 * 60 * 60 * 1000;
  data:any=[]
  get_all_interst(){
    this.service.get_Interest_buyer(this.id).subscribe((res:any)=>{
      console.log(res)
      this.data=res;
      this.propId=res[0].propertyId
      this.get_prop(this.propId)
    })
  }
  get_prop(id:any){
    this.service.formget(id).subscribe((res:any)=>{
      console.log(res)
      this.add = res.area+','+res.city
    })
  }

  update_status(){
    var data={
      type:'Shcedule'
     
    }
    this.service.update_Interest_buyer(this.id,data).subscribe((res:any)=>{

    })
  }
  reject_status(id:any){
    var data={
      type:'Rejected'
    }
    this.service.update_Interest_buyer(id,data).subscribe((res:any)=>{
      console.log(res,'rejected')
      this.get_all_interst();
    })
  }
  change_status(id:any,v:string,postid:any){
    var data={
      type:v,
      postId:postid
    }
    this.service.update_Interest_buyer(id,data).subscribe((res:any)=>{
      console.log(res,'rejected')
      this.get_all_interst();
    })
  }
  sschedule=false;
  stime=false;
  sAllpop=false;
  checkid:any
  showAll(id:any){
    this.checkid=id
    this.sAllpop= !this.sAllpop;
    this.sschedule= true
  }

  showTime(){
    this.stime= true
    this.sschedule= false
  }
  myform:any = this.fb.group({
    Date1:new FormControl(),
    time1:new FormControl()
   } )
  closeAll(date:any,time:any,id:any,postId:any,buyerId:any){
    console.log(this.myform.value)
    var data={
      type:'Shcedule',
      schedule:date.value,
      scheduletime:time.value,
      postId:postId,
      buyerId:buyerId
    }
    this.service.update_Interest_buyer(id,data).subscribe((res:any)=>{
      console.log(res)
      this.get_all_interst();
      
    })
    console.log(data)
    this.stime=false
    this.sschedule=false
    this.sAllpop=false;
  }
  today: Date = new Date();
  showD=false;
  showdate(v:HTMLInputElement){
    this. showD= !this.showD;
 
  }
  backToRoute(){
    console.log('clicked')
    this.router.navigate(['/owner'])
    }
    
}
