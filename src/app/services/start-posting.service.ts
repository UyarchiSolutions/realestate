import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StartPostingService {

  baseURL : any ="https://uyarchicrm.click/v1/";

  constructor( private http:HttpClient) { }

  fpost( prop:any, type:any ){
   return this.http.post(this.baseURL + "BuyerSeller/createSellerPost"+ prop,type )
  }
}
