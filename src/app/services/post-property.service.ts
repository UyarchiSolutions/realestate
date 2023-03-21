import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cookie } from 'ng2-cookies/cookie';

@Injectable({
  providedIn: 'root',
})
export class PostPropertyService {
  baseURL: any = 'https://uyarchicrm.click/v1/BuyerSeller/';

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
    return this.http.get(this.baseURL + 'sellerPost/' + id);
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
    console.log(img);
    return this.http.put(this.baseURL + 'Update/Seller/Post/' + id, img);
  }
  //get data for owner
  getOwnerData(page: any, range: any) {
    return this.http.get(
      this.baseURL + `getApprover/Property?page=${page}&range=${range}`
    );
  }
  getSellerDetails(page: any, range: any, data: any) {
    const queryString = new URLSearchParams(data).toString();
    
    return this.http.get(this.baseURL +`getApprover/Property?page=${page}&range=${range}&${queryString}`);
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
}
