import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';
import { Cookie } from 'ng2-cookies/cookie';

@Component({
  selector: 'app-rr-gallery',
  templateUrl: './rr-gallery.component.html',
  styleUrls: ['./rr-gallery.component.css'],
})
export class RrGalleryComponent implements OnInit {
  gallery!: any[];
  gallaryview!: any[];
  data: any;
  imageform: any = this.fb.group({
    images: this.fb.array([
      this.fb.control(null),
      this.fb.control(null),
      this.fb.control(null),
      this.fb.control(null),
      this.fb.control(null),
    ]),
  });
  imagePreview: string[] = [];
  videoSrc!: string;
  errmsg!: string;
  viderrmsg!: string;
  selectedfile!: File;
  id: any;

  constructor(
    private fb: FormBuilder,
    private arouter: ActivatedRoute,
    private service: PostPropertyService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((params) => {
      console.log(params);
      this.id = params['id'];
      console.log(this.id, 'this is id from sp');
    });
  this.getall()
  }
  getall(){
    this.service.formget(this.id).subscribe((res: any) => {
      this.data = res;
      console.log(res.image, 'res image');
      console.log(res);
    });
  }
  // changeImage(img: any) {
  //   this.gallery = [];
  //   this.gallaryview = [];
  //   var filesAmount = img.target.files.length;
  //   if(img.target.files.length <=5 ){
  //   for (let i = 0; i < filesAmount && i <= 5; i++) {
  //     const res = img.target.files[i];
  //     this.gallery.push(res);
  //     var reader = new FileReader();
  //     reader.readAsDataURL(res);
  //     reader.onload = (event) => {
  //       this.gallaryview.push((<FileReader>event.target).result);
  //     }
  //     console.log(this.gallaryview);
  //   }
  // }
  // }

  onFileselect(e: any) {
    this.imageform.get('images').reset();
    this.imagePreview = [];
    const files = e.target.files;
    if (files.length <= 5) {
      this.errmsg = '';
      for (let i = 0; i < files.length && i <= 5; i++) {
        const file = files[i];

        const images = this.imageform.get('images') as FormArray;
        images.at(i).setValue(file);

        const reader = new FileReader();
        reader.onload = () => {
          this.imagePreview[i] = reader.result as string;

          console.log(this.imagePreview);
        };
        reader.readAsDataURL(file);
      }
    } else {
      e.target.value = '';
      this.errmsg = 'Upload 5 images only';
      return;
    }
  }
  removeimg(index: number) {
    console.log(
      'remove working',
      this.imageform.get('images').get(index.toString())
    );

    this.imageform.get('images').get(index.toString()).setValue(null);
    this.imagePreview.splice(index, 1);
    const input = document.getElementById('imageinput') as HTMLInputElement;
    input.value = '';
  }

  onvidselect(e: any) {
    const file = e.target.files[0];
    if (file.size > 40 * 1024 * 1024) {
      this.viderrmsg = 'File size must be in below 40mb';
      return;
    }
    this.viderrmsg = '';
    this.selectedfile = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.videoSrc = reader.result as string;
    };
    reader.readAsDataURL(file);
    console.log(this.selectedfile);
  }
  emptyfile!: File;

  removevid() {
    this.videoSrc = '';
    this.viderrmsg = '';
    this.selectedfile = this.emptyfile;
    console.log(this.selectedfile);
    const input = document.getElementById('videoinput') as HTMLInputElement;
    input.value = '';
  }
  routerlink='/start-posting/residentaial-rent-gallery';
  submited=false;

  async submit() {
   
    this.submited=true;
    this. backImgError=''
    console.log( (this.videoSrc && this.imagePreview.length > 0) ,
    (this.data.image != ''  && this.data.videos.length > 0 )
   , (this.imagePreview.length > 0 && this.data.videos.length  > 0 )
     , (this.data.image != '' && this.videoSrc) ,'if cond' )

    //  console.log(this.data.image ,this.data.videos,this.data.image != '',this.data.videos.length >0,'2')
    // console.log(this.imagePreview,this.data.videos,this.imagePreview.length > 0 , this.data.videos  > 0,'3')

    if( (this.videoSrc && this.imagePreview.length > 0) || (this.data.image != ''  && this.data.videos.length > 0 )
    || (this.imagePreview.length > 0 &&this.data.videos.length  > 0) || (this.data.image != '' && this.videoSrc))
    {
   
    const formdata = new FormData();
    const images = this.imageform.get('images') as FormArray;
    console.log(images.value);
    const files: Array<File> = images.value;
    for (let i = 0; i < files.length; i++) {
      if (files[i] != null) {
        formdata.append('image', files[i], files[i]['name']);
      }
      console.log(formdata);
    }
    this.service.uploadimg(this.id, formdata).subscribe((res: any) => {
      console.log(res,'res image')
      let data={
        routeLink:this.routerlink,
      }
      this.service.formput(this.id,data).subscribe((res:any)=>{
        const formdata = new FormData();
        formdata.append('video', this.selectedfile);
    
        console.log('uploaded');
        this.service.uploadvid(this.id, formdata).subscribe((res: any) => {
         
          var postdata = {
            id: this.id,
          };
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/start-posting/residentaial-rent-details?' + queryString);
        });
    
      });
    },(error:any)=>{
      this.backImgError= error.error.message
      console.log(error.error.message)
    });
   
   
  }
  }
  async uploadvid() {
    const formdata = new FormData();
    formdata.append('video', this.selectedfile);
    this.service.uploadvid(this.id, formdata).subscribe((res: any) => {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/start-posting/residentaial-rent-preview?' + queryString);
     
    });
  }

  async uploadimg() {
    const formdata = new FormData();
    const images = this.imageform.get('images') as FormArray;
    console.log(images.value);
    const files: Array<File> = images.value;
    for (let i = 0; i < files.length; i++) {
      if (files[i] != null) {
        formdata.append('image', files[i], files[i]['name']);
      }
      console.log(formdata);
    }
    this.service.uploadimg(this.id, formdata).subscribe((res: any) => {
      console.log(res,'res image')
    });
  }
  backImgError:any
  async  routetopreview(){
    this.submited=true;
   this. backImgError=''

    if( (this.videoSrc && this.imagePreview.length > 0) || (this.data.image != ''  && this.data.videos.length > 0 )
    || (this.imagePreview.length > 0 &&this.data.videos.length  > 0) || (this.data.image != '' && this.videoSrc))
    {
      const formdata = new FormData();
      const images = this.imageform.get('images') as FormArray;
      console.log(images.value);
      const files: Array<File> = images.value;
      for (let i = 0; i < files.length; i++) {
        if (files[i] != null) {
          formdata.append('image', files[i], files[i]['name']);
        }
        console.log(formdata);
      }
      this.service.uploadimg(this.id, formdata).subscribe((res: any) => {
        console.log(res,'res image')
         this.uploadvid();

      },(error:any)=>{
        alert('hiiid')
        alert(error.error.message)
        this.backImgError= error.error.message
        console.log(error.error.message)
      });
   
    }
  }
  back(count: any) {
    if (count == 0) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/start-posting/residential-rent?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 1) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl(
        '/start-posting/residentaial-rent-location-details?' + queryString
      );

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 2) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl(
        '/start-posting/residentaial-rent-rental-details?' + queryString
      );

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 3) {
      var data = {
        id: this.id,
      };
      var queryString = new URLSearchParams(data).toString();
      this.router.navigateByUrl('/start-posting/residentaial-rent-amentites?' + queryString);

      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 4) {
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/residentaial-rent-gallery?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {});
    }
    if (count == 5) {
      var postdata = {
        id: this.id,
      };
      var queryString = new URLSearchParams(postdata).toString();
      this.router.navigateByUrl('/start-posting/residentaial-rent-details?' + queryString);
      this.service.formget(this.id).subscribe((res: any) => {});
    }
  }
  routeToProp(){
    this.router.navigateByUrl('/owner')
  }
  changeps(){
    this.router.navigateByUrl('/changepassword-seller')
  }
  logOut(){
    sessionStorage.clear();
    localStorage.clear();
    Cookie.delete('tokens');
    this.router.navigateByUrl('/');
  }
  removeImgBackend(name:any){
    let data ={
     url:name
    }
    this.service.remove_img(this.id,data).subscribe((res:any)=>{
     console.log(res);
     this.getall()
    })
   }
   removeVidBackend(){
     this.service.remove_vid(this.id).subscribe((res:any)=>{
       this.getall()
     })
   }
   checkErrorImg(old:any,current:any){
    console.log(old,'old',current,'current','img')
    if(current.length > 0 || old .length > 0 ){
      console.log('returned false img')
      return false
    }
    else{
      console.log('returned true img')
      return true
    }
   }
   checkError(old:any,current:any){
    console.log(old,'old',current,'current')
    if(old.length > 0 || current ){
      console.log('returned false')
      return false
    }
    else{
      console.log('returned true')
      return true
    }
   }
}
