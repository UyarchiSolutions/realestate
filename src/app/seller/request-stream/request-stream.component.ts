import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-request-stream',
  templateUrl: './request-stream.component.html',
  styleUrls: ['./request-stream.component.css']
})
export class RequestStreamComponent implements OnInit {

  constructor(private service:SellerService,private fb:FormBuilder){

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

  myform:any=this.fb.group({
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
   this.get_allpost()
  }
  monNum:any;
  getAllPlans(){
    this.service.get_purchase_plan().subscribe((res:any)=>{
      console.log(res);
      this.AllData=res
      this.planNames=this.AllData.map((res:any)=>{
       
        return res.planName;
      })
      // console.log(this.planNames);
    })
  }
  getMonth(){
    let today = new Date().toString();
    let date = today.split(' ')
    this.month = date[1];
    this.date = date[2];
    this.changeMonth()
    console.log(today,'6546541',date, new Date())
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
    console.log(currentMonth,currentYear,'fdgdfgfdgfd',this.monthArr.indexOf(month))
   
    
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
      console.log(this.monChang)
    }
    this.dateChang=this.myform.get('dateDate')?.value;
    console.log(this.dateChang,'real val')
    this.dateChang=this.dateChang.toString();

    if(!(this.dateChang.length >=2)){

      this.dateChang= '0'+this.dateChang;
      console.log(this.dateChang,'date')
    }

    this.dateStr= String(this.myform.get('dateYear')?.value+'-'+ this.monChang+'-'+this.dateChang)
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
     }
     console.log(data)
    this.service.send_stream(data).subscribe((res:any)=>{
      console.log(res)
    })
  }
  Allpost:any=[]
  get_allpost(){
    this.service.get_allpost_seller().subscribe((res:any)=>{
      console.log(res)
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
   
    console.log(this.postId,this.onepost)
    this.showDetails=true
  }
  getPlanId(id:any){
   let plan = id.target.value;
    this.planId=this.AllData.find((res:any)=>{
      if(res.planName == plan){
        return res._id
      }
    })
    this.planId=this.planId._id
    console.log(this.planId)
  }

}
