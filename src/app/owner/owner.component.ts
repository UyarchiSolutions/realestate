import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  data:any;
 
  constructor(private service: PostPropertyService,
    private router:Router){

  }
  id:any;
  ngOnInit(): void {

    this.service.getOwnerData().subscribe((res:any)=>{

      this.data = res.values;

      console.log(res.values);
    })
  }
  editForm(id:any,rentType:any,placeType:any){
    
    if(rentType== 'rent' && placeType == 'Residential'){


      var postdata = {
        id: id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/residential-rent?' + queryString
      );
    }
    if(rentType== 'sale' && placeType == 'Residential'){


      var postdata = {
        id: id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/residential-sale-property?' + queryString
      );
    }
    if(rentType== 'rent' && placeType == 'Commercial'){


      var postdata = {
        id: id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/commercial-rent-property?' + queryString
      );
    }
    if(rentType== 'sale' && placeType == 'Commercial'){


      var postdata = {
        id: id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/commercial-sale-property?' + queryString
      );
    }

  }
  startpostRoute(){
    this.router.navigateByUrl('/start-posting');
  }
  logOut(){
    sessionStorage.clear();
    localStorage.clear();
    Cookie.delete('tokens');
    this.router.navigateByUrl('/');

    
  }
 
}
