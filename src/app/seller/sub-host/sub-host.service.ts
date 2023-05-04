import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Env } from 'src/app/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SubHostService {

  constructor(private http:HttpClient) {}
  baseUrl:any=Env.baseAPi;

  register(data:any){
   return this.http.post(this.baseUrl+`/v1/subHost/sendOtpTOSubHost`,data)
  }
  verfiy_otp(otp:any){
    return this.http.post(this.baseUrl+'/v1/subHost/verifyOtpforSubhost',otp)
  }
  set_password(id:any,data:any){
    return this.http.put(this.baseUrl+`/v1/subHost/setPassword/`+id,data)
  }
  login(data:any){
    return this.http.post(this.baseUrl+'/v1/subHost/Login',data)
  }
  sub_host_details(){
    return this.http.get(this.baseUrl+'/v1/subHost/getSubHostBy/Login/users',{headers:{auth:Cookie.get('sub-host')}})
  }
  get_all_streams(){
    return this.http.get(this.baseUrl+'/v1/subHost/getStream/By/SubHost',{headers:{auth:Cookie.get('sub-host')}})
  }
  new_password(data:any){
    return this.http.post(this.baseUrl+'/v1/subHost/changePassword' ,data)
  }
  change_password(data:any){
    return this.http.post(this.baseUrl+'/v1/subHost/changePassword/SubHost',data,{headers:{auth:Cookie.get('sub-host')}})
  }
  view_propery(id:any){
    return this.http.get('https://uyarchicrm.click/v1/requestStream/' + 'getStreamById/' + id);
    }
}
