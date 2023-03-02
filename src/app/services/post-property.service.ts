import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostPropertyService {

  baseURL : any ="https://uyarchicrm.click/v1/";

  constructor( private http:HttpClient) { }

  // startposting
  fpost( data:any ){
   return this.http.post(this.baseURL + "BuyerSeller/createSellerPost",data )
  }
  // property details 
  formput(id:any,data:any){
    return this.http.put(this.baseURL + "BuyerSeller/UpdateSellerPost_As_Raw_Data/" + id ,data);
  }
  // property patch and put
  formget(id:any){
    return this.http.get(this.baseURL+"BuyerSeller/sellerPost/"+id)
  }
  getAddress(lat:any,long:any){
    const data={
      lat:lat,
      long:long
    }
    const queryString =new URLSearchParams(data).toString()
    return this.http.get(this.baseURL+`supplier/getMap/Location?`+queryString)
  }

}
