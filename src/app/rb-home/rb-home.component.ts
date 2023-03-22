import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';



@Component({
  selector: 'app-rb-home',
  templateUrl: './rb-home.component.html',
  styleUrls: ['./rb-home.component.css']
})

export class RbHomeComponent  implements OnInit{
  constructor(private arouter:ActivatedRoute,
    private fb:FormBuilder ,private router:Router, private service:PostPropertyService){

  }
  range=20;
  page=0;
  formatAdd:any;
  data:any;
  ngOnInit(): void {

    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.formatAdd=params['formatAdd'];
      console.log(this.formatAdd);
      
    });
    this.service.getSellerDetails(this.page,this.range,this.formatAdd).subscribe((res:any)=>{
      console.log(res)
      this.data= res.values;
      console.log(this.data,'data')
    })
  }
}
