import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cookie } from 'ng2-cookies/cookie';

@Injectable({
  providedIn: 'root',
})

export class PostPropertyService {
  baseURL: any = 'https://uyarchicrm.click/v1/BuyerSeller/';

   Alldata =[];
   AllResForView:any=[];
   //for recent search in buyer residental view
   AllRecentSearchArr:any=[];
   AllAddress:any=[];
   switchTrF:any;
   switchTrS:any;
   GAreaArr:any=[];
   checkCookie:any;
  constructor(private http: HttpClient) {}

  // startposting
  fpost(data: any) {
    return this.http.post(this.baseURL + 'createSellerPost', data, {
      headers: { auth: Cookie.get('tokens') },
    });
  }
  // property details
  formput(id: any, data: any) {
    return this.http.put(
      this.baseURL + 'UpdateSellerPost_As_Raw_Data/' + id,
      data,
      { headers: { auth: Cookie.get('tokens') } }
    );
  }
  // property patch and put
  formget(id: any) {
    return this.http.get(this.baseURL + 'getSellerPostById/' + id);
  }

  formget1(id: any) {
    return this.http.get(this.baseURL + 'sellerPost/' + id,{ headers: { auth: Cookie.get('buyer') }});
  }
  getAddress(lat: any, long: any) {
    const data = {
      lat: lat,
      long: long,
    };
    const queryString = new URLSearchParams(data).toString();
    return this.http.get(
      this.baseURL + 'supplier/getMap/Location?' + queryString
    );
  }
  uploadvid(id: any, vid: any) {
    return this.http.put(this.baseURL + 'VideoUploads/' + id, vid);
  }
  uploadimg(id: any, img: any) {
    // console.log(img);
    return this.http.put(this.baseURL + 'Update/Seller/Post/' + id, img);
  }
  //get data for owner
  getOwnerData(page: any, range: any,find:any)
   {
    return this.http.get(
      
      this.baseURL + `/getPostedProperty/For/IndividualSeller/`+page+`/${range}?finish=${find}`,{ headers: { auth: Cookie.get('tokens') }});
  }
  getDraft(){
    return this.http.get(this.baseURL +'get/DraftBy_user',{ headers: { auth: Cookie.get('tokens') }});
  }
  deleteDraft(){
    return this.http.get(this.baseURL +'delete/DraftBy/user',{ headers: { auth: Cookie.get('tokens') }});
  }
  getSellerDetails(page: any, range: any, data: any,body:any) {
    const queryString = new URLSearchParams(data).toString();

    this.checkCookie= this.findCookie();
    if(this.checkCookie) {
      // console.log('from service','auth', Cookie.get('buyer'));
      return this.http.post(this.baseURL +`getApprover/Property?page=${page}&range=${range}&${queryString}`,body,{ headers: { auth: Cookie.get('buyer') }});
    }
    
    else{
      // console.log('from service','no auth');
    return this.http.post(this.baseURL +`getApprover/Property?page=${page}&range=${range}&${queryString}`,{sta:"tghnhgj"});
    }
  }
  myAcount() {
    return this.http.get(this.baseURL + `BuyerSeller/Profile`, {
      headers: { auth: Cookie.get('tokens') },
    });
  }
  AddresForBuyer(location: any) {
    const queryString = new URLSearchParams(location).toString();
    return this.http.get(
      this.baseURL + '/Places/AutoComplete?input=' + queryString
    );
  }
  userStatusCheck( id:any){
    
    return this.http.get(this.baseURL + `AddViewed_Data/`+id, { headers: { auth: Cookie.get('buyer') }});
  }
  findCookie() {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith('buyer=')) {
        return true; // the cookie exists and has a value
      }
    }
    return false; // the cookie does not exist or has no value
  }
  interest(id:any){

    return this.http.get(this.baseURL + 'giveInterest/'+id,{ headers: { auth: Cookie.get('buyer') }});
  }
  save(id:any){
    return this.http.get(this.baseURL + 'WhishList/'+id,{ headers: { auth: Cookie.get('buyer') }});
  }
  RecentSearch(data:any){
    return this.http.post('https://uyarchicrm.click/v1/RecentSearch',data,{ headers: { auth: Cookie.get('buyer') }} );
  }
  RecentSearchGet(){
    return this.http.get('https://uyarchicrm.click/v1/RecentSearch/Recentlysearched',{ headers: { auth: Cookie.get('buyer') }} );
  }
  Get_buyer_account(){
    return this.http.get(this.baseURL+'user',{ headers: { auth: Cookie.get('buyer') }} )
  }
  send_ALLres(data:any){
    this.AllResForView = data
  }
  get_ALLres(){
    return this.AllResForView
  }
  get_Interest_buyer(id:any){
   
    return this.http.get(this.baseURL +'PropertyDeatails/after/intrested/'+id)
  }
  update_Interest_buyer(id:any,data:any){
   
    return this.http.put(this.baseURL +'updateBuyerRelation/'+id,data,{ headers: { auth: Cookie.get('tokens') }})
  }
  remove_img(id:any,data:any){
    return this.http.put(this.baseURL + 'Delete/Property/image/'+id,data)
  }
  remove_vid(id:any){
    return this.http.delete(this.baseURL + `Delete/property/video/`+id)
  }
}
