import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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
  type:any;
  propertType:any;
  BHKType:any;

  filter:any = this.fb.group({
    propertType : new FormControl(''),
  })

  ngOnInit(): void {

    this.arouter.queryParams.subscribe(params => {
      
      this.formatAdd=params['formatAdd'];
      this.type=params['type'];
      this.propertType=params['propertType'];
      this.BHKType=params['BHKType'];
    
      
    });
    let data ={
      formatAdd:this.formatAdd,
      type:this.type,
      propertType:this.propertType,
      BHKType:this.BHKType
    }
    console.log(data)
    this.service.getSellerDetails(this.page,this.range,data).subscribe((res:any)=>{
      console.log(res)
      this.data= res.values;
      console.log(this.data,'data')
    })
    if(this.propertType){
      this.SelectedFilters.push(this.propertType);
      this.proptArr.push(this.propertType);
    };
    if(this.BHKType)this.SelectedFilters.push(this.BHKType);

    
  }
  SelectedFilters:any[]=[];
  FbhkArr:any[]=[];
  proptArr:any[]=[];
  bhkArr: any[]=
  ['1 Rk','1 BHK','2 BHK','3 BHK','4 BHK','5 BHK','6 BHK'
  ,'7 BHK','8 BHK','9 BHK','10+ BHK'] ;
  
  updateFilter(v: any) {
   
    if (v.target.checked) {
      var val = v.target.value;
      this.SelectedFilters.push(val);
    } else {
      let index = this.SelectedFilters.findIndex((res: any) => res == v.target.value);
      if (index != -1) {
        this.SelectedFilters.splice(index, 1);
      }
    }
    

    console.log('updted',this.SelectedFilters);
//prop arr 


if( v.target.value ==  'Gated Community' || v.target.value ==  'Individual House/Villa' || v.target.value ==  'Apartment'){

    if(  this.proptArr.findIndex((res: any) => res == v.target.value) == -1 ){
    
      this.proptArr.push(v.target.value);
      console.log(this.proptArr,"proparr, update filter"); 
     }
    else{
      let index = this.proptArr.findIndex((res: any) => res == v.target.value);
      
        this.proptArr.splice(index, 1);
        console.log('prop removed',this.proptArr) 
    }}
    
//bhk arr
if(this.bhkArr.findIndex((res:any)=>{  return res == v.target.value ;}) != -1){
    if(this.bhkArr.findIndex((res:any)=>{  return res == v.target.value ;}) != -1){

      this.FbhkArr.push(v.target.value);
      console.log(this.FbhkArr,"final bhk arr");
    }
    else{
      let index = this.FbhkArr.findIndex((res: any) => res == v.target.value);
      
        this.FbhkArr.splice(index, 1);
        console.log('prop removed',this.FbhkArr)
    }
 }
    let data ={
      formatAdd:this.formatAdd,
      type:this.type,
      propertType:this.proptArr,
      BHKType:this.FbhkArr
    }
    console.log(this.proptArr,'proparr');
    this.service.getSellerDetails(this.page,this.range,data).subscribe((res:any)=>{
     
      this.data= res.values;
      console.log(this.data,'data')
    })
  }

  deleteFilter(v:any){

    let index = this.SelectedFilters.indexOf(v);
    
    if (index > -1) {
    this.SelectedFilters.splice(index, 1);
    

    }
    console.log('deleted',this.SelectedFilters);

    if(v == 'Gated Community' || 'Individual House/Villa' || 'Apartment'){
      
      if (index > -1) {
        this.proptArr.splice(index, 1);
        }
        console.log(this.proptArr);
    }


    let data ={
      formatAdd:this.formatAdd,
      type:this.type,
      propertType:this.proptArr,
      BHKType:this.BHKType
    }

    this.service.getSellerDetails(this.page,this.range,data).subscribe((res:any)=>{
     
      this.data= res.values;
      console.log(this.data,'data')
    })
    
  }

  is_chckked(val:any){
      console.log('is checked is working');
      let index=this.SelectedFilters.findIndex((a:any)=>a==val);

      if(val == 'Gated Community' || 'Individual House/Villa' || 'Apartment'){
        let i =this.proptArr.findIndex((a:any)=>a==val);
        if(i ==-1){
          return false;
        }
        else{
          return true;
        }
      }
      if(index==-1){
        return false;
      }
      else{
        return true;
      }

     
  }
 

}
