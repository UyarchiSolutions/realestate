import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-residential-rent',
  templateUrl: './residential-rent.component.html',
  styleUrls: ['./residential-rent.component.css'],
})
export class ResidentialRentComponent implements OnInit {
  id: any;
  video: any;
  date = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');

  constructor(
    private arouter: ActivatedRoute,
    private service: PostPropertyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.arouter.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    this.getalldata();
    this.finalfunction();
    // this.video=this.data.videos;
  }
  data: any;
  lastone = 'final';
  finalfunction() {
    var postdata = {
      final: this.lastone,
    };

    this.service.formput(this.id, postdata).subscribe((res: any) => {
      console.log(res.final);
    });
  }
  getalldata() {
    this.service.formget(this.id).subscribe((res: any) => {
      this.data = res;
      console.log(res);
      this.video = res.videos;
    });
  }

  imgSliderCheker: any;
  imgslider(a: any) {
    this.imgSliderCheker = a;
  }
  imgSLnonw() {
    this.imgSliderCheker = '';
  }
  Redirect(count: any) {
    if (count == 0) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/residential-rent?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 1) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl(
        '/residentaial-rent-location-details?' + queryString
      );

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 2) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl(
        '/residentaial-rent-rental-details?' + queryString
      );

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 3) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/residentaial-rent-amentites?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 4) {
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-gallery?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 5) {
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/residentaial-rent-details?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {});
    }
  }
  ownerRoute(){
    this.router.navigateByUrl('/owner?')
  }
}
