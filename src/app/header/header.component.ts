import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isDisplay=false;
  constructor(private router:Router) {
    router.events.forEach((url:any) => {
      if (url instanceof NavigationStart) {
        if (url['url'] == '/sellerLogin'){
          console.log("working")
          this.isDisplay=true;
        }else{
          this.isDisplay=false;
          console.log("not working")
        }
      }
    })
   }

  ngOnInit(): void {
  }

}
