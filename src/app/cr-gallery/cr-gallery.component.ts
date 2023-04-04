import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostPropertyService } from '../services/post-property.service';

@Component({
  selector: 'app-cr-gallery',
  templateUrl: './cr-gallery.component.html',
  styleUrls: ['./cr-gallery.component.css']
})
export class CrGalleryComponent {
 
  
      gallery!: any[];
      gallaryview!: any[];
      data:any;
      imageform : any = this.fb.group({
        images:this.fb.array([
          this.fb.control(null),
          this.fb.control(null),
          this.fb.control(null),
          this.fb.control(null),
          this.fb.control(null)
         
        ])
      })
      imagePreview: string[]=[];
      videoSrc!:string;
      errmsg!:string;
      selectedfile!:File;
      id:any;
      viderrmsg!: string;
    
    
      constructor(
        private fb: FormBuilder,
        private arouter: ActivatedRoute,
        private service: PostPropertyService,
        private router: Router
      ){
    
      }
      ngOnInit(): void {
        
        this.arouter.queryParams.subscribe(params => {
          console.log(params);
          this.id=params['id'];
          console.log(this.id,"this is id from sp");
          
        });
        this.service.formget(this.id).subscribe((res:any)=>{
    
          this.data = res;
          console.log(res);
        })
      }
      // changeImage(img: any) {
      //   this.gallery = [];
      //   this.gallaryview = [];
      //   var filesAmount = img.target.files.length;
      //   for (let i = 0; i < filesAmount; i++) {
      //     const res = img.target.files[i];
      //     this.gallery.push(res);
      //     var reader = new FileReader();
      //     reader.readAsDataURL(res);
      //     reader.onload = (event) => {
      //       this.gallaryview.push((<FileReader>event.target).result);
      //     }
      //   }
      // }
      onFileselect(e:any){
    
        this.imageform.get('images').reset();
        this.imagePreview= [];
        const files = e.target.files;
        if (files.length <= 5) {
          this.errmsg ='';
        for(let i=0;i < files.length && i<=5;i++){
          const file = files[i];
       
         const images = this.imageform.get('images') as FormArray;
         images.at(i).setValue(file);
    
          const reader = new FileReader();
          reader.onload= () =>{
            this.imagePreview[i] = reader.result as string;
    
            console.log(this.imagePreview);
    
          }
          reader.readAsDataURL(file);
        }
      }else {
        e.target.value = '';
        this.errmsg = 'Upload 5 images only';
        return;
      }

      }
      removeimg(index: number){
       
        console.log('remove working');
        this.imageform.get('images').get(index.toString()).setValue(null);
        this.imagePreview.splice(index,1);
        const input= document.getElementById('imageinput') as HTMLInputElement;
       input.value = '';
      }
    
      onvidselect(e:any){
        const file = e.target.files[0];
        if(file.size > 40* 1024 *1024){
          this.viderrmsg="File size must be in below 40mb"
          return;
        }
        this.viderrmsg='';
        this.selectedfile= file;
        const reader = new FileReader();
        reader .onload= ()=>{
            this.videoSrc = reader.result as string;
        }
        reader.readAsDataURL(file);
        console.log(this.selectedfile);
      }
      emptyfile!:File;
    
      removevid(){
        this.videoSrc ='';
       this.viderrmsg='';
       this.selectedfile= this.emptyfile ;
       console.log(this.selectedfile);
       const input= document.getElementById('videoinput') as HTMLInputElement;
       input.value = '';
        
      }
      routerlink='commercial-rent-gallery';
      submited=false;
     async submit(){

      this.submited=true;
    if( this.videoSrc && this.imagePreview.length > 0){
      await  this.uploadimg();
      let data={
        routeLink:this.routerlink,
      }
      this.service.formput(this.id,data);  
      const formdata = new FormData();
      formdata.append('video',this.selectedfile);
      console.log('updated');
      this.service.uploadvid(this.id,formdata).subscribe((res:any)=>{
        var postdata ={
    
          id:this.id
        }
        var queryString = new URLSearchParams(postdata).toString();
        this.router.navigateByUrl('/commercial-rent-add-details?' + queryString);
        this.service.formget(this.id).subscribe((res:any)=>{
        })
       })
      }
      }
      async   uploadvid(){
        const formdata = new FormData();
        formdata.append('video',this.selectedfile);
        this.service.uploadvid(this.id,formdata).subscribe((res:any)=>{
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl('/commercial-rent-preview?' + queryString);
      
          this.service.formget(this.id).subscribe((res: any) => {
            
          });
         })
    
      }
    
      async  uploadimg(){
        const formdata = new FormData();
        const images = this.imageform.get('images') as FormArray;
        console.log(images.value  )
        const files: Array<File> =images.value;
        for (let i = 0; i < files.length; i++) {
          if(files[i] !=null){
          formdata.append('image', files[i], files[i]['name']);
          }
          console.log(formdata);
        }
        this.service.uploadimg(this.id,formdata).subscribe((res:any)=>{
          
        
        })
      } 
      async  routetopreview(){
    
        await this.uploadimg();
        await this.uploadvid();
        
       
      }
      back(count: any) {
        if (count == 0) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl('/commercial-rent-property?' + queryString);
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 1) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl(
            '/commercial-rent-location-details?' + queryString
          );
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 2) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl(
            '/commercial-rent-rental-details?' + queryString
          );
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 3) {
          var data = {
            id: this.id,
          };
          var queryString = new URLSearchParams(data).toString();
          this.router.navigateByUrl('/commercial-rent-amenities?' + queryString);
    
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 4) {
          var postdata = {
            id: this.id,
          };
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/commercial-rent-gallery?' + queryString);
          this.service.formget(this.id).subscribe((res: any) => {});
        }
        if (count == 5) {
          var postdata = {
            id: this.id,
          };
          var queryString = new URLSearchParams(postdata).toString();
          this.router.navigateByUrl('/commercial-rent-add-details?' + queryString);
          this.service.formget(this.id).subscribe((res: any) => {});
        }
      }
    }
    
  
  
