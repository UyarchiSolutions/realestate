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
  displaycount = 0;
  page = 0;
  pagetotal = 0;
  totalcount = 0;
  range =10;
  ngOnInit(): void {

    this.GetData();
   this.GetuserName();
  }
  find=true;
  checkRangeAndPag:any;
  GetData(){
    this.service.getOwnerData(this.page,this.range,this.find).subscribe((res:any)=>{

      console.log(res);

      this.data = res.values;
      this.checkRangeAndPag =res.total;

      if(this.page == 0){

      let page = res.total/ (this.page + 1) ;
      
        console.log(res.total,'range',this.range);
      this.displaycount = Math.ceil(page/ this.range) ;

      console.log(page,'dc',this.page + 1);

      
      }
      
    })
  }
  user:any;
  GetuserName(){
    this.service.myAcount().subscribe((res:any)=>{
      console.log(res);
      this.user= res;
    })
  }

  editForm(id:any,rentType:any,placeType:any){
    
    if(rentType== 'Rent' && placeType == 'Residential'){


      var postdata = {
        id: id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/start-posting/residential-rent?' + queryString
      );
    }
    if(rentType== 'Sale' && placeType == 'Residential'){


      var postdata = {
        id: id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/start-posting/residential-sale-property?' + queryString
      );
    }
    if(rentType== 'Rent' && placeType == 'Commercial'){


      var postdata = {
        id: id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/start-posting/commercial-rent-property?' + queryString
      );
    }
    if(rentType== 'Sale' && placeType == 'Commercial'){


      var postdata = {
        id: id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/start-posting/commercial-sale-property?' + queryString
      );
    }

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


  pagination(val: any) {

    if (val == 1) {
      this.page = this.page + 1;
    }
    if (val == 0) {
      if (this.page != 0) {
        this.page = this.page - 1;
      }
    }
    this.GetData();
  }
  displaySelect:boolean=false;
  Setrange(val:any){
    this.displaySelect=true;
    this.range= val.target.value;

    console.log(this.range,'inside set range');

    this.GetData();
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
  routeToProp(){
    this.router.navigateByUrl('/post-property')
  }
  routeToView(id:any,rentType:any,placeType:any){
    let check = 'true';
    if(rentType== 'Rent' && placeType == 'Residential'){

     
      var postdata = {
        id: id,
        check:check
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/rr-view?' + queryString
      );
    }
    if(rentType== 'Sale' && placeType == 'Residential'){


      var postdata = {
        id: id,
        check:check
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/rs-view?' + queryString
      );
    }
    if(rentType== 'Rent' && placeType == 'Commercial'){


      var postdata = {
        id: id,
        check:check
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/cr-view?' + queryString
      );
    }
    if(rentType== 'Sale' && placeType == 'Commercial'){


      var postdata = {
        id: id,
        check:check
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl(
        '/cs-view?' + queryString
      );
    }

  }
  getInterest(_id:any,add:any){
    var send ={
      id:_id,
      add:add
    }
    console.log(send)
    var query = new URLSearchParams(send).toString();
    this.router.navigateByUrl('/owner/interest-post?'+ query);
  }
}
