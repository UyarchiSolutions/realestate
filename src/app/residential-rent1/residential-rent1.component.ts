import { formatDate } from '@angular/common';
import { Component,Injectable,OnInit,TemplateRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-residential-rent1',
  templateUrl: './residential-rent1.component.html',
  styleUrls: ['./residential-rent1.component.css']
})
export class ResidentialRent1Component implements OnInit{
  
  id:any;
  date = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');
  
  constructor(  
    private arouter: ActivatedRoute,
    private service: PostPropertyService,
    private router: Router){
  
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
