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
// plans
get_All_Plan(){
  return this.http.get(this.planBase)
}
purchase_plan(id:any){
  return this.http.post(this.planBase+`purchase/plan`,id,{headers:{auth:Cookie.get('tokens')}})
}
get_purchase_plan(){
  return this.http.get(this.planBase+`getPurchased/Planes`,{headers:{auth:Cookie.get('tokens')}})
}
send_stream(data:any){
  return this.http.post(this.baseUrl+`/v1/requestStream`,data,{headers:{auth:Cookie.get('tokens')}})
}
get_allpost_seller(){
  return this.http.get(this.baseUrl+`/v1/BuyerSeller/getSellerPostBySeller`,{headers:{auth:Cookie.get('tokens')}})
}
get_all_stream(){
  return this.http.get(this.baseUrl+'/v1/requestStream/get/Streams',{headers:{auth:Cookie.get('tokens')}})
}
get_single_stream(id:any){
  return this.http.get(this.baseUrl+`/v1/requestStream/`+id)
}
update_stream(id:any,data:any){
  return this.http.put(this.baseUrl+`/v1/requestStream/`+id,data)
}
get_single_plan(id:any){
  return this.http.get(this.planBase+id,{headers:{auth:Cookie.get('tokens')}})
}
//host
  add_Sub_host(data:any){
    return this.http.post(this.baseUrl+`/v1/subHost`,data,{headers:{auth:Cookie.get('tokens')}})
  }
  update_Sub_host(id:any,data:any){
    return this.http.put(this.baseUrl+`/v1/subHost/updateSubHos/`+id,data,{headers:{auth:Cookie.get('tokens')}})
  }
  get_Sub_host(){
    return this.http.get(this.baseUrl+`/v1/subHost/created/subHost`,{headers:{auth:Cookie.get('tokens')}})
  }
  change_status_host(data:any,id:any){
    return this.http.put(this.baseUrl+`/v1/subHost/Active/Inactive/SubHost/`+id,data)
  }
  get_single_host(id:any){
    return this.http.get(this.baseUrl+`/v1/subHost/getSubHostById/`+id)
  }
  get_chat_host(){
    return this.http.get(this.baseUrl+`/v1/subHost/getSubHost/ForChat`,{headers:{auth:Cookie.get('tokens')}})
  }
  get_stream_host(){
    return this.http.get(this.baseUrl+`/v1/subHost/getSubHost/ForStream`,{headers:{auth:Cookie.get('tokens')}})
  }
  view_propery(id:any){
  return this.http.get('https://uyarchicrm.click/v1/BuyerSeller/' + 'getSellerPostById/' + id);
  }
  get_all_interest(){
    return this.http.get(this.baseUrl+'/v1/BuyerSeller/getNotification/Details/intrested',{headers:{auth:Cookie.get('tokens')}})
  }
}
