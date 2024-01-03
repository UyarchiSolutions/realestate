import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-rs-additional-details',
  templateUrl: './rs-additional-details.component.html',
  styleUrls: ['./rs-additional-details.component.css']
})
export class RsAdditionalDetailsComponent implements OnInit {
  id: any;
  adform: any = this.fb.group({
    datetostart: new FormControl('', Validators.required),
    contactname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
    cnumber: new FormControl('', [Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
    c2number: new FormControl('', [Validators.pattern('^[6-9]{1}[0-9]{9}$')]),
    paidpropety: new FormControl('', Validators.required),
    Saledeed: new FormControl('', Validators.required),
    occuCerf: new FormControl('', Validators.required),

  })
  today: Date = new Date();
  constructor(
    private fb: FormBuilder,
    private arouter: ActivatedRoute,
    private service: PostPropertyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.arouter.queryParams.subscribe(params => {
      console.log(params);
      this.id = params['id'];
      console.log(this.id, "this is id from sp");

    });
    this.service.formget(this.id).subscribe((res: any) => {
      this.adform.patchValue({
        datetostart: res.availabilityDate,
        contactname: res.contactName,
        cnumber: res.primaryContactNumber,
        c2number: res.secondaryContactNumber,
        paidpropety: res.property_Tax,
        Saledeed: res.sale_Deed_Certificate,
        occuCerf: res.occuPency_certificate,
        comCert: res.Completion_certificate

      })
    })
  }
  routerlink = '/start-posting/residential-sale-add-details';
  submited = false;
  sameNum = false;
  Onsubmit() {
    this.submited = true;
    if (this.adform.get('cnumber')?.value == this.adform.get('c2number')?.value) {
      this.sameNum = true;
    }
    console.log(this.adform.value);
    if (this.adform.valid && !this.sameNum) {
      let data = {
        availabilityDate: this.adform.get('datetostart')?.value,
        contactName: this.adform.get('contactname')?.value,
        primaryContactNumber: this.adform.get('cnumber')?.value,
        secondaryContactNumber: this.adform.get('c2number')?.value,
        property_Tax: this.adform.get('paidpropety')?.value,
        sale_Deed_Certificate: this.adform.get('Saledeed')?.value,
        occuPency_certificate: this.adform.get('occuCerf')?.value,
        Completion_certificate: this.adform.get('comCert')?.value,
        routeLink: this.routerlink
      }
      console.log('update')
      this.service.formput(this.id, data).subscribe((res: any) => {
        var postdata = {
          id: res._id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/start-posting/residential-sale-preview?' + queryString);
        console.log(res);
        console.log(res, 'saved')
      })
    }
  }

  occupancyF() {
    if (this.adform.get('occuCerf')?.value == 'No' || this.adform.get('occuCerf')?.value == 'Dont Know') {
      this.adform.addControl('comCert', new FormControl('', [Validators.required,]));
      console.log('form control added');
    }
    else {
      this.adform.removeControl('comCert');
      console.log('form control delete');
    }
  }

  default() {
    this.sameNum = false;
  }

  back(count: any) {
    if (count == 0) {
      var data = {
        id: this.id
      }
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/start-posting/residential-sale-property?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {


      })
    }
    if (count == 1) {
      var data = {
        id: this.id
      }
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/start-posting/residential-sale-location-details?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {
      })
    }
    if (count == 2) {
      var data = {
        id: this.id
      }
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/start-posting/residential-sale-price-details?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {
      })
    }
    if (count == 3) {
      var data = {
        id: this.id
      }
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/start-posting/residential-sale-amentites?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {
      })
    }
    if (count == 4) {
      var postdata = {
        id: this.id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/residential-sale-gallery?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {
      })
    }
    if (count == 5) {
      var postdata = {
        id: this.id
      }
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/residential-sale-add-details?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {
      })
    }
  }
}
