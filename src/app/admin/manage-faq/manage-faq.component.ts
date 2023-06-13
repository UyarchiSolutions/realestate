import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manage-faq',
  templateUrl: './manage-faq.component.html',
  styleUrls: ['./manage-faq.component.css']
})
export class ManageFaqComponent implements OnInit{
  constructor(private service: AdminService,private fb:FormBuilder){
    
  }
ngOnInit(): void {
  this.getFaq()
}
data:any=[]
find=false;
ansvalue: any=''
headdata:any=[]
qusvalue:any=[]
  myform:any=this.fb.group({
    heading:new FormControl(''),
    Question:new FormControl(''),
    Answer:new FormControl('')
  })
  addfaq(){
    this.service.send_faq(this.myform.value).subscribe((res:any)=>
    {
      console.log(res)
    })
  }
  getFaq(){
    this.service.get_faq().subscribe((res:any)=>{
      console.log(res)
      this.data= res
    })
  }
}
