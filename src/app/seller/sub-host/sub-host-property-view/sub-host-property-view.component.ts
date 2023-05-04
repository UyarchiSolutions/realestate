import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';
import { SubHostService } from '../sub-host.service';

@Component({
  selector: 'app-sub-host-property-view',
  templateUrl: './sub-host-property-view.component.html',
  styleUrls: ['./sub-host-property-view.component.css']
})
export class SubHostPropertyViewComponent implements OnInit {
  allFilter: any;
  constructor(private service:SubHostService,private arouter:ActivatedRoute,private router:Router){

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
    this.service.view_propery(this.id).subscribe((res:any)=>{
      console.log(res,res[0].posts)
      this.data=res[0].posts
      this.user=res[0].user
      this.Alldata=res[0]

    })
  }
  back(){
    this.router.navigate(['/sub-host-streams']);
  }
}
