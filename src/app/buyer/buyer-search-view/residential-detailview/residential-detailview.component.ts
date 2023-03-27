import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPropertyService } from 'src/app/services/post-property.service';

@Component({
  selector: 'app-residential-detailview',
  templateUrl: './residential-detailview.component.html',
  styleUrls: ['./residential-detailview.component.css']
})
export class ResidentialDetailviewComponent implements OnInit {
  allFilter: any;
  constructor(private arouter:ActivatedRoute, private service: PostPropertyService){

  }
  id:any;
  data:any;
  index:any;
  page=0;
  range=20;
  Alldata:any;
  ngOnInit(): void {
    
    this.arouter.queryParams.subscribe((params) => {
      console.log(params);
      this.id = params['id'];
      this.index=params['index'];
     
    });
    this.index =Number(this.index) ;
  // let  number = +this.index;
  console.log(this.index,'index covert num')

    this.allFilter =this.service.Alldata;

    console.log(this.allFilter,'sdfs');
    console.log(this.index,'index',this.id,'id',this.allFilter,'all data');

    this.service.formget(this.id).subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    })
    console.log(this.allFilter,'sdfsdfsdf4524452');

    this.service
    .getSellerDetails(this.page, this.range, this.allFilter)
    .subscribe((res: any) => {
      this.Alldata = res.values;
      console.log(this.Alldata, 'all data in view by id');
    });
  }

  next(){
    this.index= this.index+1;
    console.log(this.index);
    this.id = this.Alldata[this.index]._id;
    this.service.formget(this.id).subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    })
  }
  previous(){
    
    this.index= this.index - 1;
    console.log(this.index);

    this.id = this.Alldata[this.index]._id;
    this.service.formget(this.id).subscribe((res:any)=>{
      console.log(res);
      this.data=res;
    })
  }

}
