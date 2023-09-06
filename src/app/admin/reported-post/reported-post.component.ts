import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-reported-post',
  templateUrl: './reported-post.component.html',
  styleUrls: ['./reported-post.component.css']
})
export class ReportedPostComponent implements OnInit{
  constructor(private service:AdminService){}
  ngOnInit(): void {
    this.getAll()
  }
  data:any=[]
  getAll(){
    this.service.get_All_reports().subscribe((res:any)=>{
      this.data= res;
      console.log(res)    })
  }
}
