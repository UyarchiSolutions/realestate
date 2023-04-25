import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Env } from '../environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  baseUrl=Env.baseAPi;
  planBase:any='https://uyarchicrm.click/v1/StreamPlan/';
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
   
  return this.http.put(this.baseUrl+`/v1/BuyerSeller/forgot/passowrd/${id}`,data)
}
myAcount(){
  return this.http.get(this.baseUrl+`/v1/BuyerSeller/BuyerSeller/Profile`,{headers:{auth:Cookie.get('tokens')}})
}
changePasswordForseller(data:any){
  return this.http.post(this.baseUrl+`/v1/BuyerSeller/changePassword`,data,{headers:{auth:Cookie.get('tokens')}})
 }
 deactiveMyaccount(){
  return this.http.get(this.baseUrl+`/v1/BuyerSeller/DeActive_UserAccount`,{headers:{auth:Cookie.get('tokens')}})
}
editAccountSeller(data:any){
  return this.http.put(this.baseUrl+`/v1/BuyerSeller/updateuserProfile`,data,{headers:{auth:Cookie.get('tokens')}})
}

get_All_Plan(){
  return this.http.get(this.planBase)
}
purchase_plan(id:any){
  return this.http.post(this.planBase+`purchase/plan`,id,{headers:{auth:Cookie.get('tokens')}})
}
get_purchase_plan(){
  return this.http.get(this.planBase+`getPurchased/Planes`,{headers:{auth:Cookie.get('tokens')}})
}

}
