import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-demo-user-posts',
  templateUrl: './manage-demo-user-posts.component.html',
  styleUrls: ['./manage-demo-user-posts.component.css']
})
export class ManageDemoUserPostsComponent implements OnInit {
  constructor(private arouter:ActivatedRoute){}
  id:any
  userName:any
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((res: any) => {
      this.userName = res['user'];
      this.id= res['id'];
      
    });
  }
showProp: any;
  window!: Window;
sendType(arg0: number,arg1: string) {

}
search(_t32: HTMLInputElement) {

}
sortStatus(arg0: string) {

}
data: any=[]
page: any;
pagination(arg0: string) {

}
totalPageCount: any;
remove(arg0: any) {

}
changeStatus(arg0: any,arg1: any) {

}

}
