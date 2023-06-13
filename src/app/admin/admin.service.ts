import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Env } from '../environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL: any =  Env.baseAPi+'/v1/BuyerSeller/';
  planBase:any= Env.baseAPi+'/v1/StreamPlan/';
  streamBase:any= Env.baseAPi+'/v1/requestStream/';
  baseApi = Env.baseAPi
  constructor(private http:HttpClient) { }

  get_All_user(type:any,range:any,page:any,role:any){
    return this.http.get(this.baseURL+`getBuyers_And_Owners/`+type+`/${page}/${range}?role=${role}`)
  }
  de_active_user(id:any){
    return this.http.get(this.baseURL+`de/ActivatedAccount/${id}`)
  }
  re_active_user(id:any){
    return this.http.get(this.baseURL +`ActivatedAccount/${id}`)
  }
  get_All_post(status:any,page:any,range:any,comOrRes:any,type:any,area:any){
    return this.http.get(this.baseURL+`getSellerRenter/POST/ForAdmin?activeStatus=${status}&page=${page}&range=${range}&propType=${comOrRes}&Type=${type}&area=${area}`)
  }
  change_staus_post(id:any,data:any){
    return this.http.put(this.baseURL+'post/active/inactive/'+id,data)
  }
  remove_post(id:any){
   
    return this.http.get(this.baseURL+'Remove/Post/'+id)
  }
  add_Plan(data:any){
    return this.http.post(this.planBase,data)
  }
  get_All_Plan(page:any,range:any){
    return this.http.get(this.planBase+`fetch/StreamPlanes/${page}/${range}`)
  }
  change_status_plan(id:any,data:any){
    return this.http.put(this.planBase+`active/inactive/${id}`,data)
  }
  get_All_stream(){
    return this.http.get(this.streamBase+`getStreams/Admin/Side`)
  }
  change_status_stream(id:any,data:any){
    return this.http.put(this.streamBase+`AdminStream/Approved/Cancel/`+id,data)
  }
  get_post_stream(id: any) {
    return this.http.get(this.streamBase + 'getStreamById/' + id);
  }
  send_enq(data:any){
    return this.http.post(this.baseApi+'/v1/EnquieryRoute',data)
  }
  get_All_enq(page:any,range:any){
    return this.http.get(this.baseApi+`/v1/EnquieryRoute?page=${page}&range=${range}`)
  }
  send_enq_ans(data:any){
    return this.http.post(this.baseApi+'/v1/EnquieryRoute/sendReplay/Enquiry',data)
  }
  enq_reject(id:any){
    return this.http.get(this.baseApi+'/v1/EnquieryRoute/remove/'+id)
  }
  send_faq(data:any){
    return this.http.post(this.baseApi+'/v1/EnquieryRoute/create/faq',data)
  }
  get_faq(){
    return this.http.get(this.baseApi+'/v1/EnquieryRoute/create/faq')
  }
}
