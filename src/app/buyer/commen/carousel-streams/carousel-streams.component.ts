import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Env } from 'src/app/environment.dev';

@Component({
  selector: 'carousel-streams',
  templateUrl: './carousel-streams.component.html',
  styleUrls: ['./carousel-streams.component.css']
})
export class CarouselStreamsComponent {
  @Input('images') images: any;
  @Input('index') index: any;
  @Input()all:any;
  baseApi = Env.baseAPi;
  constructor(private router:Router){}
  route(id:any,i:any){
     
    // let  data={
    //     id:id,
    //     index:i}
   
   
    // let query = new URLSearchParams(data).toString()
    // this.router.navigateByUrl(`/buyer/property/view/${id}?`+query);
  }
  routeToDetail(){
    if( this.all.ctype == 'Residential' && this.all.type == 'Sale'){
      let Data={
        id:this.all.id,
        noti:'true',
      }
      const query = new URLSearchParams(Data).toString();
      this.router.navigateByUrl('/buyer-residential-buy-search-view?'+query);
    }
    if(this.all.ctype == 'Residential' && this.all.type == 'Rent'){
      let Data={
        id:this.all.id,
        noti:'true',
      }
      const query = new URLSearchParams(Data).toString();
      this.router.navigateByUrl('/buyer-residential-rent-search-view?'+query);
     }
    if( this.all.ctype == 'Commercial' && this.all.type == 'Rent'){
      let Data={
        id:this.all.id,
        noti:'true',
      }
      const query = new URLSearchParams(Data).toString();
      this.router.navigateByUrl('/buyer-commercial-rent-search-view?'+query);
    }
    if( this.all.ctype == 'Commercial' && this.all.type == 'Sale'){

      let Data={
        id:this.all.id,
        noti:'true',
      }
      const query = new URLSearchParams(Data).toString();
      this.router.navigateByUrl(
        '/buyer-commercial-buy-search-view?' + query);
    }
  }
}
