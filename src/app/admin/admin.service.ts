import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL: any = 'https://uyarchicrm.click/v1/BuyerSeller/';
  constructor(private http:HttpClient) { }

  get_Owner_seller(type:any,range:any,page:any){
    return this.http.get(this.baseURL+`getBuyers_And_Owners/`+type+`/${page}/${range}`)
  }
}
