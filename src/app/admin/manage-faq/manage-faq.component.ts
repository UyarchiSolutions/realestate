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
  this.getAllhead()
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
      this.getFaq()
      this.getAllhead()
    })
  }
  addfaq_id(){
    console.log(this.myform.value)
    this.service.send_faq(this.myform.value).subscribe((res:any)=>{
      console.log(res)
      this.getFaq()
      this.getAllhead()
    })
  }
  getFaq(){
    this.service.get_faq().subscribe((res:any)=>{
      console.log(res)
      this.data= res
    })
  }
  getAllhead(){
    this.service.get_head_faq().subscribe((res:any)=>{
      console.log(res)
      this.headdata = res
    })
  }
  show:any=false
  showTab(v:any){
    if(v =='old'){
      this.show=false
    }
    else{
      this.show=true
    }
  }
  editFaq(){

    this.service.edit_faq( this.oneFaq._id,this.myform.value).subscribe((res:any)=>{
      console.log(res)
      this.getFaq()
      this.getAllhead()
    })
    this.showEdit=false;
    this.myform.reset()
    this.oneFaq=[]
  }
  editfaq_id(){
    console.log(this.myform.value)
    this.service.edit_faq(this.oneFaq._id,this.myform.value).subscribe((res:any)=>{
      console.log(res)
      this.getFaq()
      this.getAllhead()
    })
    this.showEdit=false
    this.myform.reset()
    this.oneFaq=[]
  }
  oneFaq:any
  showEdit:any
  patchfaq(v:any){
    this.showEdit=true
    this.oneFaq=v
    this.myform.patchValue({
      heading:v.heading.heading,
    Question:v.Question,
    Answer:v.Answer,
    })
  }
  delete_faq(id:any){
    this.service.delete_faq(id).subscribe((res:any)=>{
      console.log('res')
      this.getFaq()
      this.getAllhead()
    })
  }
}
