import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from 'src/app/services/post-property.service';

@Component({
  selector: 'app-residential-detailview',
  templateUrl: './residential-detailview.component.html',
  styleUrls: ['./residential-detailview.component.css']
})
export class ResidentialDetailviewComponent implements OnInit {
  allFilter: any;
  constructor(private arouter:ActivatedRoute, private service: PostPropertyService, private router: Router){

  }
  id:any;
  data:any;
  index:any;
  page=0;
  range=20;
  Alldata:any;
  formatAdd:any;
        type: any;
        propertType: any;
        BHKType: any;
        rentDetails: any;
        furnishing: any;
        parking: any;
        rentprefer: any;
        propAge:any;

  ngOnInit(): void {
    
    this.arouter.queryParams.subscribe((params) => {
      console.log(params);
      this.id = params['id'];
      this.index=params['index'];
      this.formatAdd=params['formatAdd'];
      this.type=params['type'];
      this.BHKType=params['BHKType'];
      this.rentDetails=params['rentDetails'];
      this.furnishing=params['furnishing'];
      this.parking=params['parking'];
      this.rentprefer=params['rentprefer'];
      this.propAge=params['propAge'];
      this.propertType=params['propertType'];
     
    });
    this.index =Number(this.index) ;
 

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
  backToSearch(){
    let sendData = {
      formatAdd: this.formatAdd,
      type: this.type,
      propertType: this.propertType,
      BHKType: this.BHKType,
      rentDetails: this.rentDetails,
      furnishing: this.furnishing,
      parking: this.parking,
      rentprefer: this.rentprefer,
      propAge: this.propAge,
    };

    const query = new URLSearchParams(sendData).toString();
    this.router.navigateByUrl('/buyer-residential-rent-view?'+ query);
  }
}
