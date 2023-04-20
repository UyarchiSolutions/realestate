import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL: any = 'https://uyarchicrm.click/v1/BuyerSeller/';
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
}
