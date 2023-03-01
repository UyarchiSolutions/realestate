import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Env } from '../environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  baseUrl=Env.baseAPi;
  constructor(private http:HttpClient) { }

  emailVerification(data:any){
   return this.http.post(this.baseUrl+"/v1/BuyerSeller/login", data);
  }
  submitOtp(data:any){
    return this.http.post(this.baseUrl+"/v1/BuyerSeller/verify", data);
  }
registation(data:any){
  return this.http.post(this.baseUrl+"/v1/BuyerSeller/Register",data)
}
sendOtptoMobile(number:any){
  return this.http.post(this.baseUrl+`/v1/BuyerSeller/Send-OTP`,number)
}
getOtp(otp:any){
  return this.http.post(this.baseUrl+`/v1/BuyerSeller/VerifyOtpRealEstate`,otp)
}
sentOtp(mobile:any){
  return this.http.post(this.baseUrl+`/v1/BuyerSeller/Send-OTP`,mobile)
}
login(otp:any){
  return this.http.post(this.baseUrl+`/v1/BuyerSeller/LoginWithOtp`,otp)
}
createPassword(id:any,data:any){
  return this.http.put(this.baseUrl+`/v1/BuyerSeller/createPassword/${id}`,data)
}
Submit(data:any){
  return this.http.post(this.baseUrl+`/v1/BuyerSeller/Login/verified`,data)
}
forgot_otp(data:any){
  return this.http.post(this.baseUrl+`/v1/BuyerSeller/getOtpWithRegisterNumber`,data)
}
otp_send(data:any){
  return this.http.post(this.baseUrl+`/v1/BuyerSeller/OTPVerify`,data)
}
changePassword(id:any,data:any){
  return this.http.put(this.baseUrl+`/v1/BuyerSeller/updatePassword/${id}`,data)
}
myAcount(){
  return this.http.get(this.baseUrl+`/v1/BuyerSeller/BuyerSeller/Profile`,{headers:{auth:Cookie.get('tokens')}})
}
changePasswordForbuyer(data:any){
  return this.http.post(this.baseUrl+`/v1/BuyerSeller/changePassword`,data,{headers:{auth:Cookie.get('tokens')}})
 }
 deactiveMyaccount(){
  return this.http.get(this.baseUrl+`/v1/BuyerSeller/DeActive_UserAccount`,{headers:{auth:Cookie.get('tokens')}})
}
}
