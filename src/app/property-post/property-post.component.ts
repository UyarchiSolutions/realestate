import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-property-post',
  templateUrl: './property-post.component.html',
  styleUrls: ['./property-post.component.css']
})
export class PropertyPostComponent implements OnInit {

  constructor(private arouter:ActivatedRoute,private service: PostPropertyService,private router:Router){

    this.arouter.queryParams.subscribe((params:any)=>{
      console.log(params);
      this.id=params['id']

    })
    console.log(this.id)
    this.get_all_interst();
    this.GetuserName();
  }
  user:any=[];
  GetuserName(){
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res);
      this.user= res;
    })
  }
  id:any;
  ngOnInit(): void {
   
  }
  data:any;
  get_all_interst(){
    this.service.get_Interest_buyer(this.id).subscribe((res:any)=>{
      console.log(res)
      this.data=res;
    })
  }
  changeps(){
    console.log(this.user._id);
    let data={
      id:this.user._id
    }
    var queryString = new URLSearchParams(data).toString();
    console.log(queryString);
    this.router.navigateByUrl('/changepassword-seller?' + queryString );
  }
  routeToProp(){
    this.router.navigateByUrl('/post-property')
  }
  AccountRoute(){
    this.router.navigateByUrl('/my-account');
  }
  logOut(){
    sessionStorage.clear();
    localStorage.clear();
    Cookie.delete('tokens');
    this.router.navigateByUrl('/');
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

}
