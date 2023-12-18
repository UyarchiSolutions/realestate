import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-manage-demo-user-posts',
  templateUrl: './manage-demo-user-posts.component.html',
  styleUrls: ['./manage-demo-user-posts.component.css']
})
export class ManageDemoUserPostsComponent implements OnInit {
  constructor(private arouter:ActivatedRoute,private service:AdminService){}
  id:any
  userName:any
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((res: any) => {
      this.userName = res['user'];
      this.id= res['id'];
      
    });
    this.get_details(this.id)
  }
showProp: any;
  window!: Window;
sendType(arg0: number,arg1: string) {

}
get_details(id:string){
  this.service.demo_user_posts(id).subscribe((res:any)=>
  {
    this.Alldata=res
    console.log(res)
  })
}
search(_t32: HTMLInputElement) {

}
sortStatus(arg0: string) {

}
data: any=[]
Alldata: any=[]
page: any;
pagination(arg0: string) {

}
totalPageCount: any;
remove(arg0: any) {

}
changeStatus(arg0: any,arg1: any) {

}
assignData(i:any,show:HTMLButtonElement){
  let v = Number(i)
  this.data=this.Alldata[v]
  if(this.data){
    show.click()
  }
}
copy_success: any = false;
copy_now() {
  this.copy_success = true;
  navigator.clipboard.writeText('https://seller.indiapropertyexpo.live/stream/' + this.data._id);

  setTimeout(() => {
    this.copy_success = false;
  }, 2000);
}
streamData:any=[]
assignStream(id:any,show:HTMLButtonElement){
  console.log(id)
  this.service.demo_stream_details(id).subscribe((res:any)=>{
    console.log(res)
    this.streamData = res
    show.click()
  })
}
  addStream(id:any){
    this.service.demo_request_new_stream(id).subscribe((res:any)=>{
      alert("Stream added successfully")
    })
  }

}
