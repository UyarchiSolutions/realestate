import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Env } from 'src/app/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SubHostService {

  constructor(private http:HttpClient) { }
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
}
