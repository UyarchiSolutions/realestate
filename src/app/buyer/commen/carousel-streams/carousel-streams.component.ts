import { Component, Input } from '@angular/core';
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
  constructor(){}
  route(id:any,i:any){
     
    // let  data={
    //     id:id,
    //     index:i}
   
   
    // let query = new URLSearchParams(data).toString()
    // this.router.navigateByUrl(`/buyer/property/view/${id}?`+query);
  }
}
