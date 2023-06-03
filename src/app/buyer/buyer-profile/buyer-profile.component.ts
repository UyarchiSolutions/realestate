import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {
  constructor(private router:Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  toEdit(){
    this.router.navigate(['/buyer-profile-edit']);
  }
  
}
