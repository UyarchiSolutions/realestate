import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-stream',
  templateUrl: './request-stream.component.html',
  styleUrls: ['./request-stream.component.css']
})
export class RequestStreamComponent implements OnInit {

  constructor(private service:SellerService,private fb:FormBuilder,private arouter:ActivatedRoute,
    private route:Router) {

  }
  AllData:any=[];
  planNames:any=[];
  month:any;
  monthArr:any=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  hourArr:any=['01','02','03','04','05','06','07','08','09','10','11','12']
  currHour:any=[];
  currMin:any=[];
  minArr:any=['00',15,30,45,]
  currentMon:any=[];
  date:any=[];
  dateArr:any=[];
  lang:any=['Tamil','English','Malayalam','Kannada','Telugu','Hindi']
  planId:any;
  id:any;

  myform:any=this.fb.group({
    choosePlan:new FormControl(),
    streamName: new FormControl(),
    dateDate: new FormControl(),
    dateMon: new FormControl(),
    dateYear: new FormControl(),
    timeHr: new FormControl(),
    timeMin: new FormControl(),
    timeZone: new FormControl(),
    primCom: new FormControl(),
    secCom: new FormControl(),
    des: new FormControl(),
  })
  ngOnInit(): void {
   this.getAllPlans();
   this. getMonth();
   this.get_allpost();
   this.arouter.queryParams.subscribe((res:any)=>{
    this.id=res['id']
    console.log(this.id)
   })
  }
  monNum:any;
  getSingle(){
    if(this.id){
    this.service.get_single_stream(this.id).subscribe((res:any)=>{
      console.log(res)
    
      this.getPostid(res.postId);
      this.getPlanName(res.planId);
      this.planId=res.planId
      this.myform.patchValue({
        streamName: res.streamName,
        primCom:res.primaryCommunication,
        secCom:res.secondaryCommunication,
        des:res.description,
        choosePlan:this.planName,
        timeMin:res.minute,
        timeHr:res.hour,
        dateMon:res.month,
        dateYear:res.year,
        dateDate:res.day,
        timezone:res.zone,
      })
    })
   }
  }
  getAllPlans(){
    this.service.get_purchase_plan().subscribe((res:any)=>{
      // console.log(res);
      this.getSingle();
      this.AllData=res
      this.planNames=this.AllData.map((res:any)=>{
       
        return res.planName;
      })
      console.log(this.planNames,this.AllData);
    })
  }
  getMonth(){
    let today = new Date().toString();
    let date = today.split(' ')
    this.month = date[1];
    this.date = date[2];
    this.changeMonth()
    // console.log(today,'6546541',date, new Date())
  }
  changeMonth(){
    let index = this.monthArr.indexOf(this.month)
    // console.log(index)
    for(let i = index; i <= 11; i++){
      this.currentMon.push(this.monthArr[i])
    }
    // console.log(this.currentMon)
    this.check()
  }
  check(){
    const today = new Date();
    const currentMonth = today.getMonth();
    this.monNum=currentMonth
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    const datesArray = [];
    
    for (let i =  Number(this.date); i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const dateNumber = date.getDate();
      this.dateArr.push(dateNumber);
    }
    
    // console.log(this.dateArr);
    this.currentTime()
  }
  changedate( month:any){
    console.log(month,month.target.value)
    let month1=month.target.value
    this.dateArr=[];
    const today = new Date();
    const thisMonth = today.getMonth();
   
    const currentMonth = this.monthArr.indexOf(month1)
    this.monNum=currentMonth;
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    // console.log(currentMonth,currentYear,'fdgdfgfdgfd',this.monthArr.indexOf(month))
   
    
    if(thisMonth == currentMonth){
      console.log('this month')
      for (let i =  Number(this.date); i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const dateNumber = date.getDate();
        this.dateArr.push(dateNumber);
      }
      
      // console.log(this.dateArr);
    }
    else{
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const dateNumber = date.getDate();
      this.dateArr.push(dateNumber);
    }
    
    // console.log(this.dateArr);
   }
  }
  
  currentTime(){
    const date = new Date();
    let  currentTime = date.toLocaleTimeString().split(':');
    console.log(currentTime)
    let hour = currentTime[0];
    let min = currentTime[1];
    
  }
  dateStr:any;
  monChang:any;
  dateChang:any;
  submit(){
    
    this.monChang= Number(this.monNum+1);
    this.monChang= this.monChang.toString()
   
    if(!(this.monChang.length >=2)){
      this.monChang= '0'+this.monChang;
      // console.log(this.monChang)
    }
    this.dateChang=this.myform.get('dateDate')?.value;
    // console.log(this.dateChang,'real val')
    this.dateChang=this.dateChang.toString();

    if(!(this.dateChang.length >=2)){

      this.dateChang= '0'+this.dateChang;
      // console.log(this.dateChang,'date')
    }

    this.dateStr= String(this.myform.get('dateYear')?.value+'-'+ this.monChang+'-'+this.dateChang)
    if(this.id){
    
      let data={
        planId:this.planId,
        hour:this.myform.get('timeHr')?.value,
        minute:this.myform.get('timeMin')?.value,
       timeMode:this.myform.get('timeZone')?.value,
       streamingDate:this.dateStr,
       streamName:this.myform.get('streamName')?.value,
       postId:this.postId,
       primaryCommunication:this.myform.get('primCom')?.value,
       secondaryCommunication:this.myform.get('secCom')?.value,
       description:this.myform.get('des')?.value,
       year:this.myform.get('dateYear')?.value,
       month:this.myform.get('dateMon')?.value,
       day:this.myform.get('dateDate')?.value,
       zone:this.myform.get('timeZone')?.value
       }
       console.log('form update',data)
      this.service.update_stream(this.id,data).subscribe((res:any)=>{
        console.log(res)
        this.route.navigateByUrl('/my-streams')
      })
    }
    else{
    let data={
      planId:this.planId,
      hour:this.myform.get('timeHr')?.value,
      minute:this.myform.get('timeMin')?.value,
     timeMode:this.myform.get('timeZone')?.value,
     streamingDate:this.dateStr,
     streamName:this.myform.get('streamName')?.value,
     postId:this.postId,
     primaryCommunication:this.myform.get('primCom')?.value,
     secondaryCommunication:this.myform.get('secCom')?.value,
     description:this.myform.get('des')?.value,
     year:this.myform.get('dateYear')?.value,
     month:this.myform.get('dateMon')?.value,
     day:this.myform.get('dateDate')?.value,
     zone:this.myform.get('timeZone')?.value
     }
     console.log(data)
    this.service.send_stream(data).subscribe((res:any)=>{
      console.log(res)
      this.route.navigateByUrl('/my-streams')
    })
  }
  }
  Allpost:any=[]
  get_allpost(){
    this.service.get_allpost_seller().subscribe((res:any)=>{
      // console.log(res)
      this.Allpost=res
    })
  }
  showprop=false;
  showDetails=false;
  onepost:any=[]
  showPost(){
    this.showprop=!this.showprop
  }
  postId:any
  getPostid(id:any){
    this.postId=id
    this.onepost= this.Allpost.filter((res:any)=>{
      return res._id==this.postId
    })
   
    console.log(this.postId,this.onepost,'post id')
    this.showDetails=true
  }
  getPlanId(id:any){
   let plan = id.target.value;
    this.planId= plan;
    console.log(this.planId)
  }
  planName:any;

  getPlanName(id:any){
    console.log(id)

    this.planName=this.AllData.filter((res:any)=>{
     
      if(res._id == id){
        return res.planName
      }
    })
    this.planName=this.planName[0].planName
    // console.log(this.planName)
  }

}
