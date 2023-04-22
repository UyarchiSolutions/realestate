import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { PostPropertyService } from 'src/app/services/post-property.service';

@Component({
  selector: 'seller-admin-sidebar',
  templateUrl: './seller-admin-sidebar.component.html',
  styleUrls: ['./seller-admin-sidebar.component.css']
})
export class SellerAdminSidebarComponent implements OnInit {
  
  user:any=[]
  @Input() Url:any;

  constructor(private router:Router,private service: PostPropertyService) {}
  ngOnInit(): void {
   this.GetuserName();
  }
  GetuserName(){
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res);
      this.user= res;
    })
  }
  startpostRoute(){
    this.router.navigateByUrl('/start-posting');
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
  changeps(){
    console.log(this.user._id);
    let data={
      id:this.user._id
    }
    var queryString = new URLSearchParams(data).toString();
    console.log(queryString);
    this.router.navigateByUrl('/changepassword-seller?' + queryString );
  }

}
