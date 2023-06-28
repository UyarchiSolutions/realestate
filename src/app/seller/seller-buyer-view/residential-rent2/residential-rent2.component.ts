import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from 'src/app/services/post-property.service';

@Component({
  selector: 'app-residential-rent2',
  templateUrl: './residential-rent2.component.html',
  styleUrls: ['./residential-rent2.component.css']
})
export class ResidentialRent2Component implements OnInit{

  constructor( private arouter: ActivatedRoute,
    private service: PostPropertyService,
    private router: Router) {}

    id: any;
    video: any;
    checkForview:any;
    data:any=[]
    imageLength:any;
    images: any;
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.checkForview= params['view'];
    });
    this.getalldata();
  }

  getalldata() {
    this.service.formget(this.id).subscribe((res: any) => {
      this.data = res;
      console.log(res);
      this.imageLength=res.image.length
      this.video = res.videos;
      this.images=res.image
    });
  }
  imgSliderCheker: any;
  imgslider(a: any) {
    this.imgSliderCheker = a;
  }
  imgSLnonw() {
    this.imgSliderCheker = '';
  }
  back(){
    window.history.back();
  }
  edit(){
    var postdata = {
      id: this.id,
    };
    var queryString = new URLSearchParams(postdata).toString();
    this.router.navigateByUrl(
      '/start-posting/residentaial-rent-preview?' + queryString
    );
  }
}
