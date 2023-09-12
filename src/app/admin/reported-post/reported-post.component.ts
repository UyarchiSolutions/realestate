import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reported-post',
  templateUrl: './reported-post.component.html',
  styleUrls: ['./reported-post.component.css'],
})
export class ReportedPostComponent implements OnInit {
  constructor(private service: AdminService,private router:Router) {}
  ngOnInit(): void {
    this.getAll();
  }
  data: any = [];
  getAll() {
    this.service.get_All_reports().subscribe((res: any) => {
      this.data = res;
      console.log(res);
    });
  }
  repDres:any=[]
  showReport(report:any){
    this.repDres = report
  }
  route(Rtype:any,type:any,id:string){
   
    if(Rtype =='Residential' && type =='Rent'){
      let data={
        id:id
      }
      const query= new URLSearchParams(data).toString()
      this.router.navigateByUrl('/admin/residential-rent?'+ query)
    }
    if(Rtype =='Residential' && type =='Sale'){
      let data={
        id:id
      }
      const query= new URLSearchParams(data).toString()
      this.router.navigateByUrl('/admin/residential-sale?'+ query)
    }
    if(Rtype =='Commercial' && type =='Sale'){
      let data={
        id:id
      }
      const query= new URLSearchParams(data).toString()
      this.router.navigateByUrl('/admin/commercial-sale?'+ query)
    }
    if(Rtype =='Commercial' && type =='Rent'){
      let data={
        id:id
      }
      const query= new URLSearchParams(data).toString()
      this.router.navigateByUrl('/admin/commercial-rent?'+ query)
    }
  }
  disable(id:any){
    this.service.disable_report_notification(id).subscribe((res:any)=>{
      console.log(res)
      this.getAll()
    })
  }
}
