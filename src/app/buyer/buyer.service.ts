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
  getAll_Interested(){
    return this.http.get(this.base_url+`/v1/BuyerSeller/getIntrestedPropertyByUser`,{headers:{auth:Cookie.get('buyer')}})
  }
  getAll_saved(){
    return this.http.get(this.base_url + '/v1/BuyerSeller/getWhishListed_Property_By_Buyer',{headers:{auth:Cookie.get('buyer')}})
  }
  get_landmarks(lat:any,long:any,radius:any,type:any){
   
    return this.http.get(this.base_url+`/v1/BuyerSeller/neighbour_api?lat=${lat}&long=${long}&radius=${radius}&type=${type}`)
  }
  send_alert(data:any){
    return this.http.post(this.base_url+`/v1/propertyAlert`,data,{headers:{auth:Cookie.get('buyer')}})
  }
  get_alert(){
    return this.http.get(this.base_url+'/v1/propertyAlert/getAlerts',{headers:{auth:Cookie.get('buyer')}})
  }
  resend_alert(id:any,data:any){
    return this.http.put(this.base_url+`/v1/propertyAlert/Update/${id}`,data,{headers:{auth:Cookie.get('buyer')}})
  }
  Get_buyer_account(){
    return this.http.get(this.base_url+'/v1/BuyerSeller/'+'user',{ headers: { auth: Cookie.get('buyer') }} )
  }
  get_all_streams(){
    return this.http.get(this.base_url+'/v1/requestStream/getApprovedStream/For/Buyers')
  }
  get_all_notification(){
    return this.http.get(this.base_url+'/v1/BuyerSeller/getNotificationFor/Buyers',{ headers: { auth: Cookie.get('buyer') }})
  }
  send_schedule_res(id:any,status:any){
    const data = {postId:id,status:status}
    return this.http.post(this.base_url+'/v1/BuyerSeller/Reshedule/BuyerReshedule',data,{ headers: { auth: Cookie.get('buyer') }})
  }
  editAccountSeller(data:any){
    return this.http.put(this.base_url+`/v1/BuyerSeller/updateuserProfile`,data,{headers:{auth:Cookie.get('buyer')}})
  }
  //enq send
  send_enquiry(data:any){
    return this.http.post(this.base_url+'/v1/EnquieryRoute',data)
  }
  get_interest_new(type:any,ctype:any,page:any,range:any,index:any){
    return this.http.get(this.base_url+`/v1/BuyerSeller/getIntrestedPropertyByUser/pagination?type=${type}&ctype=${ctype}&page=${page}&range=${range}&ind=${index}`,{headers:{auth:Cookie.get('buyer')}})
  }
  get_interest_new_noind(type:any,ctype:any,page:any,range:any){
    return this.http.get(this.base_url+`/v1/BuyerSeller/getIntrestedPropertyByUser/pagination?type=${type}&ctype=${ctype}&page=${page}&range=${range}`,{headers:{auth:Cookie.get('buyer')}})
  }
  get_save_new(type:any,ctype:any,page:any,range:any,index:any){
    return this.http.get(this.base_url+`/v1/BuyerSeller/getsaved/PropertyByUser/pagination?type=${type}&ctype=${ctype}&page=${page}&range=${range}&ind=${index}`,{headers:{auth:Cookie.get('buyer')}})
  }
  get_save_new_noInd(type:any,ctype:any,page:any,range:any){
    return this.http.get(this.base_url+`/v1/BuyerSeller/getsaved/PropertyByUser/pagination?type=${type}&ctype=${ctype}&page=${page}&range=${range}`,{headers:{auth:Cookie.get('buyer')}})
  }
  report_prop(data:any){
    return this.http.post(this.base_url+'/v1/EnquieryRoute/create/Report',data)
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

