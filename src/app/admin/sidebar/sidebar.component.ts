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
 
  
}
