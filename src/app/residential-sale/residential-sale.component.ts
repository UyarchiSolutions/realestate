import { formatDate } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-residential-sale',
  templateUrl: './residential-sale.component.html',
  styleUrls: ['./residential-sale.component.css']
})
export class ResidentialSaleComponent implements OnInit {

  id:any;
  date = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');
  constructor(
    
    private arouter: ActivatedRoute,
    private service: PostPropertyService,
    private router: Router
  ){

  }
  ngOnInit(): void {

    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.id=params['id'];
      console.log(this.id,"this is id from sp");
      
    });
    this.getalldata();
    
  }
  data:any;

  getalldata(){
    console.log('inside');
    this.service.formget(this.id).subscribe((res:any)=>{
  
      this.data = res;
      console.log(this.data);
    })
    
  }
}
