import { Injectable } from '@angular/core';
import { Env } from '../environment.dev';
import { HttpClient } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  base_url=Env.baseAPi;
  constructor(private http:HttpClient) { }
  loginAPi(data:any){
    return this.http.post(this.base_url+`/v1/BuyerSeller/Login/Buyer`,data)
  }
  loginOtp(data:any){
    return this.http.post(this.base_url+`/v1/BuyerSeller/LoginWithOtp
    `,data)
  }
  registation(data:any){
    return this.http.post(this.base_url+"/v1/BuyerSeller/createBuyer",data)
  }
  sendOtptoMobile(number:any){
    return this.http.post(this.base_url+`/v1/BuyerSeller/Send-OTP`,number)
  }
  getOtp(otp:any){
    return this.http.post(this.base_url+`/v1/BuyerSeller/VerifyOtpRealEstate`,otp)
  }
  sentOtp(mobile:any){
    return this.http.post(this.base_url+`/v1/BuyerSeller/Send-OTP`,mobile)
  }
  login(otp:any){
    return this.http.post(this.base_url+`/v1/BuyerSeller/LoginWithOtp`,otp)
  }
  createPassword(id:any,data:any){
    return this.http.put(this.base_url+`/v1/BuyerSeller/createPassword/${id}`,data)
  }
  Submit(data:any){
    return this.http.post(this.base_url+`/v1/BuyerSeller/Login/verified`,data)
  }
  forgot_otp(data:any){
    return this.http.post(this.base_url+`/v1/BuyerSeller/getOtpWithRegisterNumber`,data)
  }
  otp_send(data:any){
    return this.http.post(this.base_url+`/v1/BuyerSeller/OTPVerify`,data)
  }
  changePassword(id:any,data:any){
   
    return this.http.put(this.base_url+`/v1/BuyerSeller/forgot/passowrd/${id}`,data)
  }
  myAcount(){
    return this.http.get(this.base_url+`/v1/BuyerSeller/BuyerSeller/Profile`,{headers:{auth:Cookie.get('buyer')}})
  }
  changePasswordForbuyer(data:any){
   return this.http.post(this.base_url+`/v1/BuyerSeller/changePassword`,data,{headers:{auth:Cookie.get('buyer')}})
  }
  deactiveMyaccount(){
    return this.http.get(this.base_url+`/v1/BuyerSeller/DeActive_UserAccount`,{headers:{auth:Cookie.get('buyer')}})
  }
  post_for_active(data:any){
    return this.http.post(this.base_url+`/v1/BuyerSeller/activate/deActivatedusers`,data)
  }
}
