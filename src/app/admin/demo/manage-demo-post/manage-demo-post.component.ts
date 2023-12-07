import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-manage-demo-post',
  templateUrl: './manage-demo-post.component.html',
  styleUrls: ['./manage-demo-post.component.css']
})
export class ManageDemoPostComponent implements OnInit{
  constructor(private service:AdminService) {

  }
  ngOnInit(): void {
    this.service.get_demo_users().subscribe((res:any)=>{
      console.log("response", res);
      this.data= res
    })
  }
  type='';
  comOrRes='';
  showProp:any;
  data:any=[
    {created:'10',
    userName:'Ruban',
    mobile:'6688332211',
  email:'ruban@gmail.com'},
  ]
  sendType(a:any,show:any){
    switch(a){
      case 1:
        this.type='Rent';
        this.comOrRes='Commercial';
        break;
      case 2:
          this.type='Sale';
          this.comOrRes='Commercial';
          break;
      case 3:
          this.type='Rent';
          this.comOrRes='Residential';
          break;
      case 4:
          this.type='Sale';
          this.comOrRes='Residential';
          break;
    }
    this.showProp=show;
    // this.GetAll();
  }
  search(v:any){

  }
}
