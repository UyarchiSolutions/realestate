import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router){

  }
  active=false;
  ngOnInit(): void {
  this.active=true
  }
  active2=false;
  active3 =false;
  active4=false;
  active5=false;
  changeActive(a:any){
    console.log(a);
    switch(a){
        case 1:
      this.active=true;
      this.active2=false;
      this.active3 =false;
      this.active4=false;
      this.router.navigateByUrl('/admin/manage-seller-owner')
      break;
      case 2:
        this.active=false;
        this.active2=true;
        this.active3 =false;
        this.active4=false;
        this.router.navigateByUrl('/admin/manage-buyer-tenant')
        break;
        case 3:
          this.active=false;
          this.active2=false;
          this.active3 =true;
          this.active4=false;
          break;
          case 4:
            this.active=false;
            this.active2=false;
            this.active3 =false;
            this.active4=true;
    }
  }
  
}
