import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-streams',
  templateUrl: './my-streams.component.html',
  styleUrls: ['./my-streams.component.css']
})
export class MyStreamsComponent implements OnInit {
  constructor(private service:SellerService,private router:Router) {}
  ngOnInit(): void {
   this.getAll()
  }
  data:any=[];
  getAll(){
    this.service.get_all_stream().subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    })
  }
  editStream(id:any){
    let data={
      id:id
    }
    let query = new URLSearchParams(data).toString()
    this.router.navigateByUrl('/my-streams/my-add-stream?'+ query)
  }
  assignHost(id:any){
    let data={
      id:id
    }
    let query = new URLSearchParams(data).toString()
    this.router.navigateByUrl('/my-streams/assign-host?'+ query)
  }
  remove(id:any){
    this.service.cancel_stream(id).subscribe((res:any)=>{
      this.getAll()
    })
  }
  view(rentType:any,placeType:any,id:any){
    if(rentType== 'Rent' && placeType == 'Residential'){


      var postdata = {
        id: id,
        view:'ok'
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/rr-view?' + queryString
      );
    }
    if(rentType== 'Sale' && placeType == 'Residential'){


      var data = {
        id: id,
        view:'ok'
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl(
        '/rs-view?' + queryString
      );
    }
    if(rentType== 'Rent' && placeType == 'Commercial'){


      var postdata1 = {
        id: id,
        view:'ok'
      };
      var queryString = new URLSearchParams(postdata1).toString();
      this.router.navigateByUrl(
        '/cr-view?' + queryString
      );
    }
    if(rentType== 'Sale' && placeType == 'Commercial'){


      var postdata2 = {
        id: id,
        view:'ok'
      };
      var queryString = new URLSearchParams(postdata2).toString();
      this.router.navigateByUrl(
        '/cs-view?' + queryString
      );
    }

  }

}
