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
  disable_report_notification(id:any){
    return this.http.get(this.baseApi+'/v1/BuyerSeller/Disable/Reported/Property/'+id)
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
  edit_faq(id:any,data:any){
    return this.http.put(this.baseApi+'/v1/EnquieryRoute/updateFaq/'+id,data)
  }
  get_head_faq(){
    return this.http.get(this.baseApi+'/v1/EnquieryRoute/getHeading/Only')
  }
  delete_faq(id:any){
    return this.http.get(this.baseApi+'/v1/EnquieryRoute/RemoveFAQ/'+id)
  }
  get_All_reports(){
    return this.http.get(this.baseApi+'/v1/EnquieryRoute/getAll/Report')
  }
   get_property(id: any) {
    return this.http.get(
      this.baseApi + '/v1/BuyerSeller/getSellerPostById/' + id
    );
  }
  get_landmarks(lat:any,long:any,radius:any,type:any){
   
    return this.http.get(this.baseApi+`/v1/BuyerSeller/neighbour_api?lat=${lat}&long=${long}&radius=${radius}&type=${type}`)
  }
  
  calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): any {
    const earthRadiusKm = 6371; // Radius of the Earth in kilometers
    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);
  
    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = earthRadiusKm * c;
    let dis =String(distance)
    dis =dis.substring(0, 3)
    return dis;
  }
  
   degreesToRadians(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }
}
