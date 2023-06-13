import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Editor, Toolbar } from 'ngx-editor';
import { toHTML } from 'ngx-editor';
@Component({
  selector: 'app-manage-enquiry',
  templateUrl: './manage-enquiry.component.html',
  styleUrls: ['./manage-enquiry.component.css']
})
export class ManageEnquiryComponent implements OnInit {
  constructor(private fb:FormBuilder,private service:AdminService){

  }
  page=0
  range=10
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['link'],
    ['ordered_list', 'bullet_list'],

  ];

  enqform:any=this.fb.group({
    Name:new FormControl(''),
    email:new FormControl(''),
    phoneNumber:new FormControl(''),
    Enquiry:new FormControl('')
  })
  data:any
  ngOnInit(): void {
  this.getAll()
  this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  SubmitEnq(){
    this.service.send_enq(this.enqform.value).subscribe((res:any)=>{
      console.log(res)
      this.getAll()
    })
  }
  rejectEnq(id:any){
    this.service.enq_reject(id).subscribe((res:any)=>{
      console.log(res)
      this.getAll()
    })
  }
  getAll(){
    this.service.get_All_enq(this.page,this.range).subscribe((res:any)=>{
      console.log(res,res.values)
      this.data=res.values
    })
  }
  showEnq:any=[]
  answer:any;
  viewenq(i:any){
    this.showEnq= this.data[i]
  }
  html:any=''
  send(){
    console.log(this.answer,'answer')
    this.html = toHTML(this.answer)
    console.log(this.html)
  }
  finalsend(){
    this.send();
    let data={
      _id:this.showEnq._id,
     Answer:this.html,
     email:this.showEnq.email,
     Enquiry:this.showEnq.Enquiry,
     date:this.showEnq.date
    }
    this.service.send_enq_ans(data).subscribe((res:any)=>{
      console.log(res)
      this.html=''
      this.showEnq=[]
      this.getAll()
    })
  }
}
