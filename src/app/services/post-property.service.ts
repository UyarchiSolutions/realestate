import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cookie } from 'ng2-cookies/cookie';
import { Env } from '../environment.dev';

@Injectable({
  providedIn: 'root',
})
export class PostPropertyService {
  baseURL: any = Env.baseAPi;

  Alldata = [];
  AllResForView: any = [];
  //for recent search in buyer residental view
  AllRecentSearchArr: any = [];
  AllAddress: any = [];
  switchTrF: any;
  switchTrS: any;
  GAreaArr: any = [];
  checkCookie: any;
  constructor(private http: HttpClient) {}

  // startposting
  fpost(data: any) {
    return this.http.post(
      this.baseURL + '/v1/BuyerSeller/createSellerPost',
      data,
      {
        headers: { auth: Cookie.get('tokens') },
      }
    );
  }
  // property details
  formput(id: any, data: any) {
    return this.http.put(
      this.baseURL + '/v1/BuyerSeller/UpdateSellerPost_As_Raw_Data/' + id,
      data,
      { headers: { auth: Cookie.get('tokens') } }
    );
  }
  // property patch and put
  formget(id: any) {
    return this.http.get(
      this.baseURL + '/v1/BuyerSeller/getSellerPostById/' + id
    );
  }

  formget1(id: any) {
    return this.http.get(this.baseURL + '/v1/BuyerSeller/sellerPost/' + id, {
      headers: { auth: Cookie.get('buyer') },
    });
  }
  getAddress(lat: any, long: any) {
    const data = {
      lat: lat,
      long: long,
    };
    const queryString = new URLSearchParams(data).toString();
    return this.http.get(
      this.baseURL + '/v1/BuyerSeller/supplier/getMap/Location?' + queryString
    );
  }
  uploadvid(id: any, vid: any) {
    return this.http.put(
      this.baseURL + '/v1/BuyerSeller/VideoUploads/' + id,
      vid
    );
  }
  uploadimg(id: any, img: any) {
    // console.log(img);
    return this.http.put(
      this.baseURL + '/v1/BuyerSeller/Update/Seller/Post/' + id,
      img
    );
  }
  //get data for owner
  getOwnerData(page: any, range: any, find: any) {
    return this.http.get(
      this.baseURL +
        `/v1/BuyerSeller/getPostedProperty/For/IndividualSeller/` +
        page +
        `/${range}?finish=${find}`,
      { headers: { auth: Cookie.get('tokens') } }
    );
  }
  getDraft() {
    return this.http.get(this.baseURL + '/v1/BuyerSeller/get/DraftBy_user', {
      headers: { auth: Cookie.get('tokens') },
    });
  }
  deleteDraft() {
    return this.http.get(this.baseURL + '/v1/BuyerSeller/delete/DraftBy/user', {
      headers: { auth: Cookie.get('tokens') },
    });
  }
  getSellerDetails(page: any, range: any, data: any, body: any) {
    const queryString = new URLSearchParams(data).toString();

    this.checkCookie = this.findCookie();
    if (this.checkCookie) {
      // console.log('from service','auth', Cookie.get('buyer'));
      return this.http.post(
        this.baseURL +
          `/v1/BuyerSeller/getApprover/Property?page=${page}&range=${range}&${queryString}`,
        body,
        { headers: { auth: Cookie.get('buyer') } }
      );
    } else {
      // console.log('from service','no auth');
      return this.http.post(
        this.baseURL +
          `/v1/BuyerSeller/getApprover/Property?page=${page}&range=${range}&${queryString}`,
        { sta: 'tghnhgj' }
      );
    }
  }
  getSellerDetails2(page: any, range: any, data: any, body: any, areaArr: any) {
    const queryString = new URLSearchParams(data).toString();
    console.log(areaArr);
   
    let add1: any = areaArr.length > 0 ? '&formatAdd=' + areaArr[0] : '';
    let add2: any = areaArr.length > 1 ? '&formatAdd=' + areaArr[1] : '';
    let add3: any = areaArr.length > 2 ? '&formatAdd=' + areaArr[2]: '';
    let formatAdd = add1 + add2 + add3;
    console.log(add3, add2, add1, '234236745267342783', formatAdd);
    this.checkCookie = this.findCookie();
    if (this.checkCookie) {
      // console.log('from service','auth', Cookie.get('buyer'));
      return this.http.get(
        this.baseURL +
          `/v1/BuyerSeller/getApprover/Property/new?page=${page}&range=${range}&${queryString}${formatAdd}`,
        { headers: { auth: Cookie.get('buyer') } }
      );
    } else {
      // console.log('from service','no auth');
      return this.http.get(
        this.baseURL +
          `/v1/BuyerSeller/getApprover/Property/new?page=${page}&range=${range}&${queryString}`
      );
    }
  }

  myAcount() {
    return this.http.get(this.baseURL + `/v1/BuyerSeller/BuyerSeller/Profile`, {
      headers: { auth: Cookie.get('tokens') },
    });
  }
  AddresForBuyer(location: any) {
    const queryString = new URLSearchParams(location).toString();
    return this.http.get(
      this.baseURL + '/v1/BuyerSeller//Places/AutoComplete?input=' + queryString
    );
  }
  userStatusCheck(id: any) {
    return this.http.get(
      this.baseURL + `/v1/BuyerSeller/AddViewed_Data/` + id,
      { headers: { auth: Cookie.get('buyer') } }
    );
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
  interest(id: any) {
    return this.http.get(this.baseURL + '/v1/BuyerSeller/giveInterest/' + id, {
      headers: { auth: Cookie.get('buyer') },
    });
  }
  save(id: any) {
    return this.http.get(this.baseURL + '/v1/BuyerSeller/WhishList/' + id, {
      headers: { auth: Cookie.get('buyer') },
    });
  }
  RecentSearch(data: any) {
    return this.http.post(this.baseURL + '/v1/RecentSearch', data, {
      headers: { auth: Cookie.get('buyer') },
    });
  }
  RecentSearchGet() {
    return this.http.get(this.baseURL + '/v1/RecentSearch/Recentlysearched', {
      headers: { auth: Cookie.get('buyer') },
    });
  }
  Get_buyer_account() {
    return this.http.get(this.baseURL + '/v1/BuyerSeller/user', {
      headers: { auth: Cookie.get('buyer') },
    });
  }
  send_ALLres(data: any) {
    this.AllResForView = data;
  }
  get_ALLres() {
    return this.AllResForView;
  }
  get_Interest_buyer(id: any) {
    return this.http.get(
      this.baseURL + '/v1/BuyerSeller/PropertyDeatails/after/intrested/' + id
    );
  }
  update_Interest_buyer(id: any, data: any) {
    return this.http.put(
      this.baseURL + '/v1/BuyerSeller/updateBuyerRelation/' + id,
      data,
      { headers: { auth: Cookie.get('tokens') } }
    );
  }
  remove_img(id: any, data: any) {
    return this.http.put(
      this.baseURL + '/v1/BuyerSeller/Delete/Property/image/' + id,
      data
    );
  }
  remove_vid(id: any) {
    return this.http.delete(
      this.baseURL + `/v1/BuyerSeller/Delete/property/video/` + id
    );
  }
  send_enquiry(data:any){
    return this.http.post(this.baseURL+'/v1/EnquieryRoute',data)
  }
  get_nearby(placeId:any){
    return this.http.get(this.baseURL+'/v1/BuyerSeller/get/LocalityBy/LocationId/'+placeId)
  }
}
