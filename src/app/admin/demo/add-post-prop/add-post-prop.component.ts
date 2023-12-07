import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-add-post-prop',
  templateUrl: './add-post-prop.component.html',
  styleUrls: ['./add-post-prop.component.css']
})
export class AddPostPropComponent {
  constructor(private service:AdminService,private router: Router) {}
  ngOnInit(): void {
 
  }
  submitted: boolean = false;
  myform = new FormGroup({
    newsPaper: new FormControl('', Validators.required),
    Edition: new FormControl('', Validators.required),
    dateOfAd: new FormControl('',[Validators.required]),
    userId: new FormControl('eae4ae53-e590-481f-9c7f-387b66914f4c'),
   
  });
  selectedImg:any
  submit() {
   
    this.submitted=true
    console.log(this.myform.valid && this.imageform.valid,this.myform.valid , this.imageform.valid)
    if(this.myform.valid && this.imageform.valid){
      this.service.add_demo_post(this.myform.value).subscribe((res:any)=>{
        console.log('text uploaded')
        let formdata = new FormData
        formdata.append('image',this.selectedImg)
        this.service.demo_img(formdata,res._id).subscribe((res:any)=>{
          console.log('img upload')
          this.router.navigateByUrl('/admin/manage-demo-post/property')
        })
       
      })
    }
  }
  get Formcontrol() {
    return this.myform.controls;
  }
  imageform = new FormGroup({
    image: new FormControl('',Validators.required)
  })
  imagePreview:any
  onFileSelect(e: any): void {
    this.imageform.get('image')?.reset()
    this.imagePreview = null;
  
    const file = e.target.files[0];
  
    if (file) {
       this.imageform.get('image')?.setValue(file);
     
       this.selectedImg = file
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        console.log(this.imagePreview);
      };
      reader.readAsDataURL(file);
    }
  }
  removeimg(input:HTMLInputElement){
    input.value=''
    this.imagePreview = ''
    this.selectedImg=''
    this.imageform.get('image')?.setValue(null);
  }
}