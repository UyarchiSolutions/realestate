import { Component, OnInit } from '@angular/core';
import { SubHostService } from '../sub-host.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'sub-host-header',
  templateUrl: './sub-host-header.component.html',
  styleUrls: ['./sub-host-header.component.css']
})
export class SubHostHeaderComponent implements OnInit {
  data:any=[]
  constructor(private service:SubHostService,private router:Router){

  }
  ngOnInit(): void {
    this.service.sub_host_details().subscribe((res:any)=>{
      console.log(res)
      this.data=res
    })
  }
  routeAcc(){
    this.router.navigateByUrl('/sub-host-account')
  }
  logout(){
    sessionStorage.clear();
    localStorage.clear();
    Cookie.delete('sub-host');
    this.router.navigateByUrl('/sub-host-login');
  }
  
}
