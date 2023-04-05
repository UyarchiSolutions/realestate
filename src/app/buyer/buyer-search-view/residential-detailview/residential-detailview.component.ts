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

    console.log(this.allFilter,'All filters');


    this.service.formget1(this.id).subscribe((res:any)=>{
      console.log(res,res.intrest);
      this.data=res.values;
      this.interestV=res.intrest;
      this.saveV=res.savedStatus;
    })
   

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
    this.service.formget1(this.id).subscribe((res:any)=>{
      console.log(res);
      this.data=res.values;
    })
  }
  previous(){
    
    this.index= this.index - 1;
    console.log(this.index);

    this.id = this.Alldata[this.index]._id;
    this.service.formget1(this.id).subscribe((res:any)=>{
      console.log(res);
      this.data=res.values;
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
    console.log(sendData,'data back to home')
    const query = new URLSearchParams(sendData).toString();
    this.router.navigateByUrl('/buyer-residential-rent-view?'+ query);
  }
  
  interestV:any;
  interest(id:any){
   
    this.service.interest(id).subscribe((res:any)=>{
      console.log(res);
     
    });
    this.service.formget1(this.id).subscribe((res:any)=>{
      console.log(res,res.intrest);
      this.data=res.values;
      this.interestV=res.intrest;
    })

  }
  saveV:any;
  save(id:any){

    this.service.save(id).subscribe((res:any)=>{
      console.log(res,'save');
    })
    this.service.formget1(this.id).subscribe((res:any)=>{
      console.log(res,res.intrest);
      this.data=res.values;
      this.saveV=res.savedStatus;
    })
    
  }
}
