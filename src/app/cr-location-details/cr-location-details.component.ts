import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'ng-google-places-autocomplete';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-cr-location-details',
  templateUrl: './cr-location-details.component.html',
  styleUrls: ['./cr-location-details.component.css']
})
export class CrLocationDetailsComponent {
 
  
    
  
      id:any;
      lat: any = 13.0827;
      long: any = 80.2707;
      latitude:any;
      longtitude:any;
    
      submitted:boolean=false;
      rrlocform:any = this.fb.group({
       
        Landmark: new FormControl ('',Validators.required),
        Pincode: new FormControl ('',[Validators.required,Validators.pattern(/(^|\D)\d{6}($|\D)/),Validators.minLength(6)]),
        BuildingName: new FormControl ('',Validators.required),
        Address: new FormControl ('',Validators.required),
        lat:new FormControl (''),
        long:new FormControl (''),
        addressLoaction: new FormControl('',Validators.required),
        direction:new FormControl ('')
      })
      myAddres: any;
      
      datares: any;
    data: any;
    
    
      constructor(private arouter:ActivatedRoute,
       private fb:FormBuilder ,private router:Router, private service:PostPropertyService,){
    
      }
     
    
      ngOnInit(): void {
    
    
        this.arouter.queryParams.subscribe(params => {
          console.log(params);
          this.id=params['id'];
          console.log(this.id,"this is id from rrp"); 
  
         
        })
        navigator.geolocation.getCurrentPosition((position: any) => {
          this.latitude = position.coords.latitude;
          this.longtitude = position.coords.longitude;
          this.rrlocform.patchValue({
            lat: this.latitude,
            long: this.longtitude
          })
        })
        this.service.formget(this.id).subscribe((res:any)=>{
          this.data= res;
        })
  
        this.updateform();
        }
        routerlink='/start-posting/commercial-rent-location-details';
        OnSubmit(){
    
          this.submitted = true;    
          console.log(this.rrlocform.valid);
          console.log(this.rrlocform.valid ,'is valid');
          if( this.rrlocform.valid ){
          var data={
            area:this.area,
            city:this.city,
            landMark:this.rrlocform.get('Landmark')?.value,
            pineCode:this.rrlocform.get('Pincode')?.value,
            BuildingName:this.rrlocform.get('BuildingName')?.value,
            lat:this.rrlocform.get('lat')?.value,
            long:this.rrlocform.get('long')?.value,
            Address:this.rrlocform.get('Address')?.value,
            buildingDirection:this.rrlocform.get('direction')?.value,
            formatedAddress:this.rrlocform.get('addressLoaction')?.value,
            routeLink:this.routerlink,
          }
          console.log('updated')
            this.service.formput(this.id,data).subscribe((res:any)=>{
    
              console.log(res);
              var postdata ={
                id:res._id
              }
              var queryString = new URLSearchParams(postdata).toString();
              this.router.navigateByUrl('/start-posting/commercial-rent-rental-details?' + queryString);
              console.log(res);
             
             })
            
        }
      }
        updateform(){
          this.service.formget(this.id).subscribe((res:any)=>{
    
            this.datares= res;
            this.rrlocform.patchValue({
    
              Landmark:res.landMark,
              Pincode:res.pineCode,
              BuildingName:res.BuildingName,
              lat:res.lat,
              long:res.long,
              addressLoaction:res.formatedAddress,
              direction:res.buildingDirection,
              Address:res.Address
    
            })
            console.log(res);
            this.latitude=res.lat;
            this.longtitude=res.long;
          })
        }
        routetopreview(){
          this.submitted = true;
          if( this.rrlocform.valid ){
          var data={
            area:this.area,
            city:this.city,
            landMark:this.rrlocform.get('Landmark')?.value,
            pineCode:this.rrlocform.get('Pincode')?.value,
            BuildingName:this.rrlocform.get('BuildingName')?.value,
            lat:this.rrlocform.get('lat')?.value,
            long:this.rrlocform.get('long')?.value,
            Address:this.rrlocform.get('Address')?.value,
            buildingDirection:this.rrlocform.get('direction')?.value,
            formatedAddress:this.rrlocform.get('addressLoaction')?.value
          }
            this.service.formput(this.id,data).subscribe((res:any)=>{});
    
          var postdata = {
            id: this.id,
          };
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/start-posting/commercial-rent-preview?' + queryString);
      
          this.service.formget(this.id).subscribe((res: any) => {
            location.reload();
          });
        }
        }
        back(count: any) {
          if (count == 0) {
            var data = {
              id: this.id,
            };
            var queryString = new URLSearchParams(data).toString();
            this.router.navigateByUrl('/start-posting/commercial-rent-property?' + queryString);
      
            this.service.formget(this.id).subscribe((res: any) => {});
          }
          if (count == 1) {
            var data = {
              id: this.id,
            };
            var queryString = new URLSearchParams(data).toString();
            this.router.navigateByUrl(
              '/start-posting/commercial-rent-location-details?' + queryString
            );
      
            this.service.formget(this.id).subscribe((res: any) => {});
          }
          if (count == 2) {
            var data = {
              id: this.id,
            };
            var queryString = new URLSearchParams(data).toString();
            this.router.navigateByUrl(
              '/start-posting/commercial-rent-rental-details?' + queryString
            );
      
            this.service.formget(this.id).subscribe((res: any) => {});
          }
          if (count == 3) {
            var data = {
              id: this.id,
            };
            var queryString = new URLSearchParams(data).toString();
            this.router.navigateByUrl('/start-posting/commercial-rent-amenities?' + queryString);
      
            this.service.formget(this.id).subscribe((res: any) => {});
          }
          if (count == 4) {
            var postdata = {
              id: this.id,
            };
            var queryString = new URLSearchParams(postdata).toString();
            this.router.navigateByUrl('/start-posting/commercial-rent-gallery?' + queryString);
            this.service.formget(this.id).subscribe((res: any) => {});
          }
          if (count == 5) {
            var postdata = {
              id: this.id,
            };
            var queryString = new URLSearchParams(postdata).toString();
            this.router.navigateByUrl('/start-posting/commercial-rent-add-details?' + queryString);
            this.service.formget(this.id).subscribe((res: any) => {});
          }
        }
          
    
    
        // address for map
        area:any;
        city: any;
        pincode:any;
        handleAddressChange(address: Address) {
          this.rrlocform.get('Pincode')?.reset();
          this.myAddres = address.formatted_address;
          console.log(address, 'this. address');
          this.rrlocform.patchValue({
            addressLoaction: this.myAddres,
          });
      
          this.latitude = address.geometry.location.lat();
          this.longtitude = address.geometry.location.lng();
      
          console.log(this.rrlocform.get('addressLoaction')?.value);
          this.rrlocform.patchValue({
            lat: this.latitude,
            long: this.longtitude,
          });
      
          this.service
            .getAddress(this.latitude, this.longtitude)
            .subscribe((res: any) => {
              console.log(res);
      
              let address = res[0].address_components;
              let area = address.find((component: any) => {
                if (component.types.includes('locality')) {
                  console.log(component.types.includes('locality'), 'locality');
      
                  return component.types.includes('locality');
                }
      
                if (component.types.includes('sublocality_level_1')) {
                  console.log(
                    component.types.includes('sublocality_level_1'),
                    'sublocality_level_1'
                  );
      
                  return component.types.includes('sublocality_level_1');
                }
              }).long_name;
              console.log(area, 'area', 'inside res');
              this.area = area;
              if (this.area) {
              } else {
               
              }
              console.log(address,'jkbkjn')
              this.pincode = address.find((res: any) => {
                return res.types.includes('postal_code');
              });
              this.pincode = this.pincode.long_name ?this.pincode.long_name: null ;
          
          
              if (this.pincode) {
                this.rrlocform.patchValue({
                  Pincode: this.pincode,
                });
              } else {
                this.rrlocform.get('Pincode')?.reset();
                console.log('no pincode')
                
              }
              let city = address.find((component: any) =>
                component.types.includes('administrative_area_level_3')
              ).long_name;
              console.log(city, 'city');
              this.city = city;
            });
      
        } 
      options: any = {
        componentRestrictions: { country: 'IN' }
      }
    
      draggEnded($event: any) {
        this.rrlocform.get('Pincode')?.reset();
        this.rrlocform.patchValue({
          lat: $event.latLng.lat(),
          long: $event.latLng.lng(),
        });
        
        this.service
          .getAddress($event.latLng.lat(), $event.latLng.lng())
          .subscribe((res: any) => {
            console.log(res);
    
            this.myAddres = res[0].formatted_address;
            this.rrlocform.patchValue({
              addressLoaction: this.myAddres,
            });
            let address = res[0].address_components;
            let area = address.find((component: any) => {
              if (component.types.includes('locality')) {
                console.log(component.types.includes('locality'), 'locality');
    
                return component.types.includes('locality');
              }
    
              if (component.types.includes('sublocality_level_1')) {
                console.log(
                  component.types.includes('sublocality_level_1'),
                  'sublocality_level_1'
                );
    
                return component.types.includes('sublocality_level_1');
              }
            }).long_name;
            console.log(area, 'area', 'inside res');
            this.area = area;
            if (this.area) {
            } else {
             
            }
            console.log(address,'jkbkjn')
            this.pincode = address.find((res: any) => {
              return res.types.includes('postal_code');
            });
            this.pincode = this.pincode.long_name ?this.pincode.long_name: null ;
        
        
            if (this.pincode) {
              this.rrlocform.patchValue({
                Pincode: this.pincode,
              });
            } else {
              this.rrlocform.get('Pincode')?.reset();
              console.log('no pincode')
            
            }
            let city = address.find((component: any) =>
              component.types.includes('administrative_area_level_3')
            ).long_name;
            console.log(city, 'city');
            this.city = city;
          });
      }
      parseFloat(value: any) {
        return parseFloat(value);
      }
    
    }  
  
  

