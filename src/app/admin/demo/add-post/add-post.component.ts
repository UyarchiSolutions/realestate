import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { HtmlTagDefinition } from '@angular/compiler';
import { query } from '@angular/animations';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  constructor(
    private service: AdminService,
    private router: Router,
    private arouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.arouter.queryParams.subscribe((res: any) => {
      this.userName = res['user'];
      if (res['id']) {
        this.myform.get('userId')?.setValue(res['id']);
      }
    });
    console.log(this.myform.value);
  }
  submitted: boolean = false;
  myform = new FormGroup({
    adtype: new FormControl('', Validators.required),
    newsPaper: new FormControl('', Validators.required),
    Edition: new FormControl('', Validators.required),
    dateOfAd: new FormControl('', [Validators.required]),
    userId: new FormControl(''),
  });
  selectedImg: any;
  userName: any;
  submit() {
    this.submitted = true;
    console.log(
      this.myform.valid && this.imageform.valid,
      this.myform.valid,
      this.imageform.valid
    );
    if (this.myform.valid && this.imageform.valid) {
      this.service.add_demo_post(this.myform.value).subscribe((res: any) => {
        console.log('text uploaded');
        let formdata = new FormData();
        formdata.append('image', this.selectedImg);
        this.service.demo_img(formdata, res._id).subscribe((res2: any) => {
          console.log('img upload');
          let data = {
            id: res._id,
            user: this.userName,
          };
          let query = new URLSearchParams(data).toString();
          this.router.navigateByUrl(
            '/admin/manage-demo-post/property?' + query
          );
        });
        console.log('img upload2');
      });
    }
  }
  get Formcontrol() {
    return this.myform.controls;
  }
  imageform = new FormGroup({
    image: new FormControl('', Validators.required),
  });
  imagePreview: any;
  onFileSelect(e: any): void {
    this.imageform.get('image')?.reset();
    this.imagePreview = null;

    const file = e.target.files[0];

    if (file) {
      this.imageform.get('image')?.setValue(file);

      this.selectedImg = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        console.log(this.imagePreview);
      };
      reader.readAsDataURL(file);
    }
  }
  removeimg(input: HTMLInputElement) {
    input.value = '';
    this.imagePreview = '';
    this.selectedImg = '';
    this.imageform.get('image')?.setValue(null);
  }
}
