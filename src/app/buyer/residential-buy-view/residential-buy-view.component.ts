import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from 'src/app/services/post-property.service';

@Component({
  selector: 'app-residential-buy-view',
  templateUrl: './residential-buy-view.component.html',
  styleUrls: ['./residential-buy-view.component.css']
})
export class ResidentialBuyViewComponent implements OnInit {
  constructor(private arouter:ActivatedRoute,
    private fb:FormBuilder ,private router:Router, private service:PostPropertyService){

  }
  range=10;
  page=0;
  formatAdd:any
  ngOnInit(): void {

    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.formatAdd=params['formatAdd'];
      console.log(this.formatAdd);
      
    });
    this.service.getSellerDetails(this.page,this.range,this.formatAdd).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
