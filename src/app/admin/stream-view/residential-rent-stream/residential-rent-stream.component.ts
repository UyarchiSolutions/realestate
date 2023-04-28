import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residential-rent-stream',
  templateUrl: './residential-rent-stream.component.html',
  styleUrls: ['./residential-rent-stream.component.css']
})
export class ResidentialRentStreamComponent implements OnInit {

  allFilter: any;
  constructor(private service:AdminService,private arouter:ActivatedRoute,private router:Router){

  }
  id:any;
  data:any=[]
  index:any;
  page=0;
  range=20;
  Alldata:any=[]
  user:any={}

       
       

  ngOnInit(): void {
  this.arouter.queryParams.subscribe((params:any)=>{
    this.id=params['id'];
  })
  this.getAll();
  }
  getAll(){
    this.service.get_post_stream(this.id).subscribe((res:any)=>{
      console.log(res,res[0].posts)
      this.data=res[0].posts
      this.user=res[0].user
      this.Alldata=res[0]

    })
  }
  back(){
    this.router.navigate(['/admin/stream-approval']);
  }

}



